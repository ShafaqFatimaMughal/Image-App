import React from 'react';

function ImageApp() {
  return (
    <div>
      <header>
        <h1>Image App</h1>
      </header>
      <div className="container">
        <div className="image-container">
          <img src="/image1.jpg" alt="Image 1" />
          <img src="/image2.jpg" alt="Image 2" />
        </div>
      </div>
    </div>
  );
}

export default ImageApp;