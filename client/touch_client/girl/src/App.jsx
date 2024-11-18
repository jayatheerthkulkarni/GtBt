import { useState } from 'react';
import './App.css';

function App() {
  // MP3 and image paths
  const mp3Path = '/WhatsApp Audio 2024-11-16 at 17.48.42_ce85081a.mp3';
  const newImagePath = '/WhatsApp Image 2024-11-15 at 11.03.41.jpeg';
  const goodTouchAudioPath = '/WhatsApp Audio 2024-11-16 at 12.53.10.mp3';

  // State variables for the image source and title visibility
  const [imageSrc, setImageSrc] = useState('/public/WhatsApp Image 2024-11-15 at 11.03.34.jpeg'); // Initial image
  const [showTitle, setShowTitle] = useState(false);
  const [audio] = useState(new Audio(mp3Path)); // Audio element to play the MP3
  const [goodTouchAudio] = useState(new Audio(goodTouchAudioPath)); // Audio for good touch

  // Handle click event for "bad touch"
  const handleClick = () => {
    setImageSrc(newImagePath); // Change the image
    audio.play(); // Play the MP3
    setShowTitle(true); // Show the title

    // Once the MP3 finishes, reset the image and hide the title
    audio.onended = () => {
      setImageSrc('/public/WhatsApp Image 2024-11-15 at 11.03.34.jpeg');
      setShowTitle(false);
    };
  };

  // Handle click event for "good touch"
  const otherclick = () => {
    goodTouchAudio.play(); // Play the good touch MP3
    setShowTitle(true); // Show the title

    // Once the MP3 finishes, reset the image and hide the title
    goodTouchAudio.onended = () => {
      setImageSrc('/public/WhatsApp Image 2024-11-15 at 11.03.34.jpeg');
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
        {showTitle && <div className="title">{audio.paused ? "It's a good touch" : "No, that's a bad touch"}</div>}
      </div>
    </>
  );
}

export default App;
