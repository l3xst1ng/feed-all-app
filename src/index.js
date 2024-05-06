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

// // Handle form submission
// const donationSection = document.getElementById("donation");
// const form = document.getElementById("foodForm");
// const thankYouCard = document.getElementById("thankYouCard");
// const backToHomeButton = document.createElement("button");
// backToHomeButton.textContent = "Back to Home";

// backToHomeButton.addEventListener("click", () => {
//   thankYouCard.style.display = "none";
//   showSection("home-page");
// });
// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // Prevent the default form submission behavior

//   // An empty object to store the form data
//   const donorData = {};

//   // Looping through all form fields and add their values to the donorData object
//   for (let i = 0; i < form.elements.length; i++) {
//     const field = form.elements[i];
//     if (field.name && field.value) {
//       donorData[field.name] = field.value;
//     }
//   }

//   // Update the thank you card with the submitted data
//   // const firstNameDisplay = document.getElementById("firstNameDisplay");
//   // const lastNameDisplay = document.getElementById("lastNameDisplay");
//   // const contactDisplay = document.getElementById("contactDisplay");
//   // const foodCategoryDisplay = document.getElementById("foodCategoryDisplay");
//   // const descriptionDisplay = document.getElementById("descriptionDisplay");
//   // const locationDisplay = document.getElementById("locationDisplay");

//   // firstNameDisplay.textContent = `First Name: ${donorData.firstName}`;
//   // lastNameDisplay.textContent = `Last Name: ${donorData.lastName}`;
//   // contactDisplay.textContent = `Contact: ${donorData.contact}`;
//   // foodCategoryDisplay.textContent = `Food Category: ${donorData.foodCategory}`;
//   // descriptionDisplay.textContent = `Description: ${donorData.description}`;
//   // locationDisplay.textContent = `Location: ${donorData.location}`;

//   const firstNameDisplay = document.getElementById("firstNameDisplay");

//   thankYouHeader.textContent = `Thank You ${donorData.firstName}! We thank you for your kind donation and we appreciate your spirited fight against hunger`;

//   // Sending the data to the JSON server
//   fetch("http://localhost:3000/donors", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(donorData),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Success:", data);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       alert("An error occurred while submitting the form.");
//     });
// });

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

  // Update the thank you card with the submitted data
  const thankYouHeader = document.getElementById("thankYouHeader");
  const firstNameDisplay = document.getElementById("firstNameDisplay");
  const lastNameDisplay = document.getElementById("lastNameDisplay");
  const contactDisplay = document.getElementById("contactDisplay");
  const foodCategoryDisplay = document.getElementById("foodCategoryDisplay");
  const descriptionDisplay = document.getElementById("descriptionDisplay");
  const locationDisplay = document.getElementById("locationDisplay");

  thankYouHeader.textContent = `Thank You ${donorData.firstName}! We thank you for your kind donation and we appreciate your spirited fight against hunger`;
  firstNameDisplay.textContent = `First Name: ${donorData.firstName}`;
  lastNameDisplay.textContent = `Last Name: ${donorData.lastName}`;
  contactDisplay.textContent = `Contact: ${donorData.contact}`;
  foodCategoryDisplay.textContent = `Food Category: ${donorData.foodCategory}`;
  descriptionDisplay.textContent = `Description: ${donorData.description}`;
  locationDisplay.textContent = `Location: ${donorData.location}`;

  // Hide the form and show the thank you card
  form.style.display = "none";
  thankYouCard.style.display = "block";
  thankYouCard.appendChild(backToHomeButton);

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
  // Hide the form and show the thank you card

  thankYouCard.style.display = "block";
  donationSection.style.display = "none";
}
// Selecting the "Get Food" button element
const getFoodButton = document.querySelector(".get-food-btn");

// Click event listener for the "Get Food" button
getFoodButton.addEventListener("click", () => {
  // Showing the "food-bank" section
  showSection("food-bank");
  // Fetching and display food items
  fetchFoodItems();
});

// Function to fetch and display food items
function fetchFoodItems() {
  // Fetch food items from the json server
  fetch("http://localhost:3000/foodItems")
    .then((response) => response.json())
    .then((data) => {
      // Get the container element for food items
      const foodItemsContainer = document.getElementById(
        "food-items-container"
      );
      // Clear existing food items
      foodItemsContainer.innerHTML = "";

      // Looping through each food item and create a card for it
      data.forEach((foodItem) => {
        // Create a div element for the food card
        const foodCard = document.createElement("div");
        foodCard.classList.add("food-card");

        // Creating an img element for the food image
        const foodImage = document.createElement("img");
        foodImage.src = foodItem.imageUrl;
        foodImage.alt = foodItem.description;

        // Creating a div element for the food content
        const foodContent = document.createElement("div");
        foodContent.classList.add("food-card-content");

        // Creating a p element for the food description
        const foodDescription = document.createElement("p");
        foodDescription.textContent = foodItem.description;

        // Creating a button element for adding to cart
        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener("click", () => addToCart(foodItem));

        // Appending the description and "Add to Cart" button to the food content div
        foodContent.appendChild(foodDescription);
        foodContent.appendChild(addToCartButton);

        // Appending the image and content to the food card div
        foodCard.appendChild(foodImage);
        foodCard.appendChild(foodContent);

        // Appending the food card to the container
        foodItemsContainer.appendChild(foodCard);
      });
    })
    .catch((error) => console.error("Error:", error));
}

// Array to store the cart items
const cart = [];

// Function to add a food item to the cart
function addToCart(foodItem) {
  // Adding the food item to the cart array
  cart.push(foodItem);
  // Log the updated cart
  console.log("Cart:", cart);
}

//  Proceed to Checkout button element selection
const proceedToCheckoutButton = document.getElementById("proceed-to-checkout");

// Click event listener to the "Proceed to Checkout" button
proceedToCheckoutButton.addEventListener("click", () => {
  // Show the checkout form section
  showSection("checkout-form");
});

// Selecting the recipient form element
const recipientForm = document.querySelector("#checkout-form form");

// Event listener to the form's submit event
recipientForm.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // FormData object from the form
  const formData = new FormData(event.target);

  // Extracting form data and create a recipient object
  const recipient = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    contact: formData.get("contact"),
    location: formData.get("location"),
  };

  // Sending a POST request to the server with the recipient information
  fetch("http://localhost:3000/recipients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipient),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);

      // Getting the IDs of the food items in the cart
      const foodItemIds = cart.map((item) => item.id);

      // Loop through each food item ID and delete it from the server
      foodItemIds.forEach((id) => {
        fetch(`http://localhost:3000/foodItems/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => console.log(`Deleted food item with ID: ${id}`))
          .catch((error) => console.error("Error:", error));
      });
    })
    .catch((error) => console.error("Error:", error));
});


