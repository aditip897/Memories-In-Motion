import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Scrapbook.css';
import Home from './Home'; 
import { AiFillHome, AiFillFileAdd, AiFillDelete } from "react-icons/ai";
import { MdAddAPhoto } from "react-icons/md";
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import { Rnd } from 'react-rnd';

const Scrapbook = () => {
  
  const [images, setImages] = useState([
    { 
      original: "https://cdn.pixabay.com/photo/2015/05/05/09/42/paper-753508_1280.jpg", 
      thumbnail: "https://cdn.pixabay.com/photo/2015/05/05/09/42/paper-753508_1280.jpg", 
      overlays: [] 
    },
  ]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [hoveredOverlayIndex, setHoveredOverlayIndex] = useState(null); 
  const [hoveredMainIndex, setHoveredMainIndex] = useState(null); 

  const addBlankPage = () => {
    const imageUrl = "https://cdn.pixabay.com/photo/2015/05/05/09/42/paper-753508_1280.jpg";
    setImages((prevImages) => [
      ...prevImages, 
      { original: imageUrl, thumbnail: imageUrl, overlays: [] }
    ]);
  };

  const deletePage = (index) => {
    if (images.length <= 1) {
      alert("You must have at least one page.");
      return;
    }
    setImages(images.filter((_, i) => i !== index));
    if (selectedImageIndex === index) {
      setSelectedImageIndex(Math.max(index - 1, 0)); // Select previous image or first if none left
    }
  };

  const addImage = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newOverlayImages = Array.from(files).map((file) => ({
        url: URL.createObjectURL(file),
        position: { x: 50, y: 50 },
        size: { width: 100, height: 100 }
      }));
      setImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[selectedImageIndex].overlays.push(...newOverlayImages);
        return updatedImages;
      });
      resetFileInput();
    }
  };

  const resetFileInput = () => {
    document.getElementById('fileInput').value = null;
  };

  const fileUpload = () => {
    document.getElementById('fileInput').click();
  };

  const deleteOverlayImage = (overlayIndex) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[selectedImageIndex].overlays.splice(overlayIndex, 1);
      return updatedImages;
    });
  };

  return (
    <div className="container">
      <ul className="navbar">
        <li className="links">
          <Link to="/">
            <div className="icontxt">
              <AiFillHome className="icons" /> Home
            </div>
          </Link>
        </li> 
        <li className="links">
          <span onClick={fileUpload}>
            <div className="icontxt">
              <MdAddAPhoto className="icons"/> 
              Add Image
            </div>
          </span>
        </li>
        <li className="links">
          <span onClick={addBlankPage}>
            <div className="icontxt">
              <AiFillFileAdd className="icons"/>
              New Page
            </div>
          </span>
        </li>
      </ul>

      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="fileInput"
        onChange={addImage}
        multiple
      />

      <div className="content">
        <ImageGallery
          items={images.map((image, index) => ({
            ...image,
            renderItem: () => (
              <div style={{ position: 'relative' }} onMouseEnter={() => setHoveredMainIndex(index)} onMouseLeave={() => setHoveredMainIndex(null)}>
                <img
                  src={image.original}
                  alt="Gallery"
                  style={{ width: '100%', height: 'auto' }}
                  onClick={() => setSelectedImageIndex(index)} // Select image on click
                />
                {hoveredMainIndex === index && (
                  <AiFillDelete
                    className="delete-icon"
                    onClick={(e) => { e.stopPropagation(); deletePage(index); }}
                    style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer', color: 'red' }}
                  />
                )}
                {selectedImageIndex === index && image.overlays.map((overlay, overlayIndex) => (
                  <Rnd
                    key={overlayIndex}
                    bounds="parent"
                    size={{ width: overlay.size.width, height: overlay.size.height }}
                    position={{ x: overlay.position.x, y: overlay.position.y }}
                    onDragStop={(e, data) => {
                      const updatedImages = [...images];
                      updatedImages[selectedImageIndex].overlays[overlayIndex].position = { x: data.x, y: data.y };
                      setImages(updatedImages);
                    }}
                    onResizeStop={(e, direction, ref, delta, position) => {
                      const updatedImages = [...images];
                      updatedImages[selectedImageIndex].overlays[overlayIndex].size = {
                        width: ref.offsetWidth,
                        height: ref.offsetHeight
                      };
                      updatedImages[selectedImageIndex].overlays[overlayIndex].position = position;
                      setImages(updatedImages);
                    }}
                  >
                    <div className="overlay-container">
                      <img
                        src={overlay.url}
                        alt={`Overlay ${overlayIndex}`}
                        style={{
                          position: 'absolute',
                          top: '0%',
                          left: '0%',
                          width: '100%',
                          height: '100%',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={() => setHoveredOverlayIndex(overlayIndex)}
                        onMouseLeave={() => setHoveredOverlayIndex(null)}
                      />
                      
                        <AiFillDelete
                          className="delete-icon2"
                          onClick={(e) => { e.stopPropagation(); deleteOverlayImage(overlayIndex); }}
                          style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            cursor: 'pointer',
                            color: 'red'
                          }}
                        />
                     
                    </div>
                  </Rnd>
                ))}
              </div>
            ),
          }))}
          startIndex={selectedImageIndex}
          onSlide={(index) => setSelectedImageIndex(index)}
        />
      </div>
    </div>
  );
};

export default Scrapbook;