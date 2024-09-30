# Virtual Clothes Try-On Chrome Extension

This project is a Chrome extension that allows users to virtually try on clothes using image processing and pose estimation. The extension leverages **TensorFlow.js** for pose detection and **BodyPix** for segmentation, enabling realistic clothing overlays based on the user's body.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [How It Works](#how-it-works)
  - [Pose Estimation](#pose-estimation)
  - [Person Segmentation](#person-segmentation)
  - [Clothing Overlay](#clothing-overlay)
- [Advanced Features](#advanced-features)
- [Future Improvements](#future-improvements)
- [Contributions](#contributions)
- [License](#license)

## Features

- Upload a photo and virtually try on a selected item of clothing (e.g., a t-shirt).
- **Pose Estimation**: Detects keypoints like shoulders and torso to fit clothing accurately.
- **Person Segmentation**: Uses BodyPix to remove the background and focus on the user’s body.
- Clothing is resized and positioned based on the user's pose and segmented body.
- Responsive and interactive extension that works across different websites.

## Technologies

- **Chrome Extension API**
- **HTML/CSS**: For the UI of the extension popup.
- **JavaScript (ES6+)**: Core functionality and interactions.
- **TensorFlow.js**: For pose estimation and segmentation.
  - [PoseNet](https://github.com/tensorflow/tfjs-models/tree/master/posenet): To detect body keypoints.
  - [BodyPix](https://github.com/tensorflow/tfjs-models/tree/master/body-pix): To segment the person from the background.
- **Python Flask (Optional)**: For server-side image processing if you want more advanced segmentation (see Advanced Features).

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/virtual-try-on-extension.git
cd virtual-try-on-extension
```

## 2. Load the Chrome Extension

- Open Google Chrome and go to `chrome://extensions/`.
- Enable **Developer mode** in the top right corner.
- Click on **Load unpacked** and select the folder where the repository is located.
- The extension will now appear in your browser's toolbar.

## 3. Run the Extension

- Click on the extension icon.
- Upload a photo of yourself using the provided file input.
- Choose the clothing item to try on (e.g., a t-shirt).
- The clothing will be overlaid on the image based on the estimated pose and segmented body.

## 4. (Optional) Set Up Backend for Advanced Segmentation

If you want to use more advanced segmentation models:

- Set up a Python Flask server for image processing (refer to the `backend` folder in the repository).
- Modify the Chrome extension to send the uploaded image to the backend for processing.
- Receive the segmented image and overlay the clothes.

## How It Works

### Pose Estimation

The extension uses **TensorFlow.js** and the **PoseNet** model to detect keypoints on the user's body (such as shoulders, torso, and arms). These keypoints help align the clothing image with the user’s body, ensuring the clothes fit naturally.

### Person Segmentation

The **BodyPix** model is used to segment the person from the background. The segmentation mask allows us to remove the background and focus only on the user’s body. This step improves the accuracy of clothing placement and makes the virtual try-on experience more realistic.

### Clothing Overlay

Once the pose estimation and segmentation are done:

- A clothing image is selected from the extension's assets.
- The clothing image is resized and placed over the segmented body using the detected keypoints (e.g., shoulders).
- The result is a virtual try-on experience where the user can see how the clothes fit their body.

## Advanced Features

- **Segmentation via BodyPix**: The extension uses **BodyPix** to segment the user’s body from the background, allowing more accurate clothing placement.
- **Custom Backend for Advanced Processing**: You can add an optional Python-based backend to process images using more advanced segmentation models like **U-Net** for more refined results. This can be done via an API call to a Flask server, which returns the processed image.

## Future Improvements

- **Multiple Clothing Options**: Expand the functionality to allow users to try on a variety of clothing items, such as jackets, pants, or accessories.
- **3D Clothing Fitting**: Implement 3D geometric deformation to make clothes fit more naturally on the user's body.
- **User Interaction**: Allow users to adjust the size, rotation, and positioning of the clothes manually.

## Contributions

Contributions are welcome! Feel free to submit a pull request if you would like to add features, fix bugs, or improve the extension.

