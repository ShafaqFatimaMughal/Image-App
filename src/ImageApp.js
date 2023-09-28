import React from 'react';

function ImageApp() {
  return (
    <div>
      <header>
        <h1>Image App</h1>
      </header>
      <div className="container">
        <div className="image-container">
          <img src="/images/image1.jpg" alt="a leather bag" />
          <img src="/images/image2.jpg" alt="some more leather belongings" />
        </div>
      </div>
    </div>
  );
}

export default ImageApp;