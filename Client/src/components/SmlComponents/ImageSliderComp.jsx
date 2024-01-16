import { useState } from "react";

const ImageSliderComp = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }
  return (
    <>
      <div
        className="rounded-[2rem] overflow-hidden"
        style={{ height: "100%", width: "100%", position: "relative" }}
      >
        <div
          className=" flex overflow-hidden rounded-[2rem] shadow-xl"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {images.map(({ url, alt }) => (
            <img
              style={{
                translate: `${-100 * imageIndex}%`,
                width: "100%",
              }}
              className="flex-grow-0 flex-shrink-0 transition-all duration-500"
              key={url}
              src={url}
              alt={alt}
            />
          ))}
        </div>

        <button
          onClick={showPrevImage}
          className="block absolute top-0 bottom-0 p-4 left-0 stroke-white transition-all focus:bg-black/20 hover:bg-black/20"
          aria-label="View Previous Image"
        >
          <i className="fa-solid fa-arrow-left text-white"></i>
        </button>
        <button
          onClick={showNextImage}
          className="block absolute top-0 bottom-0 p-4 right-0 stroke-white transition-all focus:bg-black/20 hover:bg-black/20"
          aria-label="View Previous Image"
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
          {images.map((_, index) => (
            <button
              className="hover:scale-125 transition-all"
              key={index}
              onClick={() => setImageIndex(index)}
              aria-label={`View Image ${index + 1}`}
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
