import { selectionPlan, currentPlan, subtotal } from "./step-2-plan.js";
let total;

// THIS FUNCITION MAKE THE PAGE INICIALIZE JUST WHEN IT APPPEAR ON THE SCREEN
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === "style") {
      let elemento = mutation.target;
      if (getComputedStyle(elemento).display !== "none") {
        console.log("O elemento ficou visível!");

        inicializeStep3();
      }
    }
  });
});

const elementoObservado = document.getElementById("step-add");
observer.observe(elementoObservado, { attributes: true });

// FUNCTION TO INICIALIZE THE STEP 3 - PICK ADD-ONS
function inicializeStep3() {
  const step2Section = document.getElementById("step-plan");
  const step3Section = document.getElementById("step-add");
  const step4Section = document.getElementById("step-summary");

  const radio2 = document.getElementById("radio2");
  const radio3 = document.getElementById("radio3");
  const radio4 = document.getElementById("radio4");

  const btnNextPlan = document.getElementById("btn-next-add");
  const btnBackPlan = document.getElementById("btn-back-add");

  const checkboxs = document.getElementsByClassName("checkboxs");

  const divService = document.getElementById("divService");
  const divStorage = document.getElementById("divStorage");
  const divProfile = document.getElementById("divProfile");

  total = subtotal;

  // TO ADVANCED TO NEXT PAGE
  btnNextPlan.onclick = () => {
    step3Section.style.display = "none";
    radio3.classList.remove("active");

    step4Section.style.display = "flex";
    radio4.classList.add("active");
  };

  // TO RETURN TO PREVIOUS PAGE
  btnBackPlan.onclick = () => {
    step3Section.style.display = "none";
    radio3.classList.remove("active");

    step2Section.style.display = "flex";
    radio2.classList.add("active");
  };

  // WHEN CHECK OR UNCHECK EACH CHECKBOX
  Array.from(checkboxs).forEach((checkbox) => {
    checkbox.onchange = () => {
      onchangeCheck(checkbox);

      console.log(total);
    };
  });

  // FUNCTION THAT IS TRIGGERED WHEN CHANGE THE STATUS OF THE EACH CHECKBOX
  function onchangeCheck(checkbox) {
    if (checkbox.getAttribute("id") == "add-service") {
      // IF IT'S ADDING THE ADD-ONS SERVICE
      console.log("add-service");
      checkService(checkbox);
    } else if (checkbox.getAttribute("id") == "add-storage") {
      // IF IT'S ADDING THE ADD-ONS STORAGE
      console.log("add-storage");
      checkStorage(checkbox);
    } else {
      // IF IT'S ADDING THE ADD-ONS CUSTOMIZING PROFILE
      console.log("add-profile");
      checkProfile(checkbox);
    }
  }

  // BEHAVIOR WHEN THE ACTIVATED CHECKBOX IS SERVICE
  function checkService(checkbox) {
    if (checkbox.checked == true) {
      // IF IS CHECKED
      if (selectionPlan.value == "month") {
        // IF THE TYPE PLAN IS MONTHLY
        total += 1;

        divService.style.display = "flex";
        divService.children[1].textContent = "+$1/mo" 
      } else {
        // IF THE TYPE PLAN IS YEARLY
        total += 10;
        divService.style.display = "flex";
        divService.children[1].textContent = "+$10/yr" 
      }
    } else {
      // IF IS UNCHECKED
      if (selectionPlan.value == "month") {
        // IF THE TYPE PLAN IS MONTHLY
        total -= 1;
        divService.style.display = "none";
      } else {
        // IF THE TYPE PLAN IS YEARLY
        total -= 10;
        divService.style.display = "none";
      }
    }
  }

  // BEHAVIOR WHEN THE ACTIVATED CHECKBOX IS STORAGE
  function checkStorage(checkbox) {
    if (checkbox.checked == true) {
      // IF IS CHECKED
      if (selectionPlan.value == "month") {
        // IF THE TYPE PLAN IS MONTHLY
        total += 2;

        divStorage.style.display = "flex"
        divStorage.children[1].textContent = "+$2/mo"
      } else {
        // IF THE TYPE PLAN IS YEARLY
        total += 20;

        divStorage.style.display = "flex"
        divStorage.children[1].textContent = "+$20/yr"
      }
    } else {
      // IF IS UNCHECKED
      if (selectionPlan.value == "month") {
        // IF THE TYPE PLAN IS MONTHLY
        total -= 2;
        divStorage.style.display = "none"
      } else {
        // IF THE TYPE PLAN IS YEARLY
        total -= 20;
        divStorage.style.display = "none"
      }
    }
  }

  // BEHAVIOR WHEN THE ACTIVATED CHECKBOX IS PROFILE
  function checkProfile(checkbox) {
    if (checkbox.checked == true) {
      // IF IS CHECKED
      if (selectionPlan.value == "month") {
        // IF THE TYPE PLAN IS MONTHLY
        total += 2;
        divProfile.style.display = "flex"
        divProfile.children[1].textContent = "+$2/mo"
      } else {
        // IF THE TYPE PLAN IS YEARLY
        total += 20;
        divProfile.style.display = "flex"
        divProfile.children[1].textContent = "+$20/yr"
      }
    } else {
      // IF IS UNCHECKED
      if (selectionPlan.value == "month") {
        // IF THE TYPE PLAN IS MONTHLY
        total -= 2;
        divProfile.style.display = "none"
      } else {
        // IF THE TYPE PLAN IS YEARLY
        total -= 20;
        divProfile.style.display = "none"
      }
    }
  }
}

export { total };
