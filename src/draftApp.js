// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [element, setElement] = useState(
//     'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/615535',
//   );
//   // choose an image
//   // const [indexOutput, setIndexOutput] = useState(0);
//   const [elementOutput, setElementOutput] = useState(
//     'https://images-na.ssl-images-amazon.com/images/I/71PbbmDKazL._SY450_.jpg',
//   );
//   // final image
//   const [textTop, setTextTop] = useState('');
//   const [textBottom, setTextBottom] = useState('');

//   useEffect(() => {
//     axios.get('https://api.memegen.link/templates').then((result) => {
//       setData(result.data);
//       console.log(result.data);
//     });
//   }, []);

//   const changeImg = () => {
//     const newElement = data[index].blank;
//     setElement(newElement);
//     const newIndex = index === data.length - 1 ? 0 : index + 1;
//     setIndex(newIndex);
//     console.log(element);
//   };

//   const submitAMemeClick = () => {
//     const newElementOutput = element;
//     setElementOutput(newElementOutput);
//     console.log(elementOutput);
//   };

//   const textTopClick = () => {
//     const newTextTop = document.getElementById('top').value;
//     setTextTop(newTextTop);
//     console.log(textTop);
//   };

//   const textBottomClick = () => {
//     const newTextBottom = document.getElementById('bottom').value;
//     setTextBottom(newTextBottom);
//     console.log(textBottom);
//   };

//   const generateClick = () => {
//     const newElementOutput =
//       element.slice(0, element.indexOf('.', 32)) +
//       '/' +
//       textTop +
//       '/' +
//       textBottom +
//       '.png';
//     setElementOutput(newElementOutput);
//     console.log(elementOutput);
//   };

//   const downloadUrl = () => {
//     const url = elementOutput;
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.responseType = 'blob';
//     xhr.onload = function (e) {
//       if (this.status === 200) {
//         const blob = this.response;
//         const a = document.createElement('a');
//         document.body.appendChild(a);
//         const blobUrl = window.URL.createObjectURL(blob);
//         a.href = blobUrl;
//         a.download = 'imageDownload.jpg';
//         a.click();
//         setTimeout(() => {
//           window.URL.revokeObjectURL(blobUrl);
//           document.body.removeChild(a);
//         }, 0);
//       }
//     };
//     xhr.send();
//   };

//   return (
//     <div className="Location">
//       <img
//         id="image"
//         className="box1"
//         src={element}
//         alt="Meme"
//         width="100"
//         height="100"
//       />
//       <button
//         className="chooseAMeme"
//         width="100"
//         height="100"
//         onClick={changeImg}
//       >
//         Choose a meme
//       </button>
//       <button
//         className="submitAMeme"
//         width="100"
//         height="100"
//         onClick={submitAMemeClick}
//       >
//         Submit a meme
//       </button>
//       <input type="text" id="top" className="topText" />
//       <button onClick={textTopClick} className="topButton">
//         Submit top text
//       </button>
//       <input type="text" id="bottom" className="bottomText" />
//       <button onClick={textBottomClick} className="bottomButton">
//         Submit bottom text
//       </button>

//       <button onClick={generateClick} className="generateButton">
//         Generate
//       </button>

//       <a className="box3" href={elementOutput} download>
//         <img src={elementOutput} alt="Meme" width="500" height="400" />
//       </a>

//       <button onClick={downloadUrl} className="downloadButton">
//         Download
//       </button>
//     </div>
//   );
// }

// export default App;
