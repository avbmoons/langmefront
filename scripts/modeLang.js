let optionsLang = [];///////////////////
let taskRowsOptions = [];////////////////////////
let compWordsTheme = [];//////////////////////
let compOptionsLang = [];//////////////////
let totalEnjoy = [];
let totalWorry = [];

//Classes for Prim words for modes: Plain, Choice and Mix

class ItemHeadingPrimLang {
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
        return `<div class="item-heading" style="background-color: #f7d5a1;">
                    <p class="heading-text" id="item${this.idWord}HeadingBase" style="font-size: 1.39vw;">${this.wordName}</p>
                </div>`;
    }
}

class ItemOptionPrimLang {
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
        return `<div class="item-option base" style="background-color: #f2f7f7;">
                    <p class="item-word base" id="item${this.idWord}WordBase" style="font-size: 1.25vw; font-weight: 300; background-color: #f2f7f7;">${this.langName}</p>
                </div>`;
    }
}

class CardPrimLang {
    constructor() {
        this.ctaskRows = {};
        this.itemHeadingPrimLang = new ItemHeadingPrimLang();
        this.itemOptionPrimLang = new ItemOptionPrimLang();
    }
    fetchCardPrimLang(i, j) {
        // if (taskRows[i][j].idLang == selectedPrimLang[0].id) {
        //    this.ctaskRows = taskRows[i][j]; 
        // }
        this.ctaskRows = taskRows[i][j];
        
    }
    render(i) {
        let itemHeadingPrimLangHtml = '';
        let itemOptionPrimLangHtml = '';

        let itemHeadingPrimLang = new ItemHeadingPrimLang(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        );
        
        let itemOptionPrimLang = new ItemOptionPrimLang(
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

        this.ctaskRows = itemHeadingPrimLang;
        this.ctaskRows = itemOptionPrimLang;
        
        itemHeadingPrimLangHtml = itemHeadingPrimLang.render();
        itemOptionPrimLangHtml = itemOptionPrimLang.render();
        let itemPrimLangHtml = itemHeadingPrimLangHtml + itemOptionPrimLangHtml;
        //document.querySelector('[name="itemCardBase"]').innerHTML = itemPrimHtml;
        document.querySelector("#item"+`${i}`+"Base").innerHTML = itemPrimLangHtml;
    }
}

// //Classes for Comp words for mode Plain, Choice and Mix

class ItemHeadingCompLang {
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
        return `<div class="item-heading-lang">
                    <p class="heading-text" id="item${this.idWord}Comp${this.idLang}Heading" style="font-size: 1.39vw;">${this.spellEng}</p>
                </div>`;
    }
}

class ItemOptionCompLang {
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
        return `<div class="item-option-lang" id="item${this.idWord}Comp${this.idLang}Option">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}OptionWord" style="display: none;">${this.langName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}OptionSpell" style="font-size: 1.25vw;">${this.langName}</p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}OptionRadio" checked data-isright="true">
                    </div>                                    
                </div>`;
    }
}

class ItemOption1CompLang {
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
        return `<div class="item-option-lang" id="item${this.idWord}Comp${this.idLang}Option1">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option1Word" style="display: none;">${this.langName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option1Spell" style="font-size: 1.25vw;">${this.langName}</p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option1Radio" data-isright="false">
                    </div>                                    
                </div>`;
    }
}

class ItemOption2CompLang {
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
        return `<div class="item-option-lang" id="item${this.idWord}Comp${this.idLang}Option2">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option2Word" style="display: none;">${this.langName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option2Spell" style="font-size: 1.25vw;">${this.langName}</p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option2Radio" data-isright="false">
                    </div>                                    
                </div>`;
    }
}

class ItemOption3CompLang {
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
        return `<div class="item-option-lang" id="item${this.idWord}Comp${this.idLang}Option3">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option3Word" style="display: none;">${this.langName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option3Spell" style="font-size: 1.25vw;">${this.langName}</p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option3Radio" data-isright="false">
                    </div>                                    
                </div>`;
    }
}


