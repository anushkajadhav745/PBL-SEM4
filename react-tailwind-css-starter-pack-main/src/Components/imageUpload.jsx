import React, { useState } from "react";
import axios from "axios";

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file)); // Show image preview
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:4000/api/upload/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage(response.data.message);
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error(error);
      setMessage("Image upload failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-xl font-bold mb-4">Upload an Image</h2>

      {message && <p className="mb-2">{message}</p>}

      <form onSubmit={handleUpload}>
        <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />
        {preview && <img src={preview} alt="Preview" className="w-40 h-40 object-cover mb-4" />}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Upload
        </button>
      </form>

      {imageUrl && (
        <div className="mt-4">
          <p>Uploaded Image URL:</p>
          <a href={imageUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {imageUrl}
          </a>
          <img src={imageUrl} alt="Uploaded" className="w-40 h-40 object-cover mt-2" />
        </div>
      )}
    </div>
  );
}
