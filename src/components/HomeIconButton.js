import { navigateTo } from "../router.js";

export const HomeIconButton = () => {
  const buttonContainer =document.createElement("div");
  
  buttonContainer.innerHTML = `<button class="homeButton" id="homeButton"><img src="../Resources/DV Chat/homeIcon.png"/> </button>`;
  
  const goToHomeButton = buttonContainer.querySelector("#homeButton");
  console.log(goToHomeButton);
  
  goToHomeButton.addEventListener("click", () =>
    navigateTo("/Home", { name: "group" })
  );
  return buttonContainer;
};