class CardCompLang {
    constructor() {
        this.ctaskRows = {};
        this.ccompOptionsLang = [];//
        this.itemHeadingCompLang = new ItemHeadingCompLang();
        this.itemOptionCompLang = new ItemOptionCompLang();
        this.itemOption1CompLang = new ItemOption1CompLang();//
        this.itemOption2CompLang = new ItemOption2CompLang();//
        this.itemOption3CompLang = new ItemOption3CompLang();//
    }
    fetchCardCompLang(i, j) {
        this.ctaskRows = taskRows[i][j];
    }
    fetchCompOptionsLang(i, j) {
        //this.ctaskRows = taskRows[i][j];
        //console.log(taskRows[i][j].idTheme);
        this.cTheme = taskRows[i][j].idTheme;
        this.cLang = taskRows[i][j].idLang;
        this.cWord = taskRows[i][j].idWord;
        getOptionsLang(this.cTheme, this.cLang, this.cWord);
        this.ccompOptionsLang = compOptionsLang;
    }    
    render(i, j) {
        let itemHeadingCompLangHtml = '';
        let itemOptionCompLangHtml = '';
        let itemOptionCompLangV1Html = '';
        let itemOptionCompLangV2Html = '';
        let itemOptionCompLangV3Html = '';

        let itemHeadingCompLang = new ItemHeadingCompLang(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        );
        
        let itemOptionCompLang = new ItemOptionCompLang(
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

        let itemOptionCompLangV1 = new ItemOption1CompLang(
            this.ccompOptionsLang[0].id,
            this.ccompOptionsLang[0].idTheme,
            this.ccompOptionsLang[0].idWord,
            this.ccompOptionsLang[0].idLang,
            this.ccompOptionsLang[0].langName,
            this.ccompOptionsLang[0].wordName,
            this.ccompOptionsLang[0].spellBase,
            this.ccompOptionsLang[0].spellEng,
        );

        let itemOptionCompLangV2 = new ItemOption2CompLang(
            this.ccompOptionsLang[1].id,
            this.ccompOptionsLang[1].idTheme,
            this.ccompOptionsLang[1].idWord,
            this.ccompOptionsLang[1].idLang,
            this.ccompOptionsLang[1].langName,
            this.ccompOptionsLang[1].wordName,
            this.ccompOptionsLang[1].spellBase,
            this.ccompOptionsLang[1].spellEng,
        );

        let itemOptionCompLangV3 = new ItemOption3CompLang(
            this.ccompOptionsLang[2].id,
            this.ccompOptionsLang[2].idTheme,
            this.ccompOptionsLang[2].idWord,
            this.ccompOptionsLang[2].idLang,
            this.ccompOptionsLang[2].langName,
            this.ccompOptionsLang[2].wordName,
            this.ccompOptionsLang[2].spellBase,
            this.ccompOptionsLang[2].spellEng,
        );

        //console.log(itemHeadingCompLang.langName);
        //console.log(itemOptionCompLang.wordName);

        this.ctaskRows = itemHeadingCompLang;
        this.ctaskRows = itemOptionCompLang;
        this.ctaskRows = itemOptionCompLangV1;
        this.ctaskRows = itemOptionCompLangV2;
        this.ctaskRows = itemOptionCompLangV3;
        
        itemHeadingCompLangHtml = itemHeadingCompLang.render();
        itemOptionCompLangHtml = itemOptionCompLang.render();
        itemOptionCompLangV1Html = itemOptionCompLangV1.render();
        itemOptionCompLangV2Html = itemOptionCompLangV2.render();
        itemOptionCompLangV3Html = itemOptionCompLangV3.render();

        let cardOptions = [];
        cardOptions[0] = itemOptionCompLangHtml;
        cardOptions[1] = itemOptionCompLangV1Html;
        cardOptions[2] = itemOptionCompLangV2Html;
        cardOptions[3] = itemOptionCompLangV3Html;
        let cardOptionsRand = randArr(cardOptions);

        //let itemCompMixHtml = itemHeadingCompHtml + itemOptionCompMixHtml + itemOptionCompMixV1Html + itemOptionCompMixV2Html;
        let itemCompLangHtml = itemHeadingCompLangHtml + cardOptionsRand[0] + cardOptionsRand[1] + cardOptionsRand[2] + cardOptionsRand[3];

        document.querySelector("#item"+`${i}`+"Comp"+`${j}`).innerHTML = itemCompLangHtml;
    }
}

//  elements for results:
let resultEnjoy = document.getElementById("enjoy");
let resultWorry = document.getElementById("worry");

let valueEnjoy = resultEnjoy.textContent;
let valueWorry = resultWorry.textContent;
// console.log("Enjoy: " + valueEnjoy);
// console.log("Worry: " + valueWorry);

function totalsEnjoy() {
    totalEnjoy.push(valueEnjoy);
    return totalEnjoy;
}
function totalsWorry() {
    totalWorry.push(valueWorry);
    return totalWorry;
}

// const cardCompMixHtml = new CardCompLang();
// cardCompLangHtml.fetchCardCompLang(0,1);
// cardCompLangHtml.render();

// test row render
//cardCompMixDom();

for (let i=0; i<taskRows.length; i++) {
    let optionsLangTheme = [];

    for (let j=0; j<taskRows[i].length; j++) {
        let thisTheme = taskRows[i][j].idTheme;
        let thisWord = taskRows[i][j].idWord;
        let thisLang = taskRows[i][j].idLang;
        let optionsLangThemeLang = [];    
        for (let k=0; k<compWords.length; k++) {
            if (compWords[k].idTheme == thisTheme && compWords[k].idWord !== thisWord && compWords[k].idLang == thisLang) {
                optionsLangThemeLang.push(compWords[k]);
            }
        }

        //console.log("Option Choice theme lang: " + taskRows[0][j].langName);
        //console.log(optionsChoiceThemeLang);
        optionsLangTheme.push(optionsLangThemeLang);
    }
    optionsLang.push(optionsLangTheme);
    //console.log("Option Lang theme: ");
    //console.log(optionsLangTheme);

    //console.log(randEl(optionsLangTheme[1]));
}

console.log("Options Lang : ");
console.log(optionsLang);

console.log("Random option Lang: ");
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
//Define task rows with options array for mode Lang
///////let taskRowsOptions = [];////////////////////////

for (let i=0; i < taskRows.length; i++) {
    //console.log(taskRows[i].length);
    let rowTheme = taskRows[i][0].idTheme;
    let rowWord = taskRows[i][0].idWord;
    //getCompWordsTheme(rowTheme, rowWord);
    //console.log(compWordsTheme);
   
    for (let j=0; j < taskRows[i].length; j++) {
        //let optionLang = taskRows[i][j].idLang;
        let optionsLang = [];

        optionsLang[j] = taskRows[i][j];
        optionsLang[j].isRight = true;
    }

    taskRowsOptions.push(taskRows[i]);
}

console.log("Task rows options :");
console.log(taskRowsOptions);

//Function get random comp options from comp words array by theme and lang

function getOptionsLang(themeId, langId, wordId) {
    compOptionsLang = [];
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
    compOptionsLang.push(option1, option2, option3);
    //console.log(compOptionsChoise);
    return compOptionsLang;
}

// //Example for get random comp options

// getOptionsMix(3,3,40);
// console.log("Example for get random comp options");
// console.log(compOptionsLang);
// console.log(compOptionsLang.length);

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
    let rowsBlock = document.getElementById("taskModeLang");
    let rowItem = document.createElement("div");    // create row i
    rowItem.classList.add("task-mode");//
    rowItem.setAttribute('name', 'row'+`${index}`);
    rowItem.setAttribute('id', 'item'+`${index}`);
    rowsBlock.appendChild(rowItem);
}


