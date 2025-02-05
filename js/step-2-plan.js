const step2Section = document.getElementById("step-plan");
const selectionPlan = document.getElementById("selectPlanType");
let currentPlan = "";
let subtotal;

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === "style") {
      let element = mutation.target
      if (getComputedStyle(element).display !== "none") {
        console.log("STEP 2 INICIALIZED");
        inicializeStep2();
      } else {
        console.log("STEP 2 CLOSED");
      }
    }
  });
});

observer.observe(step2Section, { attributes: true });

function inicializeStep2() {
  const step1Section = document.getElementById("step-info");
  const step3Section = document.getElementById("step-add");

  const radio1 = document.getElementById("radio1");
  const radio2 = document.getElementById("radio2");
  const radio3 = document.getElementById("radio3");

  const plan = document.getElementsByClassName("plan");
  const selectClass = document.getElementsByClassName("select");

  const priceArcade = document.getElementById("price-plan-arcade");
  const priceAdvanced = document.getElementById("price-plan-advanced");
  const pricePro = document.getElementById("price-plan-pro");
  const priceAdd = document.getElementsByClassName("price-add");

  const monthsFreeSpan = document.querySelectorAll(".months-free");

  const btnNextPlan = document.getElementById("btn-next-plan");
  const btnBackPlan = document.getElementById("btn-back-plan");

  // EVENT TO NEXT PAGE (STEP3 - ADD-ONS SERVICES)
  btnNextPlan.addEventListener("click", () => {
    if (currentPlan) {
      step2Section.style.display = "none"; //make the plan screen disappear
      radio2.classList.remove("active"); // remove radio styling from current page (step2- Choose Plan)

      step3Section.style.display = "flex"; // make the add-ons services screen appear
      radio3.classList.add("active"); // add radio styling to add-ons page
    } else {
      alert("Choose a plan to advance to the next page");
    }
  });

  // EVENT TO BACK PAGE (STEP1 - INFO)
  btnBackPlan.onclick = () => {
    step2Section.style.display = "none"; //make the plan screen disappear
    radio2.classList.remove("active"); // remove radio styling from current page (step2- Choose Plan)

    step1Section.style.display = "flex"; // make the info screen appear
    radio1.classList.add("active"); // add radio styling to info page
  };

  // EVENT WHEN THE TYPE PLAN CHANGE
  selectionPlan.onchange = () => {
    if (selectionPlan.value == "year") {
      // when the type plan is year

      // update the content of the span price by each plan
      priceArcade.innerText = "$90/yr";
      priceArcade.setAttribute("name", "90");

      priceAdvanced.innerText = "$120/yr";
      priceAdvanced.setAttribute("name", "120");

      pricePro.innerText = "$150/yr";
      pricePro.setAttribute("name", "150");

      Array.from(priceAdd).forEach((price) => {
        price.children[1].style.display = "block";
        price.children[0].style.display = "none";
      });

      monthsFreeSpan.forEach((span) => {
        span.style.display = "block"; // make the span months free appear
      });
    } else {
      // when the type plan is month

      // update the content of the span price by each plan
      priceArcade.innerText = "$9/mo";
      priceArcade.setAttribute("name", "9");

      priceAdvanced.innerText = "$12/mo";
      priceAdvanced.setAttribute("name", "12");

      pricePro.innerText = "$15/mo";
      pricePro.setAttribute("name", "15");

      Array.from(priceAdd).forEach((price) => {
        price.children[0].style.display = "block";
        price.children[1].style.display = "none";
      });

      monthsFreeSpan.forEach((span) => {
        span.style.display = "none"; // make the span months free disappear
      });
    }
  };

  Array.from(plan).forEach((div) => {
    div.addEventListener("click", () => {
      if (selectClass[0]) {
        selectClass[0].classList.remove("select");
      }
      div.classList.add("select");

      currentPlan = div.getAttribute("name");
      subtotal = parseInt(div.children[1].children[1].getAttribute("name"));

      console.log(currentPlan);
      console.log(subtotal);
    });
  });
}

// EXPORTING VARIABLES
export { selectionPlan, currentPlan, subtotal };
