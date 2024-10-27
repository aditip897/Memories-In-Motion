// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import './Scrapbook.css';
// import Home from './Home'; 
// import { AiFillHome } from "react-icons/ai";
// import { AiFillFileAdd } from "react-icons/ai";
// import { MdAddAPhoto } from "react-icons/md";
// import ImageGallery from "react-image-gallery";
// import 'react-image-gallery/styles/css/image-gallery.css';
// //import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


// const Scrapbook = () => {

//   const[title, setTitle]=useState('');
//   const handleTitleChange = (event) => { 
//     setTitle(event.target.value);
//   }

// //   return (
// //     <div className="container">
// //         <div className="title-input">
// //             <input 
// //                 type="text" 
// //                 placeholder="Enter your title here"
// //                 value={title} 
// //                 onChange={handleTitleChange} 
// //             />
// //         </div>
// //         <h1 className="page-title">{title}</h1>
// //     </div>
// // );




//   const [images, setImages] = useState([
//     {
//       original: "https://cdn.pixabay.com/photo/2015/05/05/09/42/paper-753508_1280.jpg",
//       thumbnail: "https://cdn.pixabay.com/photo/2015/05/05/09/42/paper-753508_1280.jpg"
//     },
//     // {
//     //   original: "https://picsum.photos/800/600/",
//     //   thumbnail: "https://picsum.photos/250/150/",
//     // },
//     // {
//     //   original: "https://picsum.photos/800/600/",
//     //   thumbnail: "https://picsum.photos/250/150/",
//     // },
//   ]);

//   const addBlankPage = (event) => {
//     const imageUrl = "https://cdn.pixabay.com/photo/2015/05/05/09/42/paper-753508_1280.jpg";
//     const newImage = {
//       original: imageUrl,
//       thumbnail: imageUrl, // Use the same URL for thumbnail for simplicity
//     };

//     // Update the images state
//     setImages((prevImages) => [...prevImages, newImage]);

//   }

//   const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Track the selected image
//   const [overlayImages, setOverlayImages] = useState([]); // Store uploaded overlay images

//   const addImage = (event) => {
//     const files = event.target.files;
//     if (files.length > 0) {
//       const newOverlayImages = Array.from(files).map((file) => {
//         const imageUrl = URL.createObjectURL(file); // Create a local URL for the file
//         return imageUrl; // Return the URL to be used for overlay
//       });

//       // Update the overlay images state
//       setOverlayImages((prevImages) => [...prevImages, ...newOverlayImages]);
//     }
//   };
//   // const addImage = (event) => {
//   //   const files = event.target.files;
//   //   if (files.length > 0) {
//   //     const file = files[0]; // Get the first file
//   //     const imageUrl = URL.createObjectURL(file); // Create a local URL for the file

//   //     //Create a new image object and add it to the images state
//   //     const newImage = {
//   //       original: imageUrl,
//   //       thumbnail: imageUrl, // Use the same URL for thumbnail for simplicity
//   //     };

//   //     // Update the images state
//   //     setImages((prevImages) => [...prevImages, newImage]);
//   //   }
//   // };


//   const fileUpload = () => {
//     const fileInput = document.getElementById('fileInput');
//     if (fileInput) {
//       fileInput.click(); // Trigger the file input click event
//     } else {
//       console.error("File input not found.");
//     }
//   };

//   const handleImageSelect = (index) => {
//     setSelectedImageIndex(index); // Update selected image index
//   };

//   return (
//     <div className="container">
//       <ul className="navbar">
//         <li className = "links">
//           <Link to="/">
//             <div className = "icontxt">
//               <AiFillHome className="icons" /> 
//               Home
//             </div>
//           </Link>
//         </li> 
//         <li className = "links">
//           <span onClick={fileUpload}>
//               <div className = "icontxt">
//               <MdAddAPhoto className="icons"/> 
//                 Add Image
//                 </div>
              
