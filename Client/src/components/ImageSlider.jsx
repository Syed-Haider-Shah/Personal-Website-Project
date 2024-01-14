import pic1 from "./Images/back1.jpg";
import pic2 from "./Images/back2.jpg";
import pic3 from "./Images/back3.jpg";
import pic4 from "./Images/back4.jpg";
import ImageSliderComp from "./SmlComponents/ImageSliderComp";

const IMAGES = [pic1, pic2, pic3, pic4];

const ImageSlider = () => {
  return (
    <>
      <div
        className="object-cover w-[100%] h-[100%] block"
        style={{
          maxWidth: "1600px",
          width: "100%",
          height: "800px",
          margin: "0 auto",
        }}
      >
        <ImageSliderComp imageUrls={IMAGES} />
      </div>
    </>
  );
};

export default ImageSlider;
