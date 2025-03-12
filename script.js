let heroSection = document.querySelector(".hero");

// changeBackgroundImage = () => {
//   heroSection.style.backgroundImage =
//     "url('https://images.unsplash.com/photo-1596952954288-16862d37405b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
// };

changeBackgroundColor = (color) => {
  if (color == "espresso") heroSection.style.background = "#3C2218";
  if (color == "latte") heroSection.style.background = "#FFF8E7";
  if (color == "cappuccino") heroSection.style.background = "#B3A393";
  // if ((color = americano)) heroSection.style.background = "#6D4C41";
  // if ((color = mocha)) heroSection.style.background = "#3C2218";
  // if ((color = macchiato)) heroSection.style.background = "#FFF8E7";
  // if ((color = ristretto)) heroSection.style.background = "#B3A393";
  // if ((color = espresso)) heroSection.style.background = "#6D4C41";
  else return;
};
