let optionsMix = [];///////////////////
let taskRowsOptions = [];////////////////////////
let compWordsTheme = [];//////////////////////
let compOptionsMix = [];//////////////////

//Classes for Prim words for modes: Plain, Choice and Mix

class ItemHeadingPrim {
    constructor (
        id,
        idTheme,
        idWord,
        idLang,
        langName,
        wordName,
        spellBase,
        spellEng,
    ) {
        this.id = id;
        this.idTheme = idTheme;
        this.idWord = idWord;
        this.idLang = idLang;
        this.langName = langName;
        this.wordName = wordName;
        this.spellBase = spellBase;
        this.spellEng = spellEng;
    }
    render() {
        return `<div class="item-heading">
                    <p class="heading-text" id="item${this.idWord}HeadingBase" style="font-size: 1.39vw;">${this.langName}</p>
                </div>`;
    }
}

class ItemOptionPrim {
    constructor (
        id,
        idTheme,
        idWord,
        idLang,
        langName,
        wordName,
        spellBase,
        spellEng,
    ) {
        this.id = id;
        this.idTheme = idTheme;
        this.idWord = idWord;
        this.idLang = idLang;
        this.langName = langName;
        this.wordName = wordName;
        this.spellBase = spellBase;
        this.spellEng = spellEng;
    }
    render() {
        return `<div class="item-option base">
                    <p class="item-word base" id="item${this.idWord}WordBase" style="font-size: 1.25vw;">${this.wordName}</p>
                </div>`;
    }
}

class CardPrim {
    constructor() {
        this.ctaskRows = {};
        this.itemHeadingPrim = new ItemHeadingPrim();
        this.itemOptionPrim = new ItemOptionPrim();
    }
    fetchCardPrim(i, j) {
        // if (taskRows[i][j].idLang == selectedPrimLang[0].id) {
        //    this.ctaskRows = taskRows[i][j]; 
        // }
        this.ctaskRows = taskRows[i][j];
        
    }
    render(i) {
        let itemHeadingPrimHtml = '';
        let itemOptionPrimHtml = '';

        let itemHeadingPrim = new ItemHeadingPrim(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        );
        
        let itemOptionPrim = new ItemOptionPrim(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        ); 

        //console.log(itemHeadingPrim.langName);
        //console.log(itemOptionPrim.wordName);

        this.ctaskRows = itemHeadingPrim;
        this.ctaskRows = itemOptionPrim;
        
        itemHeadingPrimHtml = itemHeadingPrim.render();
        itemOptionPrimHtml = itemOptionPrim.render();
        let itemPrimHtml = itemHeadingPrimHtml + itemOptionPrimHtml;
        //document.querySelector('[name="itemCardBase"]').innerHTML = itemPrimHtml;
        document.querySelector("#item"+`${i}`+"Base").innerHTML = itemPrimHtml;
    }
}

// //Classes for Comp words for mode Plain, Choice and Mix

class ItemHeadingComp {
    constructor (
        id,
        idTheme,
        idWord,
        idLang,
        langName,
        wordName,
        spellBase,
        spellEng,
    ) {
        this.id = id;
        this.idTheme = idTheme;
        this.idWord = idWord;
        this.idLang = idLang;
        this.langName = langName;
        this.wordName = wordName;
        this.spellBase = spellBase;
        this.spellEng = spellEng;
    }
    render() {
        return `<div class="item-heading">
                    <p class="heading-text" id="item${this.idWord}Comp${this.idLang}Heading" style="font-size: 1.39vw;">${this.langName}</p>
                </div>`;
    }
}

