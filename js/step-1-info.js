const step1Section = document.getElementById("step-info");
const step2Section = document.getElementById("step-plan");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const btnNextInfo = document.getElementById("btn-next-info");
const inputs = step1Section.querySelectorAll("input");
const labels = step1Section.getElementsByClassName("labels");


btnNextInfo.addEventListener("click", () => {
  let index = 0;

  inputs.forEach((input) => {
    
    // CHECHING IF THE INPUT FIELDS ARE EMPTY
    if (input.value === "") {
      // IF THE FIELD ARE EMPTY
      input.style.borderColor = "var(--Strawberry-red)";
      labels[index].children[1].style.display = "flex";
    } else {
      // IF THE FIELD ARE NOT EMPTY
      if (index === 2) {
        step1Section.style.display = "none"; //make the info screen disappear
        radio1.classList.remove("active"); // remove radio styling to info page

        step2Section.style.display = "flex"; //make the plan screen appear
        radio2.classList.add("active"); // add radio styling to info page
      }
    }

    index += 1;
  });
});
