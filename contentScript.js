// Include TensorFlow.js PoseNet model
const posenetScript = document.createElement('script');
posenetScript.src = "https://cdn.jsdelivr.net/npm/@tensorflow-models/posenet";
document.head.appendChild(posenetScript);

// Wait for TensorFlow.js to load
posenetScript.onload = () => {
  chrome.storage.local.get("userImage", async (data) => {
    if (data.userImage) {
      const img = new Image();
      img.src = data.userImage;
      document.body.appendChild(img);

      // Load PoseNet model and estimate pose
      const net = await posenet.load();
      const pose = await net.estimateSinglePose(img, {
        flipHorizontal: false
      });

      // Add clothing image to the page
      const clothingImg = new Image();
      clothingImg.src = chrome.runtime.getURL('clothes/tshirt.png');
      document.body.appendChild(clothingImg);

      // Adjust the clothing position based on keypoints
      const keypoints = pose.keypoints;
      const leftShoulder = keypoints.find(k => k.part === 'leftShoulder');
      const rightShoulder = keypoints.find(k => k.part === 'rightShoulder');

      // Set clothing position and size based on pose
      if (leftShoulder && rightShoulder) {
        const width = Math.abs(leftShoulder.position.x - rightShoulder.position.x) * 2;
        clothingImg.style.position = "absolute";
        clothingImg.style.left = `${leftShoulder.position.x - width / 2}px`;
        clothingImg.style.top = `${leftShoulder.position.y}px`;
        clothingImg.style.width = `${width}px`;
      }
    }
  });
};