class ItemOptionCompMix {
    constructor (
        id,
        idTheme,
        idWord,
        idLang,
        langName,
        wordName,
        spellBase,
        spellEng,
    ) {
        this.id = id;
        this.idTheme = idTheme;
        this.idWord = idWord;
        this.idLang = idLang;
        this.langName = langName;
        this.wordName = wordName;
        this.spellBase = spellBase;
        this.spellEng = spellEng;
    }
    render() {
        return `<div class="item-option" id="item${this.idWord}Comp${this.idLang}Option">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}OptionWord" style="display: none;">${this.wordName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}OptionSpell" style="font-size: 1.25vw;">${this.spellEng}</p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}OptionRadio" checked data-isright="true">
                    </div>                                    
                </div>`;
    }
}

class ItemOption1CompMix {
    constructor (
        id,
        idTheme,
        idWord,
        idLang,
        langName,
        wordName,
        spellBase,
        spellEng,
    ) {
        this.id = id;
        this.idTheme = idTheme;
        this.idWord = idWord;
        this.idLang = idLang;
        this.langName = langName;
        this.wordName = wordName;
        this.spellBase = spellBase;
        this.spellEng = spellEng;
    }
    render() {
        return `<div class="item-option" id="item${this.idWord}Comp${this.idLang}Option1">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option1Word" style="display: none;">${this.wordName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option1Spell" style="font-size: 1.25vw;">${this.spellEng}</p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option1Radio" data-isright="false">
                    </div>                                    
                </div>`;
    }
}

class ItemOption2CompMix {
    constructor (
        id,
        idTheme,
        idWord,
        idLang,
        langName,
        wordName,
        spellBase,
        spellEng,
    ) {
        this.id = id;
        this.idTheme = idTheme;
        this.idWord = idWord;
        this.idLang = idLang;
        this.langName = langName;
        this.wordName = wordName;
        this.spellBase = spellBase;
        this.spellEng = spellEng;
    }
    render() {
        return `<div class="item-option" id="item${this.idWord}Comp${this.idLang}Option2">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option2Word" style="display: none;">${this.wordName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option2Spell" style="font-size: 1.25vw;">${this.spellEng}</p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option2Radio" data-isright="false">
                    </div>                                    
                </div>`;
    }
}

class ItemOption3CompMix {
    constructor (
        id,
        idTheme,
        idWord,
        idLang,
        langName,
        wordName,
        spellBase,
        spellEng,
    ) {
        this.id = id;
        this.idTheme = idTheme;
        this.idWord = idWord;
        this.idLang = idLang;
        this.langName = langName;
        this.wordName = wordName;
        this.spellBase = spellBase;
        this.spellEng = spellEng;
    }
    render() {
        return `<div class="item-option" id="item${this.idWord}Comp${this.idLang}Option3">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option3Word" style="display: none;">${this.wordName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option3Spell" style="font-size: 1.25vw;">${this.spellEng}</p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option3Radio" data-isright="false">
                    </div>                                    
                </div>`;
    }
}


