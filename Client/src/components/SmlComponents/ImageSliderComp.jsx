import { useState } from "react";

const ImageSliderComp = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }
  return (
    <>
      <div style={{ height: "100%", width: "100%", position: "relative" }}>
        <div
          className=" flex overflow-hidden"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {imageUrls.map((url) => (
            <img
              style={{
                translate: `${-100 * imageIndex}%`,
                width: "100%",
              }}
              className="flex-grow-0 flex-shrink-0 transition-all duration-500"
              key={url}
              src={url}
            />
          ))}
        </div>

        <button
          onClick={showPrevImage}
          className="block absolute top-0 bottom-0 p-4 left-0 stroke-white transition-all hover:bg-black/20"
        >
          <i className="fa-solid fa-arrow-left text-white"></i>
        </button>
        <button
          onClick={showNextImage}
          className="block absolute top-0 bottom-0 p-4 right-0 stroke-white transition-all hover:bg-black/20"
        >
          <i className="fa-solid fa-arrow-right text-white"></i>
        </button>
        <div
          className="flex text-white gap-2"
          style={{
            position: "absolute",
            bottom: ".5rem",
            left: "50%",
            translate: "-50%",
          }}
        >
          {imageUrls.map((_, index) => (
            <button
              className="hover:scale-125 transition-all"
              key={index}
              onClick={() => setImageIndex(index)}
            >
              {index === imageIndex ? (
                <i className="fa-solid fa-circle"></i>
              ) : (
                <i className="fa-regular fa-circle"></i>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSliderComp;
