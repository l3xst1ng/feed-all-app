// Function to show the selected nav section and hide the others

const homeSection = document.getElementById("home-page");

const otherSections = document.querySelectorAll(".hidden-section");

const navLinks = document.querySelectorAll("nav ul li a");

function showSection(sectionId) {
  homeSection.style.display = "none"; // Hides the home section
  otherSections.forEach((section) => {
    if (section.id === sectionId) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

// Displaying the home section by default
homeSection.style.display = "block";

//  click event listeners to the navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents reloading - the default link behavior

    // Get the target section ID from the link's href
    const targetSectionId = event.target.getAttribute("href").slice(1);

    if (targetSectionId === "home-page") {
      // If the target section is the home page, show the home section
      homeSection.style.display = "block";
      otherSections.forEach((section) => (section.style.display = "none"));
    } else {
      // Otherwise, show the target section and hide the other sections
      showSection(targetSectionId);
    }

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  });
});

// Event listeners for the "Donate" and "Donate Now" buttons

const donateButton = document.getElementById("donate-btn-now");
const donateLink = document.getElementById("donate-btn");

// function to display donor form when donate buttons are clicked
const handleDonateButtonClicks = () => {
  showSection("donation");
};

donateButton.addEventListener("click", handleDonateButtonClicks);
donateLink.addEventListener("click", handleDonateButtonClicks);

// Handle form submission
const donationSection = document.getElementById("donation");
const form = document.getElementById("foodForm");
const thankYouCard = document.getElementById("thankYouCard");
const backToHomeButton = document.createElement("button");
backToHomeButton.textContent = "Back to Home";

backToHomeButton.addEventListener("click", () => {
  thankYouCard.style.display = "none";
  showSection("home-page");
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // An empty object to store the form data
  const donorData = {};

  // Looping through all form fields and add their values to the donorData object
  for (let i = 0; i < form.elements.length; i++) {
    const field = form.elements[i];
    if (field.name && field.value) {
      donorData[field.name] = field.value;
    }
  }

  // Updating the thank you card with the submitted data
  const thankYouHeader = document.getElementById("thankYouHeader");

  thankYouHeader.textContent = `Thank You ${donorData.firstName}! We thank you for your kind donation and we appreciate your spirited fight against hunger`;

  // Sending the data to the JSON server
  fetch("http://localhost:3000/donors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(donorData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    });
});

function showThankYou() {
  // Hiding the form and show the thank you card

  thankYouCard.style.display = "block";
  donationSection.style.display = "none";
}

thankYouCard.appendChild(backToHomeButton);