class CardCompMix {
    constructor() {
        this.ctaskRows = {};
        this.ccompOptionsMix = [];//
        this.itemHeadingComp = new ItemHeadingComp();
        this.itemOptionCompMix = new ItemOptionCompMix();
        this.itemOption1CompMix = new ItemOption1CompMix();//
        this.itemOption2CompMix = new ItemOption2CompMix();//
        this.itemOption3CompMix = new ItemOption3CompMix();//
    }
    fetchCardCompMix(i, j) {
        this.ctaskRows = taskRows[i][j];
    }
    fetchCompOptionsMix(i, j) {
        //this.ctaskRows = taskRows[i][j];
        //console.log(taskRows[i][j].idTheme);
        this.cTheme = taskRows[i][j].idTheme;
        this.cLang = taskRows[i][j].idLang;
        this.cWord = taskRows[i][j].idWord;
        getOptionsMix(this.cTheme, this.cLang, this.cWord);
        this.ccompOptionsMix = compOptionsMix;
    }    
    render(i, j) {
        let itemHeadingCompHtml = '';
        let itemOptionCompMixHtml = '';
        let itemOptionCompMixV1Html = '';
        let itemOptionCompMixV2Html = '';
        let itemOptionCompMixV3Html = '';

        let itemHeadingComp = new ItemHeadingComp(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        );
        
        let itemOptionCompMix = new ItemOptionCompMix(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        ); 

        // + two versions

        let itemOptionCompMixV1 = new ItemOption1CompMix(
            this.ccompOptionsMix[0].id,
            this.ccompOptionsMix[0].idTheme,
            this.ccompOptionsMix[0].idWord,
            this.ccompOptionsMix[0].idLang,
            this.ccompOptionsMix[0].langName,
            this.ccompOptionsMix[0].wordName,
            this.ccompOptionsMix[0].spellBase,
            this.ccompOptionsMix[0].spellEng,
        );

        let itemOptionCompMixV2 = new ItemOption2CompMix(
            this.ccompOptionsMix[1].id,
            this.ccompOptionsMix[1].idTheme,
            this.ccompOptionsMix[1].idWord,
            this.ccompOptionsMix[1].idLang,
            this.ccompOptionsMix[1].langName,
            this.ccompOptionsMix[1].wordName,
            this.ccompOptionsMix[1].spellBase,
            this.ccompOptionsMix[1].spellEng,
        );

        let itemOptionCompMixV3 = new ItemOption3CompMix(
            this.ccompOptionsMix[2].id,
            this.ccompOptionsMix[2].idTheme,
            this.ccompOptionsMix[2].idWord,
            this.ccompOptionsMix[2].idLang,
            this.ccompOptionsMix[2].langName,
            this.ccompOptionsMix[2].wordName,
            this.ccompOptionsMix[2].spellBase,
            this.ccompOptionsMix[2].spellEng,
        );

        //console.log(itemHeadingComp.langName);
        //console.log(itemOptionCompMix.wordName);

        this.ctaskRows = itemHeadingComp;
        this.ctaskRows = itemOptionCompMix;
        this.ctaskRows = itemOptionCompMixV1;
        this.ctaskRows = itemOptionCompMixV2;
        this.ctaskRows = itemOptionCompMixV3;
        
        itemHeadingCompHtml = itemHeadingComp.render();
        itemOptionCompMixHtml = itemOptionCompMix.render();
        itemOptionCompMixV1Html = itemOptionCompMixV1.render();
        itemOptionCompMixV2Html = itemOptionCompMixV2.render();
        itemOptionCompMixV3Html = itemOptionCompMixV3.render();

        let cardOptions = [];
        cardOptions[0] = itemOptionCompMixHtml;
        cardOptions[1] = itemOptionCompMixV1Html;
        cardOptions[2] = itemOptionCompMixV2Html;
        cardOptions[3] = itemOptionCompMixV3Html;
        let cardOptionsRand = randArr(cardOptions);

        //let itemCompMixHtml = itemHeadingCompHtml + itemOptionCompMixHtml + itemOptionCompMixV1Html + itemOptionCompMixV2Html;
        let itemCompMixHtml = itemHeadingCompHtml + cardOptionsRand[0] + cardOptionsRand[1] + cardOptionsRand[2] + cardOptionsRand[3];

        document.querySelector("#item"+`${i}`+"Comp"+`${j}`).innerHTML = itemCompMixHtml;
    }
}

//  elements for results:
let resultEnjoy = document.getElementById("enjoy");
let resultWorry = document.getElementById("worry");

let valueEnjoy = resultEnjoy.textContent;
let valueWorry = resultWorry.textContent;
console.log("Enjoy: " + valueEnjoy);
console.log("Worry: " + valueWorry);

let totalEnjoy = [];
let totalWorry = [];

// const cardCompMixHtml = new CardCompMix();
// cardCompMixHtml.fetchCardCompMix(0,1);
// cardCompMixHtml.render();

// test row render
//cardCompMixDom();

// Define array for "isRight == true" words in task from compWords[]