//           </span>
//         </li>
//         <li className = "links">
//         <span onClick={addBlankPage}>
//           <div className = "icontxt">
//           <AiFillFileAdd className="icons"/>
//           New Page
//           </div>
//           </span>
//         </li>
//       </ul>

//       <input
//         type="file"
//         accept="image/*" // Fix the accept attribute to allow all image types
//         style={{ display: 'none' }} // Hide the input
//         id="fileInput"
//         onChange={addImage} // Corrected spelling from onchange to onChange
//         multiple
//       />
//       <div className="content">
//         <ImageGallery
//           items={images.map((image, index) => ({
//             ...image,
//             renderItem: () => (
//               <div style={{ position: 'relative' }} onClick={() => handleImageSelect(index)}>
//                 <img
//                   src={image.original || "https://via.placeholder.com/800/600?text=Blank+Image"}
//                   alt="Gallery"
//                   style={{ width: '100%', height: 'auto' }}
//                 />
//                 {selectedImageIndex === index && overlayImages.map((overlay, overlayIndex) => (
//                   <img
//                     key={overlayIndex}
//                     src={overlay}
//                     alt={`Overlay ${overlayIndex}`}
//                     style={{
//                       position: 'absolute',
//                       top: `${Math.random() * 50}%`, // Randomly place overlay (for demo, adjust as needed)
//                       left: `${Math.random() * 50}%`,
//                       width: '100px', // Set the size of overlay images
//                       height: '100px', // Adjust size as needed
//                       transform: 'translate(-50%, -50%)', // Center the image
//                       cursor: 'pointer',
//                     }}
//                   />
//                 ))}
//               </div>
//             ),
//           }))}
//         />
//       </div>
      
      

//       <ImageGallery items={images} />
      
//     </div>
//   );
// };

// export default Scrapbook;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Scrapbook.css';
import Home from './Home'; 
import { AiFillHome } from "react-icons/ai";
import { AiFillFileAdd } from "react-icons/ai";
import { MdAddAPhoto } from "react-icons/md";
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

const Scrapbook = () => {
  const [title, setTitle] = useState('');
  //const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [overlayImages, setOverlayImages] = useState([]);

  const [images, setImages] = useState([
        {
          original: "https://cdn.pixabay.com/photo/2015/05/05/09/42/paper-753508_1280.jpg",
          thumbnail: "https://cdn.pixabay.com/photo/2015/05/05/09/42/paper-753508_1280.jpg"
        },
  ]);

  const handleTitleChange = (event) => { 
    setTitle(event.target.value);
  }

  const addBlankPage = () => {
    const imageUrl = "https://cdn.pixabay.com/photo/2015/05/05/09/42/paper-753508_1280.jpg";
    const newImage = { original: imageUrl, thumbnail: imageUrl };
    setImages((prevImages) => [...prevImages, newImage]);
  }

  const addImage = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newOverlayImages = Array.from(files).map((file) => {
        const imageUrl = URL.createObjectURL(file);
        return imageUrl;
      });
      setOverlayImages((prevImages) => [...prevImages, ...newOverlayImages]);
    }
  };

  const fileUpload = () => {
    document.getElementById('fileInput').click();
  };

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
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
              <div style={{ position: 'relative' }} onClick={() => handleImageSelect(index)}>
                <img
                  src={image.original}
                  alt="Gallery"
                  style={{ width: '100%', height: 'auto' }}
                />
                {selectedImageIndex === index && overlayImages.map((overlay, overlayIndex) => (
                  <img
                    key={overlayIndex}
                    src={overlay}
                    alt={`Overlay ${overlayIndex}`}
                    style={{
                      position: 'absolute',
                      top: `${Math.random() * 50}%`, // Randomly position overlays for demo
                      left: `${Math.random() * 50}%`,
                      width: '100px',
                      height: '100px',
                      transform: 'translate(-50%, -50%)',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
};

export default Scrapbook;
