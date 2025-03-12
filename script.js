// get hero section from DOM
let heroSection = document.querySelector(".hero");

// function to change background color of hero section and color of text in hero section
// the changeBackgroundColor function takes color as an argument

changeBackgroundColor = (coffeeType) => {
  // if coffee is espresso, background color is #6D4C41 and text color is #FFFFFF
  if (coffeeType == "espresso") {
    heroSection.style.background = "#6D4C41";
    heroSection.style.color = "#FFFFFF";
  }
  if (coffeeType == "latte") {
    // if coffee is latte, background color is #FFF8E7 and text color is #000000
    heroSection.style.background = "#FFF8E7";
    heroSection.style.color = "#000000";
  }
  // if coffee is cappuccino, background color is #B3A393 and text color is #FFFFFF
  if (coffeeType == "cappuccino") {
    heroSection.style.background = "#B3A393";
    heroSection.style.color = "#FFFFFF";
  }
  // if coffee is americano, background color is #6D4C41 and text color is #FFFFFF
  if (coffeeType == "americano") {
    heroSection.style.background = "#6D4C41";
    heroSection.style.color = "#FFFFFF";
  }
  // if coffee is mocha, background color is #3C2218 and text color is #FFFFFF
  if (coffeeType == "mocha") {
    heroSection.style.background = "#3C2218";
    heroSection.style.color = "#FFFFFF";
  }
  // if coffee is macchiato, background color is #FFF8E7 and text color is #000000
  if (coffeeType == "macchiato") {
    heroSection.style.background = "#FFF8E7";
    heroSection.style.color = "#000000";
  }
  // if coffee is ristretto, background color is #B3A393 and text color is #FFFFFF
  if (coffeeType == "ristretto") {
    heroSection.style.background = "#B3A393";
    heroSection.style.color = "#FFFFFF";
  } else return;
};
