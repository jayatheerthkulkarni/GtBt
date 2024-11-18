import { useState } from 'react';
import './App.css';

function App() {
  // Updated MP3 and image paths
  const badTouchAudioPath = '/badtouch.mp3';
  const goodTouchAudioPath = '/goodtouch.mp3';
  const initialImagePath = '/initboy.jpeg';
  const badTouchImagePath = '/sadboy.jpeg';

  // State variables for the image source and title visibility
  const [imageSrc, setImageSrc] = useState(initialImagePath); // Initial image
  const [showTitle, setShowTitle] = useState(false);
  const [badTouchAudio] = useState(new Audio(badTouchAudioPath)); // Audio for bad touch
  const [goodTouchAudio] = useState(new Audio(goodTouchAudioPath)); // Audio for good touch

  // Handle click event for "bad touch"
  const handleClick = () => {
    setImageSrc(badTouchImagePath); // Change the image
    badTouchAudio.play(); // Play the MP3
    setShowTitle(true); // Show the title

    // Once the MP3 finishes, reset the image and hide the title
    badTouchAudio.onended = () => {
      setImageSrc(initialImagePath); // Reset to the initial image
      setShowTitle(false);
    };
  };

  // Handle click event for "good touch"
  const otherclick = () => {
    goodTouchAudio.play(); // Play the good touch MP3
    setShowTitle(true); // Show the title

    // Once the MP3 finishes, reset the image and hide the title
    goodTouchAudio.onended = () => {
      setImageSrc(initialImagePath); // Reset to the initial image
      setShowTitle(false);
    };
  };

  return (
    <>
      <div className="img-container">
        
        <img src={imageSrc} alt="Image" />

        {/* Transparent button covering the entire image */}
        <button className="transparent-button image-region" onClick={otherclick} />

        {/* Transparent button for Region 1 */}
        <button className="transparent-button region1" onClick={handleClick} />

        {/* Transparent button for Region 2 */}
        <button className="transparent-button region2" onClick={handleClick} />

        {/* Additional Region 3 */}
        <button className="transparent-button region3" onClick={handleClick} />

        {/* Title text */}
        {showTitle && <div className="title">{badTouchAudio.paused ? "It's a good touch" : "No, that's a bad touch"}</div>}
      </div>
    </>
  );
}

export default App;
