const viewportWidth = window.innerWidth + "px";
console.log("ViewportWidth = ", viewportWidth);

const root = document.documentElement;
root.style.setProperty('--viewport-width', viewportWidth);

const pageUrl = window.location.pathname;
let pageName = pageUrl.substring(pageUrl.lastIndexOf('/')+1);
console.log(pageName);

//// Modal Results open-close

const resultsButton = document.getElementById("resultsButton");
const resultsModal = document.getElementById("resultsModal");
const redultsClose = document.getElementById("resultsClose");

const openModalResults = () => {
    resultsModal.style.display = "flex";
}

const closeModalResults = () => {
    resultsModal.style.display = "none";
}

//// Results totals

let enjoyChoice = document.getElementById("enjoyChoice");
let worryChoice = document.getElementById("worryChoice");

let enjoyMix = document.getElementById("enjoyMix");
let worryMix = document.getElementById("worryMix");

let enjoyLang = document.getElementById("enjoyLang");
let worryLang = document.getElementById("worryLang");

let enjoyGrand = document.getElementById("enjoyGrand");
let worryGrand = document.getElementById("worryGrand");

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

    //// Results modal and report

    enjoyChoice.textContent = numTotalsChoice[0];
    worryChoice.textContent = numTotalsChoice[1];

    enjoyMix.textContent = numTotalsMix[0];
    worryMix.textContent = numTotalsMix[1];

    enjoyLang.textContent = numTotalsLang[0];
    worryLang.textContent = numTotalsLang[1];

    let grandTotalEnjoy = numTotalsChoice[0] + numTotalsMix[0] + numTotalsLang[0];
    let grandTotalWorry = numTotalsChoice[1] + numTotalsMix[1] + numTotalsLang[1];
    let grandTotal = grandTotalEnjoy + grandTotalWorry;       

    if (pageName = "home.html") {
        let grandEnjoy = document.getElementById("grandEnjoy");
        let grandWorry = document.getElementById("grandWorry");

        if (grandTotal === 0 || grandTotal === null) {
            grandTotal = 1;
        }

        let valueGrandEnjoy = Math.round(grandTotalEnjoy * 100 / grandTotal);
        let valueGrandWorry = Math.round(grandTotalWorry * 100 / grandTotal);

        enjoyGrand.textContent = valueGrandEnjoy + "%";
        worryGrand.textContent = valueGrandWorry + "%"; 

        grandEnjoy.textContent = valueGrandEnjoy + "%";
        grandWorry.textContent = valueGrandWorry + "%";
    } 
}

grandTotals();

// const divElement = document.querySelector("#resultsMain");
// const contentHtml = divElement.innerHTML;
// const doc = new jsPDF();
// doc.text(contentHtml, 10, 10);
// doc.save('testcontent.pdf');

// let resultsBtn = document.querySelector("#resultsBtn");
// resultsBtn.addEventListener('click', () => {
//     const {jsPDF} = window.jspdf;
//     const doc = new jsPDF();

//     doc.text("Hello World!", 10, 10);
//     doc.text("This first row.", 10, 20);
//     doc.text("This second row.", 10, 30);

//     doc.save("test-pdf.pdf");

// })


