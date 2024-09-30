document.getElementById('upload-image').addEventListener('change', function (event) {
  const reader = new FileReader();
  reader.onload = function () {
    document.getElementById('photo').src = reader.result;
    chrome.storage.local.set({ userImage: reader.result });
  };
  reader.readAsDataURL(event.target.files[0]);
});

document.getElementById('try-on-clothes').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["contentScript.js"],
    });
  });
});
