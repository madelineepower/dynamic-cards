console.log("hi");
var createButton = document.getElementById("btn-create");
var inputArea = document.getElementById("input");
var cardDiv = document.getElementById("cards");

function createNewCard() {
    var newCardContent = `<div class="new-card"><p>${inputArea.value}</p><button class="btn-delete">Delete</button></div>`;
    var newCardSection = document.createElement("section");
    newCardSection.innerHTML = newCardContent;
    cardDiv.appendChild(newCardSection)
  }


  createButton.addEventListener("click", function(event) {
    createNewCard();
    var deleteButton = document.getElementsByClassName("btn-delete");
           for (card = 0; card < deleteButton.length; card++) {
                deleteButton.item(card).addEventListener("click", function(event) {
                console.log("you clicked delete");
                var cardToDelete = event.target.parentNode.parentNode;
                console.log(cardToDelete);
                cardDiv.removeChild(cardToDelete);
    })
  }
});
