const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", (e) => {
  console.log("Grandparent 1"), { capture: true };
});
parent.addEventListener("click", (e) => {
  console.log("Parent 1"), { capture: true };
});
child.addEventListener("click", (e) => {
  console.log("Child 1"), { capture: true };
});

// [9:12]
