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


  // Donate button click event
  document.querySelector("#donate-btn-now").addEventListener("click", () => {
    toggleSection("donation");
  });
//This code handles the navigation menu and toggles the visibility of sections.

//function to display the donor's Thank you card
function showThankYou() {
  const form = document.getElementById("foodForm");
  const thankYouCard = document.getElementById("thankYouCard");
  thankYouCard.style.display = "block";

  // Display submitted details in the thank you card
  document.getElementById("firstNameDisplay").innerText =
    "First Name: " + form.firstName.value;
  document.getElementById("lastNameDisplay").innerText =
    "Last Name: " + form.lastName.value;
  document.getElementById("contactDisplay").innerText =
    "Contact: " + form.contact.value;
  document.getElementById("foodCategoryDisplay").innerText =
    "Food Category: " + form.foodCategory.value;
  document.getElementById("descriptionDisplay").innerText =
    "Description: " + form.description.value;
  document.getElementById("locationDisplay").innerText =
    "Location: " + form.location.value;
}

//function that posts data to db.json.
function postDetails(key){
  const form = document.getElementById("foodForm");
  
  //Post request to db.json file to specific key
    fetch(`db.json/${key}`,{
      method: "POST",
      body: JSON.stringify({
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        contact: form.contact.value,
        foodCategory: form.foodCategory.value,
        description: form.description.value,
        location: form.location.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    } 
    )
    .then(response => {
      if (!response.ok){
        throw new Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .then (data => {
      console.log("Data successfully posted", data)
    })
    .catch(error => {
      console.log("Error posting data", error);
    });
  
};
