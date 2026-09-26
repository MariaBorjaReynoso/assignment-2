/*
  Name: Maria Guadalupe Reynoso
  Date: 09.26.2026
  CSC 372-01

  This script adds a save event feature to the Tabby Tech Campus
  Events home page. 
*/

let cards = document.querySelectorAll(".event-card");

// Loop through each card and add a Save Event button
for (let index = 0; index < cards.length; index++) {
  const card = cards[index];

  // Create the button
  let button = document.createElement("button");
  button.textContent = "Save Event";
  button.classList.add("save-btn");

  // When button is clicked, save or remove the event
  button.addEventListener("click", function () {
    if (card.classList.contains("saved")) {
      // Remove the event from the saved list
      card.classList.remove("saved");
      this.textContent = "Save Event";
      removeFromList(card);
    } else {
      // Save the event
      card.classList.add("saved");
      this.textContent = "Remove Event";
      addToList(card);
    }

    updateMessage();
  });

  // Add the button to the card
  card.appendChild(button);
}

/*
  Adds a list item for the given card to the saved list.
*/
function addToList(card) {
  let list = document.getElementById("saved-list");

  let name = card.querySelector("h3").textContent;
  let time = card.querySelector("time").textContent;
  let location = card.querySelectorAll(".event-info p")[1].textContent;

  let item = document.createElement("li");

  let title = document.createElement("strong");
  title.textContent = name;

  let details = document.createElement("span");
  details.textContent = " - " + time + " at " + location;

  item.appendChild(title);
  item.appendChild(details);
  list.appendChild(item);
}

/*
  Removes the matching list item from the saved list.
*/
function removeFromList(card) {
  let list = document.getElementById("saved-list");
  let name = card.querySelector("h3").textContent;
  let items = list.querySelectorAll("li");

  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemName = item.querySelector("strong").textContent;

    if (itemName === name) {
      item.remove();
      break;
    }
  }
}

/*
  Shows or hides the empty message based on whether anything
  is saved.
*/
function updateMessage() {
  let list = document.getElementById("saved-list");
  let message = document.getElementById("empty-message");

  if (list.children.length === 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
}