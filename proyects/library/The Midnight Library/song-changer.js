// Array of audio file URLs
var audioFiles = [
    "song1.mp3",
    "song2.mp3",
    // Add more audio file URLs as needed
  ];
  
  // Function to play a random audio file
  function playRandomAudio() {
    // Get a random index from the array
    var randomIndex = Math.floor(Math.random() * audioFiles.length);
  
    // Create an audio element
    var audio = new Audio(audioFiles[randomIndex]);
  
    // Play the audio
    audio.play();
  }
  
  // Call the function when the page loads
  window.onload = playRandomAudio;
  