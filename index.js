/*
 * Interactive Pricing component:
 * Simple, traffic-based pricing
 * 
 * Robin Littlefield
 * 
 * v1.0 2/25/21
 * notes: *bootcamp - thur- Lem- simple - traffic based pricing
 * class: thursday, 2/25/21 .. REVIEWED
 * 
 *   index.js:
 *   Displays $price/month for ranges of pageviews using a slider.
 *   Options for Monthly Billing / Yearly Billing.
 *   Interactive slider & button to select Monthly/Yearly billing cycle.
 *   
 * - 10K pageviews / $8 per month
 * - 50K pageviews / $12 per month
 * - 100K pageviews / $16 per month
 * - 500k pageviews / $24 per month
 * - 1M pageviews / $36 per month
 * 
 *  frontendmentorio link:
 *  https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8
 * 
 */

const myCheckbox = document.querySelector(".switch input");

duration = document.querySelector(".month"),
price = document.querySelector(".prices .pricefix"),
switcher = document.querySelector(".switch"),
rang = document.querySelector(".myrange");

switcher.inclick = function () {
    if(myCheckbox.checked == true) {
         let priceInt = parseInt(price.textContent);
         price.textContent = `$[(priceInt - (priceInt * .25)) * 12]`;
         duration.textContent = `/year`;
    } else {
        updatePrice();
        duration.textContent = `/month`;
    }
}

let pageViews = document.querySelector(".page-views span");
range.addEventListener("input", updatePrice);

// ANHs version:
function updatePrice() {
    console.log("updatePrice(): ");
    if(range.value == 1) {
        if(myCheckbox.checked == true) {
            price.textContent = `${(8 - (8 * .25)) * 12}`;
        } else {
            price.textContent = 0;
        }
        pageViews.textContent = "10k";
    }
    if(range.value == 2) {
        if(myCheckbox.checked == true) {
            price.textContent = 108;
        } else {
            price.textContent = 12;
        }
        pageViews.textContent = "50k";
    }
    if(range.value == 3) {
        if(myCheckbox.checked == true) {
            price.textContent = 144;
        } else {
            price.textContent = 16;
        }
        pageViews.textContent = "100k";
    }
    if(range.value == 4) {
        if(myCheckbox.checked == true) {
            price.textContent = 216;
        } else {
            price.textContent = 24;
        }
        pageViews.textContent = "500k";
    }
    if(range.value == 5) {
        if(myCheckbox.checked == true) {
            price.textContent = 324;
        } else {
            price.textContent = 36;
        }
        pageViews.textContent = "1M";
    }
}