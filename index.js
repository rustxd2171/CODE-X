// Select the button
const modeToggle = document.getElementById('modeToggle');

// Add event listener to toggle the mode
modeToggle.addEventListener('click', () => {
  // Toggle the "dark-mode" class on the body
  document.body.classList.toggle('dark-mode');

  // Update button text and icon based on the current mode
  if (document.body.classList.contains('dark-mode')) {
    modeToggle.innerHTML = 'Light Mode <i class="bx bxs-sun"></i>'; // Switch to light mode icon and text
  } else {
    modeToggle.innerHTML = 'Dark Mode <i class="bx bxs-moon"></i>'; // Switch to dark mode icon and text
  }
});

//hamburger menu
let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "300px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
        }