for (let i=0; i<taskRows.length; i++) {
    let optionsMixTheme = [];

    for (let j=0; j<taskRows[i].length; j++) {
        let thisTheme = taskRows[i][j].idTheme;
        let thisWord = taskRows[i][j].idWord;
        let thisLang = taskRows[i][j].idLang;
        let optionsMixThemeLang = [];    
        for (let k=0; k<compWords.length; k++) {
            if (compWords[k].idTheme == thisTheme && compWords[k].idWord !== thisWord && compWords[k].idLang == thisLang) {
                optionsMixThemeLang.push(compWords[k]);
            }
        }

        //console.log("Option Choice theme lang: " + taskRows[0][j].langName);
        //console.log(optionsChoiceThemeLang);
        optionsMixTheme.push(optionsMixThemeLang);
    }
    optionsMix.push(optionsMixTheme);
    //console.log("Option Mix theme: ");
    //console.log(optionsMixTheme);

    //console.log(randEl(optionsChoiceTheme[1]));
}

console.log("Options Mix : ");
console.log(optionsMix);

console.log("Random option Mix: ");
//console.log(randOptionsMix);

//console.log(randEl(randOptionsMix[1]));


//Function get element from array by random index
function randEl(array) {
    const randIndex = Math.floor(Math.random() * array.length);
    //const randElement = array[randIndex];
    return array[randIndex];    // randElement;
}

