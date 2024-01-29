import "./styles.css";
import { React, useState } from "react";
import hiking from "./assets/hiking.jpg";
import reading from "./assets/reading.jpg";
import dinner from "./assets/dinner-with-friends.jpg";
import tea from "./assets/tea.jpg";

const images = [hiking, reading, dinner, tea];

const Loading = (calculatedWidth) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favorite images...</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;

    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
    });
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <header>
        <h1>My Favorite Things</h1>
        <h2>by Katherine Fier</h2>
      </header>
      <figure>
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}
        <figcaption>
          {currentImage + 1}/{images.length}
        </figcaption>
        {images.map((imageURL, index) => (
          <img
            src={imageURL}
            key={imageURL}
            alt="hiking"
            onClick={handleClick}
            onLoad={handleImageLoad}
            className={currentImage === index ? "display" : "hide"}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;
