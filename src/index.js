import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

// Importing local images matching your file tree structure
import one from "./assets/image/one.jpeg";
import two from "./assets/image/two.jpeg";
import three from "./assets/image/three.jpeg";
import four from "./assets/image/four.jpeg";
import five from "./assets/image/five.jpeg";
import six from "./assets/image/six.jpeg";
import eight from "./assets/image/eight.jpeg";
import nine from "./assets/image/nine.jpeg";
import ten from "./assets/image/ten.jpeg";
import eleven from "./assets/image/11.jpeg";
import twelve from "./assets/image/12.jpeg";
import thirteen from "./assets/image/13.jpeg";
import fourteen from "./assets/image/14.jpeg";
import fifteen from "./assets/image/15.jpeg";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Navbar Component matching your screenshot
function Navbar() {
  return (
    <div className="cls">
      <div>
        <a href="#all-images">
          <h1>All Images</h1>
        </a>
      </div>
      <div>
        <a href="#portraits">
          <h1>Portraits</h1>
        </a>
      </div>
      <div>
        <a href="#wedding">
          <h1>Wedding</h1>
        </a>
      </div>
      <div>
        <a href="#nature">
          <h1>Nature</h1>
        </a>
      </div>
    </div>
  );
}

// Image Component with full-screen lightbox modal on click
function Image() {
  // State to hold the currently clicked image source for full-screen display
  const [selectedImage, setSelectedImage] = useState(null);

  // Array of all imported images
  const galleryImages = [
    one,
    two,
    three,
    four,
    five,
    six,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
  ];

  return (
    <div>
      
      <div className="gallery-grid">
        {galleryImages.map((imgSrc, index) => (
          <div key={index} className="gallery-item">
            <img
              src={imgSrc}
              alt={`Gallery item ${index + 1}`}
              onClick={() => setSelectedImage(imgSrc)}
            />
          </div>
        ))}
      </div>

      {/* Full-screen Lightbox Modal */}
      {selectedImage && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedImage(null)} // Close when clicking background
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent close on clicking image container
          >
            <span
              className="close-button"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </span>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Rendering components into root
root.render(
  <div>
    <Navbar></Navbar>
    <Image></Image>
    <Image></Image>
    <Image></Image>
  </div>
);