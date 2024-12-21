// Select elements
const fetchButton = document.getElementById('fetch-button');
const dogImage = document.getElementById('dog-image');

// Function to fetch and display a random dog image
async function fetchDogImage() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    dogImage.src = data.message;
    dogImage.alt = "A random dog image";
  } catch (error) {
    console.error('Error fetching dog image:', error);
  }
}

// Event listener for the button
fetchButton.addEventListener('click', fetchDogImage);

// Fetch an initial image when the page loads
fetchDogImage();
