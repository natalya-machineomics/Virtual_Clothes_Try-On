from flask import Flask, request, jsonify
from PIL import Image
import io
import numpy as np
import tensorflow as tf
from some_model import load_model, process_image  # Import your segmentation model

app = Flask(__name__)

# Load your segmentation model
model = load_model()

@app.route('/segment', methods=['POST'])
def segment_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    # Load the image
    img = Image.open(request.files['image'].stream)
    img_array = np.array(img)

    # Process the image (segment it)
    segmented_image = process_image(model, img_array)

    # Convert the processed image to bytes and return as a response
    img_bytes = io.BytesIO()
    segmented_image.save(img_bytes, format='PNG')
    img_bytes.seek(0)
    
    return send_file(img_bytes, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)
