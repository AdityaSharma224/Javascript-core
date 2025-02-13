import React, { useCallback, useState } from "react";

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://helios-i.mashable.com/imagery/articles/00GrhkFBBABYa3okvMLjnur/hero-image.fill.size_1200x1200.v1623363652.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo3p0bZZik-VvQ5DKxQeL_RI3AM2__be-YDYcDMknDd3nJ-CKy-PMadsw9O40qm_JgRw4&usqp=CAU",
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/tesla-would-likely-try-to-bring-cars-to-the-market-in-india-in-the-range-of-24-000-to-36-000-becau-183250612-16x9.jpg?VersionId=gcBy.TCTXdslUwZoG1ZRIKkhQmNUQi5H&size=690:388",
    "https://variety.com/wp-content/uploads/2024/07/Elon-Musk.jpg?w=1000&h=667&crop=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeenmPo8e1apzDqlugFk8CM2Kk2RjVBqxn2g&s",
  ];

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay)
    }
  }

  const throttle = (func, limit) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const handleprev = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const handleDebouncedPrev = useCallback(throttle(handleprev, 2000), []);
  const handleDebouncedNext = useCallback(throttle(handleNext, 2000), []);

  return (
    <div className="Carousel">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          onClick={handleDebouncedPrev}
          style={{
            marginRight: "20px", // Add spacing to the right of the left button
          }}
        >
          {"<"}
        </button>
        <img
          src={images[currentImage]}
          style={{
            height: "400px",
            width: "400px",
            objectFit: "cover",
          }}
        />
        <button
          onClick={handleDebouncedNext}
          style={{
            marginLeft: "20px", // Add spacing to the left of the right button
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Carousel;
