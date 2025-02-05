import { subtotal } from "./step-2-plan.js";
import { selectionPlan, currentPlan } from "./step-2-plan.js";
import { total } from "./step-3-add.js";

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) =>{
        if(mutation.attributeName === "style"){
            let elemento = mutation.target
            if(getComputedStyle(elemento).display !== "none"){
                console.log("Step 4 initialized")

                inicializeStep4()
            }else{
                console.log("Step 4 closed")
            }
        }
    })
})

const elementWatched = document.getElementById("step-summary")
observer.observe(elementWatched, {attributes: true})

function inicializeStep4(){

    const step3Section = document.getElementById("step-add");
    const step4Section = document.getElementById("step-summary");
    const step5Section = document.getElementById("step-confirmed")

    const radio3 = document.getElementById("radio3");
    const radio4 = document.getElementById("radio4");    
    
    const btnBackSummary = document.getElementById("btn-back-summary")
    const btnNextSummary = document.getElementById("btn-next-summary");

    const typePlanSpan = document.getElementById("typePlan")
    // UPDATE SPAN OF PLAN CURRENT TYPE
    typePlanSpan.textContent = currentPlan
    console.log(typePlan)

    const typePeriodSpans = document.getElementsByClassName("typePeriod")
    // UPDATE SPANS OF PERIOD PLAN
    Array.from(typePeriodSpans).forEach(span => {
        span.textContent = selectionPlan.value
    })

    // UDPATE SPAN SUBTOTAL CART
    const subtotalSpan = document.getElementById("subtotalCart")
    subtotalSpan.textContent = `$${subtotal}`

    // UPDATE SPAN TOTAL CART
    const totalCartSpan = document.getElementById("totalCart")
    totalCartSpan.textContent = `$${total}`
    console.log(totalCart)
    
    // EVENT NEXT PAGE
    btnNextSummary.onclick = () => {
        step4Section.style.display = "none"
        radio4.classList.remove("active");
    
        step5Section.style.display = "flex";
      };
    
    // EVENT PREVIOUS PAGE
    btnBackSummary.onclick = () => {
        step4Section.style.display = "none"
        radio4.classList.remove("active");

        step3Section.style.display = "flex"
        radio3.classList.add("active")
    }
}
