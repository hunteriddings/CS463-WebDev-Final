import "../scss/main.scss";

// Get all the list items in the mobile navigation
const navItems = document.querySelectorAll(".mobilenav__item");

// Function to set the current classes
function setActiveItem(event) {
  // Remove current classes from all items
  navItems.forEach((item) => {
    item.classList.remove("mobilenav__item-current");
    item
      .querySelector(".mobilenav__icon")
      .classList.remove("mobilenav__icon-current");
    item
      .querySelector(".mobilenav__icon-text")
      .classList.remove("mobilenav__icon-text-current");
  });

  // Add current classes to the clicked item
  const clickedItem = event.currentTarget;
  clickedItem.classList.add("mobilenav__item-current");
  clickedItem
    .querySelector(".mobilenav__icon")
    .classList.add("mobilenav__icon-current");
  clickedItem
    .querySelector(".mobilenav__icon-text")
    .classList.add("mobilenav__icon-text-current");
}

// Add event listeners to all list items
navItems.forEach((item) => {
  item.addEventListener("click", setActiveItem);
});
