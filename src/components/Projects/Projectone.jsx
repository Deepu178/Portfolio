import React from "react";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  "https://images.unsplash.com/photo-1649921779881-866fe51c6b45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1619390116018-a5fc66ef5d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2101&q=80",
  "https://images.unsplash.com/photo-1619384556515-55c31cc01382?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80",
  "https://images.unsplash.com/photo-1619390116018-a5fc66ef5d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1501&q=80",
  "https://images.unsplash.com/photo-1641659376402-3d2f48a91ed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
];

export const Projectone = () => {
  const [img, setImg] = useState(0);

  const next = () => {
    if (img === images.length - 1) {
      setImg(0);
    } else {
      setImg(img + 1);
    }
  };

  const prev = () => {
    if (img === 0) {
      setImg(images.length - 1);
    } else {
      setImg(img - 1);
    }
  };
  return (
    <section>
      <div className="flex flex-row w-1/3 space-x-5 p-10 text-xl font-semibold font-sans">
        <div>First Project:</div>
        <div>Image Carousel</div>
      </div>

      {images.map(
        (image, index) =>
          img === index && (
            <div key={image}>
              <img src={image} alt="img" className="" />
            </div>
          )
      )}
      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next</button>
    </section>
  );
};
