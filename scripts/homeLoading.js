const viewportWidth = window.innerWidth + "px";
console.log("ViewportWidth = ", viewportWidth);

const root = document.documentElement;
root.style.setProperty('--viewport-width', viewportWidth);

const pageUrl = window.location.pathname;
let pageName = pageUrl.substring(pageUrl.lastIndexOf('/')+1);
console.log(pageName);

function grandTotals() {
    let totalsChoice = localStorage.getItem('totalsChoice');
    let strTotalsChoice = totalsChoice.split(',');
    let numTotalsChoice = strTotalsChoice.map(item => {
        return parseInt(item.trim());
    });//
    console.log("Totals Choice: ");
    console.log(numTotalsChoice);

    let totalsMix = localStorage.getItem('totalsMix');
    let strTotalsMix = totalsMix.split(',');
    let numTotalsMix = strTotalsMix.map(item => {
        return parseInt(item.trim());
    });
    console.log("Totals Mix: ");
    console.log(numTotalsMix);

    let totalsLang = localStorage.getItem('totalsLang');
    let strTotalsLang = totalsLang.split(',');
    let numTotalsLang = strTotalsLang.map(item => {
        return parseInt(item.trim());
    });
    console.log("Totals Lang: ");
    console.log(numTotalsLang);

    let grandTotalEnjoy = numTotalsChoice[0] + numTotalsMix[0] + numTotalsLang[0];
    let grandTotalWorry = numTotalsChoice[1] + numTotalsMix[1] + numTotalsLang[1];
    let grandTotal = grandTotalEnjoy + grandTotalWorry;

    if (pageName = "home.html") {
        let grandEnjoy = document.getElementById("grandEnjoy");
        let grandWorry = document.getElementById("grandWorry");

        let valueGrandEnjoy = Math.round(grandTotalEnjoy * 100 / grandTotal);
        let valueGrandWorry = Math.round(grandTotalWorry * 100 / grandTotal);

        grandEnjoy.textContent = valueGrandEnjoy + "%";
        grandWorry.textContent = valueGrandWorry + "%";
    } 
}

grandTotals();