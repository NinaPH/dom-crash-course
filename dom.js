const playground = document.querySelector("#playground");

const temporaryElement = document.createElement("p");
temporaryElement.textContent = "Now you see me...";
playground.append(temporaryElement);

temporaryElement.remove();
