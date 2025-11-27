// const btnPrevNumWords = document.getElementById("btnPrevNumWords");
// const btnNextNumWords = document.getElementById("btnNextNumWords");
// const btnPrevNumOpt = document.getElementById("btnPrevNumOpt");
// const btnNextNumOpt = document.getElementById("btnNextNumOpt");
const numWordsValue = document.getElementById("numWordsValue");
const numOptionsValue = document.getElementById("numOptionsValue");

function plusFunction(countInput) {
    let count = countInput.value;
    if (count >=1) {
        count++;
        countInput.value = count;
        countInput.innerHtml;
    }
}

function minusFunction(countInput) {
    let count = countInput.value;
    if (count > 1) {
        count--;
        countInput.value = count;
        countInput.innerHtml;
    }
}
