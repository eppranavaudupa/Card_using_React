import React, { useState } from 'react';
  
import './Styles.css'; // Import the CSS file

export function Elements() {
  const [image, setImage] = useState(null); // State to store the selected image

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader(); // Create a FileReader to read the file
      reader.onload = (e) => {
        setImage(e.target.result); // Set the image data as a base64 string
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div className="imgDiv">
      {/* Display the selected image */}
      {image && <img src={image} alt="Selected" />}
      {/* File input to select an image */}
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <input type="text" placeholder="NAME" />
      <input type="text" placeholder="BIO" />
      <input type="text" placeholder="Interested Files" />
      <input type="text" placeholder='LinkedInn link' />     
    </div>
  );
}
