// Select the button element
const changeBackground = document.querySelector('#changeBackground');

// Add event listener to the button
changeBackground.addEventListener('click', () => {
  // Get a random number between 1 and 4
  const random = Math.floor(Math.random() * 4) + 1;

  // Remove any existing background classes from the body element
  document.body.classList.remove('background1', 'background2', 'background3', 'background4');

  //lower the image file size first lmao

  // Add the appropriate background class based on the random number
  document.body.classList.add(`background${random}`);
});