function randArr(array) {
    for (let i=array.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// let arr = [1,17,23,43,2,7,9];
// console.log(randArr(arr));

///////////////////////
//Define task rows with options array for mode Mix
///////let taskRowsOptions = [];////////////////////////

for (let i=0; i < taskRows.length; i++) {
    //console.log(taskRows[i].length);
    let rowTheme = taskRows[i][0].idTheme;
    let rowWord = taskRows[i][0].idWord;
    //getCompWordsTheme(rowTheme, rowWord);
    //console.log(compWordsTheme);
   
    for (let j=0; j < taskRows[i].length; j++) {
        let optionLang = taskRows[i][j].idLang;
        let optionsMix = [];

        optionsMix[j] = taskRows[i][j];
        optionsMix[j].isRight = true;
    }

    taskRowsOptions.push(taskRows[i]);
}

console.log("Task rows options :");
console.log(taskRowsOptions);

//Function get random comp options from comp words array by theme and lang

function getOptionsMix(themeId, langId, wordId) {
    compOptionsMix = [];
    compWordsTheme = [];
    // for (let k=0; k < compWords.length; k++) {
    //     if (compWords[k].idLang !== langId) {
    //         continue;
    //     } else if (compWords[k].idTheme == themeId && wordId !== compWords[k].idWord) {
    //         compWordsTheme.push(compWords[k]);//
    //     } else { continue;}         
    // }
    for (let k=0; k < compWords.length; k++) {
        if (wordId !== compWords[k].idWord) {
            continue;
        } else if (compWords[k].idTheme == themeId && compWords[k].idLang !== langId) {
            compWordsTheme.push(compWords[k]);//
        } else { continue;}         
    }

    //console.log(compWordsTheme);
    
    let option1 = randEl(compWordsTheme);
    let newCompWordsTheme = compWordsTheme.filter(item => item !== option1);
    let option2 = randEl(newCompWordsTheme);
    let otherNewCompWordsTheme = compWordsTheme.filter(item => item !== option1 && item !== option2);
    let option3 = randEl(otherNewCompWordsTheme);
    option1.isRight = false;
    option2.isRight = false;
    option3.isRight = false;
    compOptionsMix.push(option1, option2, option3);
    //console.log(compOptionsChoise);
    return compOptionsMix;
}

// //Example for get random comp options

// getOptionsMix(3,3,40);
// console.log("Example for get random comp options");
console.log(compOptionsMix);
// console.log(compOptionsMix.length);

//Function for Rows counter
let rowsList = document.getElementsByClassName("task-mode");
let rowsNum = rowsList.length;
console.log("Rows num = " + rowsNum);

////Function for  any rows render

// array - example from taskRows[]
console.log('All rows number (taskRows.length) : ' + taskRows.length);
let taskRowsTest = [];
let arrNum = (taskRows.length - 1);   // 27;    // 9;    // taskRows.length;    //16;     // numbering of rows in the render list == (arrNum+1)

for (let m=0; m <= arrNum; m++) {
    taskRowsTest[m] = taskRows[m];
    //return taskRowsTest;
}

console.log("array Task rows test for render: ");
console.log(taskRowsTest);
console.log("taskRowsTest length : " + taskRowsTest.length);

//console.log(selectedPrimLang);

//rowsCompChoiceDom();

function createRow(index) {
    let rowsBlock = document.getElementById("taskModeMix");
    let rowItem = document.createElement("div");    // create row i
    rowItem.classList.add("task-mode");//
    rowItem.setAttribute('name', 'row'+`${index}`);
    rowItem.setAttribute('id', 'item'+`${index}`);
    rowsBlock.appendChild(rowItem);
}


function pageRowsCompMixDom(firstIndex, lastIndex) {
    for (let i=firstIndex; i < (lastIndex); i++) {
        for (let j=0; j<taskRowsTest[i].length; j++) {
            let wordNum = taskRowsTest[i][j].idWord;
            compOptionsMix = [];
        if (taskRowsTest[i][j].idLang == selectedPrimLang[0].id) {
            createRow(i);
            let parentItem = document.getElementById("item"+`${i}`);
            let itemPrim = document.createElement("div");   // create row's Prim card
            itemPrim.classList.add("item-card-base");
            itemPrim.setAttribute('name', 'item' + `${i}` + 'CardBase');
            itemPrim.setAttribute('id', 'item' + `${i}` + 'Base');
            parentItem.appendChild(itemPrim);

            const cardPrimHtml = new CardPrim();
            cardPrimHtml.fetchCardPrim(i, j);
            cardPrimHtml.render(i);
            } else {

                let parentItem = document.getElementById("item"+`${i}`);
                let item = document.createElement("div");   // create lang's card i,j
                item.classList.add("item-card");

                item.setAttribute('name', 'item'+`${i}`+'CardComp'+`${j}`+'Mix');
                item.setAttribute('id', 'item'+`${i}`+'Comp'+`${j}`);
                parentItem.appendChild(item);

                const cardCompMixHtml = new CardCompMix();    // render lang's card i,j
                item = cardCompMixHtml;
                item.fetchCardCompMix(i,j);
                item.fetchCompOptionsMix(i,j);//
                item.render(i,j);
                
                let cardLang = document.getElementsByName("item"+`${i}`+"CardComp"+`${j}`+"Mix");

                let cardItemOptions = cardLang[0].getElementsByClassName("item-option");
                let cardLangRadios = cardLang[0].getElementsByClassName("option-radio");

                for (let m=0; m < cardLangRadios.length; m++) {
                    cardLangRadios[m].name = 'item' + `${i}` + wordNum + 'Comp' + `${j}`;//
                }
           
                let radioChecked = randEl(cardLangRadios);
                radioChecked.checked = true;

                for (let n=0; n < cardLangRadios.length; n++) {
                    cardLangRadios[n].addEventListener('click', function() {

                        if (cardLangRadios[n].getAttribute('data-isright') == "false") {
                            cardItemOptions[n].style.backgroundColor = "#fccfe0";
                            valueWorry++;
                            resultWorry.textContent = valueWorry;

                        } else {
                            cardItemOptions[n].style.backgroundColor = "#c2fceb";
                            valueEnjoy++;
                            resultEnjoy.textContent = valueEnjoy;
                        }
                    });
                }

            }
        }
    }
}

// console.log("Total enjoy:");
// console.log(totalEnjoy);

// console.log("Total worry:");
// console.log(totalWorry);

//pageRowsCompChoiceDom(3, 6);

