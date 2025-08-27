const playground = document.querySelector("#playground");

const secretScroll = document.createElement("div");

secretScroll.id = "secretScroll";
secretScroll.dataset.spell = "invisibility";
secretScroll.dataset.components = "moonlight, shadow essence";
secretScroll.textContent = "Ancient Spell Scroll";

playground.append(secretScroll);