function pageRowsCompLangDom(firstIndex, lastIndex) {
    for (let i=firstIndex; i < (lastIndex); i++) {
        for (let j=0; j<taskRowsTest[i].length; j++) {
            let wordNum = taskRowsTest[i][j].idWord;
            compOptionsLang = [];
        if (taskRowsTest[i][j].idLang == selectedPrimLang[0].id) {
            createRow(i);
            let parentItem = document.getElementById("item"+`${i}`);
            let itemPrim = document.createElement("div");   // create row's Prim card
            itemPrim.classList.add("item-card-base");
            itemPrim.setAttribute('name', 'item' + `${i}` + 'CardBase');
            itemPrim.setAttribute('id', 'item' + `${i}` + 'Base');
            parentItem.appendChild(itemPrim);

            const cardPrimLangHtml = new CardPrimLang();
            cardPrimLangHtml.fetchCardPrimLang(i, j);
            cardPrimLangHtml.render(i);
            } else {

                let parentItem = document.getElementById("item"+`${i}`);
                let item = document.createElement("div");   // create lang's card i,j
                item.classList.add("item-card");

                item.setAttribute('name', 'item'+`${i}`+'CardComp'+`${j}`+'Lang');
                item.setAttribute('id', 'item'+`${i}`+'Comp'+`${j}`);
                parentItem.appendChild(item);

                const cardCompLangHtml = new CardCompLang();    // render lang's card i,j
                item = cardCompLangHtml;
                item.fetchCardCompLang(i,j);
                item.fetchCompOptionsLang(i,j);//
                item.render(i,j);
                
                let cardLang = document.getElementsByName("item"+`${i}`+"CardComp"+`${j}`+"Lang");

                let cardItemOptions = cardLang[0].getElementsByClassName("item-option-lang");
                let cardLangRadios = cardLang[0].getElementsByClassName("option-radio");

                for (let m=0; m < cardLangRadios.length; m++) {
                    cardLangRadios[m].name = 'item' + `${i}` + wordNum + 'Comp' + `${j}`;//
                }

                //console.log(cardLangRadios);
           
                let radioChecked = randEl(cardLangRadios);
                radioChecked.checked = true;

                for (let n=0; n < cardLangRadios.length; n++) {
                    cardLangRadios[n].addEventListener('click', function() {
                        //console.log(cardLangRadios[n].getAttribute('data-isright'));
                        //console.log(cardLangRadios[n]);

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

/// Save totals by Exit button

let exitLang = document.getElementById("exitLang");
let totalsLang = [];

setResultsLang();

function setResultsLang() {    
    exitLang.addEventListener('click', () => {
        totalsEnjoy();
        totalsWorry();
        totalsLang.push(totalEnjoy, totalWorry);
        localStorage.setItem('totalsLang', totalsLang);
    });
}

//pageRowsCompChoiceDom(3, 6);

