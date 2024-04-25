// Array of audio file URLs
var audioFiles = [
    { url: 'song1.mp3', text: 'Piano sonata 16°, Sonata Facile', autor: 'Wolfang Amadeus Mozart', },
    { url: 'song2.mp3', text: 'The Well-Tempered Clavier', autor: 'Joahnn Sebastian Bach' },
    { url: 'song3.mp3', text: 'Suite 3°, Air', autor: 'Joahnn Sebastian Bach' },
    { url: 'song4.mp3', text: 'Canon and Gigue', autor: 'Johamm Pachelbel' },
    { url: 'song5.mp3', text: 'Fantasia', autor: 'Wolfgang Amadeus Mozart' },
    // Add more audio file URLs and corresponding texts as needed
  ];

  // Function to play a random audio file
  function playRandomAudio() {
    // Get a random index from the array
    var randomIndex = Math.floor(Math.random() * audioFiles.length);

    // Get the audio element and text element
    var audio = document.getElementById('randomAudio');
    var audioText = document.getElementById('audioText');
    var autorText = document.getElementById('autorText');

    // Set the source of the audio element
    audio.src = audioFiles[randomIndex].url;

    // Set the text above the audio tag
    audioText.textContent = audioFiles[randomIndex].text;
    autorText.textContent = audioFiles[randomIndex].autor;

    // Play the audio
    audio.play();
  }

  // Call the function when the page loads
  window.onload = playRandomAudio;