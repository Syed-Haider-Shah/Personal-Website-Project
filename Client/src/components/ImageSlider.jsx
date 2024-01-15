import pic1 from "./Images/back1.jpg";
import pic2 from "./Images/back2.jpg";
import pic3 from "./Images/back3.jpg";
import pic4 from "./Images/back4.jpg";
import ImageSliderComp from "./SmlComponents/ImageSliderComp";

const IMAGES = [
  { url: pic1, alt: "Slider Image One" },
  { url: pic2, alt: "Slider Image Two" },
  { url: pic3, alt: "Slider Image Three" },
  { url: pic4, alt: "Slider Image Four" },
];

const ImageSlider = () => {
  return (
    <>
      <div
        className="object-cover w-[100%] h-[100%] block pb-10"
        style={{
          maxWidth: "1600px",
          width: "100%",
          height: "800px",
          margin: "3rem auto",
        }}
      >
        <ImageSliderComp images={IMAGES} />
      </div>
    </>
  );
};

export default ImageSlider;
