let optionsPlain = [];///////////////////
let taskRowsOptions = [];////////////////////////
let compWordsTheme = [];//////////////////////
let compOptionsPlain = [];//////////////////

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
        return `<div class="item-heading" style="height: 40%;">
                    <p class="heading-text" id="item${this.idWord}HeadingBase">${this.langName}</p>
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
        return `<div class="item-option base" style="height: 60%;">
                    <p class="item-word base" id="item${this.idWord}WordBase">${this.wordName}</p>
                </div>`;
    }
}

// class draftCardPrim {
//     constructor() {
//         this.ctaskRows = {};
//         this.itemHeadingPrim = new ItemHeadingPrim();
//         this.itemOptionPrim = new ItemOptionPrim();
//     }
//     fetchCardPrim(i, j) {
//         // if (taskRows[i][j].idLang == selectedPrimLang[0].id) {
//         //    this.ctaskRows = taskRows[i][j]; 
//         // }
//         this.ctaskRows = taskRows[i][j];
        
//     }
//     render() {
//         let itemHeadingPrimHtml = '';
//         let itemOptionPrimHtml = '';

//         let itemHeadingPrim = new ItemHeadingPrim(
//             this.ctaskRows.id,
//             this.ctaskRows.idTheme,
//             this.ctaskRows.idWord,
//             this.ctaskRows.idLang,
//             this.ctaskRows.langName,
//             this.ctaskRows.wordName,
//             this.ctaskRows.spellBase,
//             this.ctaskRows.spellEng,
//         );
        
//         let itemOptionPrim = new ItemOptionPrim(
//             this.ctaskRows.id,
//             this.ctaskRows.idTheme,
//             this.ctaskRows.idWord,
//             this.ctaskRows.idLang,
//             this.ctaskRows.langName,
//             this.ctaskRows.wordName,
//             this.ctaskRows.spellBase,
//             this.ctaskRows.spellEng,
//         ); 

//         //console.log(itemHeadingPrim.langName);
//         //console.log(itemOptionPrim.wordName);

//         this.ctaskRows = itemHeadingPrim;
//         this.ctaskRows = itemOptionPrim;
        
//         itemHeadingPrimHtml = itemHeadingPrim.render();
//         itemOptionPrimHtml = itemOptionPrim.render();
//         let itemPrimHtml = itemHeadingPrimHtml + itemOptionPrimHtml;
//         //document.querySelector('[name="itemCardBase"]').innerHTML = itemPrimHtml;
//         document.querySelector('#itemBase').innerHTML = itemPrimHtml;
//     }
// }

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


// console.log(taskRows.length);
// console.log(taskRows[0].length);

// const cardPrimHtml = new CardPrim();
// cardPrimHtml.fetchCardPrim(0, 0);
// cardPrimHtml.render();  // --> for Plain, Choice and Mix modes

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
        return `<div class="item-heading" style="height: 40%;">
                    <p class="heading-text" id="item${this.idWord}Comp${this.idLang}Heading">${this.langName}</p>
                </div>`;
    }
}

class ItemOptionCompPlain {
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
        return `<div class="item-option" id="item${this.idWord}Comp${this.idLang}Option" style="height: 60%;">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}OptionWord">${this.wordName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}OptionSpell">${this.spellEng}</p>
                    </div>
                    <div class="option-radio-block" style="display: none;">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}OptionRadio" checked data-isright="true">
                    </div>                                    
                </div>`;
    }
}

class ItemOption1CompPlain {
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
        return `<div class="item-option" id="item${this.idWord}Comp${this.idLang}Option1" style="display: none;">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option1Word">${this.wordName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option1Spell">${this.spellEng}</p>
                    </div>
                    <div class="option-radio-block" style="display: none;">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option1Radio" data-isright="false">
                    </div>                                    
                </div>`;
    }
}

class ItemOption2CompPlain {
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
        return `<div class="item-option" id="item${this.idWord}Comp${this.idLang}Option2" style="display: none;">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option2Word">${this.wordName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option2Spell">${this.spellEng}</p>
                    </div>
                    <div class="option-radio-block" style="display: none;">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option2Radio" data-isright="false">
                    </div>                                    
                </div>`;
    }
}

// class draftDraftCardCompPlain {
//     constructor() {
//         this.ctaskRows = {};
//         this.itemHeadingComp = new ItemHeadingComp();
//         this.itemOptionCompPlain = new ItemOptionCompPlain();
//     }
//     fetchCardCompPlain(i, j) {
//         this.ctaskRows = taskRows[i][j];
//     }
//     render(j) {
//         let itemHeadingCompHtml = '';
//         let itemOptionCompPlainHtml = '';
//         let itemOptionCompPlainV1Html = '';
//         let itemOptionCompPlainV2Html = '';

//         let itemHeadingComp = new ItemHeadingComp(
//             this.ctaskRows.id,
//             this.ctaskRows.idTheme,
//             this.ctaskRows.idWord,
//             this.ctaskRows.idLang,
//             this.ctaskRows.langName,
//             this.ctaskRows.wordName,
//             this.ctaskRows.spellBase,
//             this.ctaskRows.spellEng,
//         );
        
//         let itemOptionCompPlain = new ItemOptionCompPlain(
//             this.ctaskRows.id,
//             this.ctaskRows.idTheme,
//             this.ctaskRows.idWord,
//             this.ctaskRows.idLang,
//             this.ctaskRows.langName,
//             this.ctaskRows.wordName,
//             this.ctaskRows.spellBase,
//             this.ctaskRows.spellEng,
//         ); 

//         // + two versions

//         let itemOptionCompPlainV1 = new ItemOption1CompPlain(
//             this.ctaskRows.id,
//             this.ctaskRows.idTheme,
//             this.ctaskRows.idWord,
//             this.ctaskRows.idLang,
//             this.ctaskRows.langName,
//             this.ctaskRows.wordName,
//             this.ctaskRows.spellBase,
//             this.ctaskRows.spellEng,
//         );

//         let itemOptionCompPlainV2 = new ItemOption2CompPlain(
//             this.ctaskRows.id,
//             this.ctaskRows.idTheme,
//             this.ctaskRows.idWord,
//             this.ctaskRows.idLang,
//             this.ctaskRows.langName,
//             this.ctaskRows.wordName,
//             this.ctaskRows.spellBase,
//             this.ctaskRows.spellEng,
//         );

//         //console.log(itemHeadingComp.langName);
//         //console.log(itemOptionCompPlain.wordName);

//         this.ctaskRows = itemHeadingComp;
//         this.ctaskRows = itemOptionCompPlain;
//         this.ctaskRows = itemOptionCompPlainV1;
//         this.ctaskRows = itemOptionCompPlainV2;
        
//         itemHeadingCompHtml = itemHeadingComp.render();
//         itemOptionCompPlainHtml = itemOptionCompPlain.render();
//         itemOptionCompPlainV1Html = itemOptionCompPlainV1.render();
//         itemOptionCompPlainV2Html = itemOptionCompPlainV2.render();

//         let itemCompPlainHtml = itemHeadingCompHtml + itemOptionCompPlainHtml + itemOptionCompPlainV1Html + itemOptionCompPlainV2Html;
//         //let itemCompPlainHtml = itemHeadingCompHtml + cardOptionsRand[0] + cardOptionsRand[1] + cardOptionsRand[2];

//         //let itemCompChoiceHtml = itemHeadingCompHtml + itemOptionCompChoiceHtml + itemOptionCompChoiceV1Html + itemOptionCompChoiceV2Html;

//         document.querySelector("#itemComp"+`${j}`).innerHTML = itemCompPlainHtml;
//     }
// }

// class draftCardCompPlain {
//     constructor() {
//         this.ctaskRows = {};
//         this.ccompOptionsPlain = [];//
//         this.itemHeadingComp = new ItemHeadingComp();
//         this.itemOptionCompPlain = new ItemOptionCompPlain();
//         this.itemOption1CompPlain = new ItemOption1CompPlain();//
//         this.itemOption2CompPlain = new ItemOption2CompPlain();//
//     }
//     fetchCardCompPlain(i, j) {
//         this.ctaskRows = taskRows[i][j];
//     }
//     fetchCompOptionsPlain(i, j) {
//         //this.ctaskRows = taskRows[i][j];
//         console.log(taskRows[i][j].idTheme);
//         this.cTheme = taskRows[i][j].idTheme;
//         this.cLang = taskRows[i][j].idLang;
//         this.cWord = taskRows[i][j].idWord;
//         getOptionsPlain(this.cTheme, this.cLang, this.cWord);
//         this.ccompOptionsPlain = compOptionsPlain;
//     }    
//     render(j) {
//         let itemHeadingCompHtml = '';
//         let itemOptionCompPlainHtml = '';
//         let itemOptionCompPlainV1Html = '';
//         let itemOptionCompPlainV2Html = '';

//         let itemHeadingComp = new ItemHeadingComp(
//             this.ctaskRows.id,
//             this.ctaskRows.idTheme,
//             this.ctaskRows.idWord,
//             this.ctaskRows.idLang,
//             this.ctaskRows.langName,
//             this.ctaskRows.wordName,
//             this.ctaskRows.spellBase,
//             this.ctaskRows.spellEng,
//         );
        
//         let itemOptionCompPlain = new ItemOptionCompPlain(
//             this.ctaskRows.id,
//             this.ctaskRows.idTheme,
//             this.ctaskRows.idWord,
//             this.ctaskRows.idLang,
//             this.ctaskRows.langName,
//             this.ctaskRows.wordName,
//             this.ctaskRows.spellBase,
//             this.ctaskRows.spellEng,
//         ); 

//         // + two versions

//         let itemOptionCompPlainV1 = new ItemOption1CompPlain(
//             this.ccompOptionsPlain[0].id,
//             this.ccompOptionsPlain[0].idTheme,
//             this.ccompOptionsPlain[0].idWord,
//             this.ccompOptionsPlain[0].idLang,
//             this.ccompOptionsPlain[0].langName,
//             this.ccompOptionsPlain[0].wordName,
//             this.ccompOptionsPlain[0].spellBase,
//             this.ccompOptionsPlain[0].spellEng,
//         );

//         let itemOptionCompPlainV2 = new ItemOption2CompPlain(
//             this.ccompOptionsPlain[1].id,
//             this.ccompOptionsPlain[1].idTheme,
//             this.ccompOptionsPlain[1].idWord,
//             this.ccompOptionsPlain[1].idLang,
//             this.ccompOptionsPlain[1].langName,
//             this.ccompOptionsPlain[1].wordName,
//             this.ccompOptionsPlain[1].spellBase,
//             this.ccompOptionsPlain[1].spellEng,
//         );

//         //console.log(itemHeadingComp.langName);
//         //console.log(itemOptionCompChoice.wordName);

//         this.ctaskRows = itemHeadingComp;
//         this.ctaskRows = itemOptionCompPlain;
//         this.ctaskRows = itemOptionCompPlainV1;
//         this.ctaskRows = itemOptionCompPlainV2;
        
//         itemHeadingCompHtml = itemHeadingComp.render();
//         itemOptionCompPlainHtml = itemOptionCompPlain.render();
//         itemOptionCompPlainV1Html = itemOptionCompPlainV1.render();
//         itemOptionCompPlainV2Html = itemOptionCompPlainV2.render();

//         let cardOptions = [];
//         cardOptions[0] = itemOptionCompPlainHtml;
//         cardOptions[1] = itemOptionCompPlainV1Html;
//         cardOptions[2] = itemOptionCompPlainV2Html;
//         let cardOptionsRand = randArr(cardOptions);

//         //let itemCompChoiceHtml = itemHeadingCompHtml + itemOptionCompChoiceHtml + itemOptionCompChoiceV1Html + itemOptionCompChoiceV2Html;
//         let itemCompPlainHtml = itemHeadingCompHtml + cardOptionsRand[0] + cardOptionsRand[1] + cardOptionsRand[2];

//         document.querySelector("#itemComp"+`${j}`).innerHTML = itemCompPlainHtml;
//     }
// }

class CardCompPlain {
    constructor() {
        this.ctaskRows = {};
        this.ccompOptionsChoice = [];//
        this.itemHeadingComp = new ItemHeadingComp();
        this.itemOptionCompPlain = new ItemOptionCompPlain();
        this.itemOption1CompPlain = new ItemOption1CompPlain();//
        this.itemOption2CompPlain = new ItemOption2CompPlain();//
    }
    fetchCardCompPlain(i, j) {
        this.ctaskRows = taskRows[i][j];
    }
    fetchCompOptionsPlain(i, j) {
        //this.ctaskRows = taskRows[i][j];
        //console.log(taskRows[i][j].idTheme);
        this.cTheme = taskRows[i][j].idTheme;
        this.cLang = taskRows[i][j].idLang;
        this.cWord = taskRows[i][j].idWord;
        getOptionsPlain(this.cTheme, this.cLang, this.cWord);
        this.ccompOptionsPlain = compOptionsPlain;
    }    
    render(i, j) {
        let itemHeadingCompHtml = '';
        let itemOptionCompPlainHtml = '';
        let itemOptionCompPlainV1Html = '';
        let itemOptionCompPlainV2Html = '';

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
        
        let itemOptionCompPlain = new ItemOptionCompPlain(
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

        let itemOptionCompPlainV1 = new ItemOption1CompPlain(
            this.ccompOptionsPlain[0].id,
            this.ccompOptionsPlain[0].idTheme,
            this.ccompOptionsPlain[0].idWord,
            this.ccompOptionsPlain[0].idLang,
            this.ccompOptionsPlain[0].langName,
            this.ccompOptionsPlain[0].wordName,
            this.ccompOptionsPlain[0].spellBase,
            this.ccompOptionsPlain[0].spellEng,
        );

        let itemOptionCompPlainV2 = new ItemOption2CompPlain(
            this.ccompOptionsPlain[1].id,
            this.ccompOptionsPlain[1].idTheme,
            this.ccompOptionsPlain[1].idWord,
            this.ccompOptionsPlain[1].idLang,
            this.ccompOptionsPlain[1].langName,
            this.ccompOptionsPlain[1].wordName,
            this.ccompOptionsPlain[1].spellBase,
            this.ccompOptionsPlain[1].spellEng,
        );

        //console.log(itemHeadingComp.langName);
        //console.log(itemOptionCompChoice.wordName);

        this.ctaskRows = itemHeadingComp;
        this.ctaskRows = itemOptionCompPlain;
        this.ctaskRows = itemOptionCompPlainV1;
        this.ctaskRows = itemOptionCompPlainV2;
        
        itemHeadingCompHtml = itemHeadingComp.render();
        itemOptionCompPlainHtml = itemOptionCompPlain.render();
        itemOptionCompPlainV1Html = itemOptionCompPlainV1.render();
        itemOptionCompPlainV2Html = itemOptionCompPlainV2.render();

        let cardOptions = [];
        cardOptions[0] = itemOptionCompPlainHtml;
        cardOptions[1] = itemOptionCompPlainV1Html;
        cardOptions[2] = itemOptionCompPlainV2Html;
        let cardOptionsRand = randArr(cardOptions);

        //let itemCompPlainHtml = itemHeadingCompHtml + itemOptionCompPlainHtml + itemOptionCompPlainV1Html + itemOptionCompPlainV2Html;
        let itemCompPlainHtml = itemHeadingCompHtml + cardOptionsRand[0] + cardOptionsRand[1] + cardOptionsRand[2];

        document.querySelector("#item"+`${i}`+"Comp"+`${j}`).innerHTML = itemCompPlainHtml;
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

// const cardCompPlainHtml = new CardCompPlain();
// cardCompPlainHtml.fetchCardCompPlain(0,1);
// cardCompPlainHtml.render();

// test row render
//cardCompPlainDom();

for (let i=0; i<taskRows.length; i++) {
    let optionsPlainTheme = [];

    for (let j=0; j<taskRows[i].length; j++) {
        let thisTheme = taskRows[i][j].idTheme;
        let thisWord = taskRows[i][j].idWord;
        let thisLang = taskRows[i][j].idLang;
        let optionsPlainThemeLang = [];    
        for (let k=0; k<compWords.length; k++) {
            if (compWords[k].idTheme == thisTheme && compWords[k].idWord !== thisWord && compWords[k].idLang == thisLang) {
                optionsPlainThemeLang.push(compWords[k]);
            }
        }

        //console.log("Option Choice theme lang: " + taskRows[0][j].langName);
        //console.log(optionsChoiceThemeLang);
        optionsPlainTheme.push(optionsPlainThemeLang);
    }
    optionsPlain.push(optionsPlainTheme);
    //console.log("Option Choice theme: ");
    //console.log(optionsChoiceTheme);

    //console.log(randEl(optionsChoiceTheme[1]));
}

console.log("Options Plain : ");
console.log(optionsPlain);

console.log("Random option Plain: ");
//console.log(randOptionsPlain);

////console.log(randEl(randOptionsPlain[1]));

//Function for test row render

// function cardCompChoiceDom() {
//     for (let j=0; j<taskRows[0].length; j++) {
//         // let themeNum = taskRows[0][j].idTheme;
//         let wordNum = taskRows[0][j].idWord;
//         // let langNum = taskRows[0][j].idLang;
//         compOptionsPlain = [];
//         //console.log(wordNum);
//     if (taskRows[0][j].idLang == selectedPrimLang[0].id) {
//            const cardPrimHtml = new draftCardPrim();
//            cardPrimHtml.fetchCardPrim(0, j);
//            cardPrimHtml.render();
//         } else {            
//             let parentItem = document.getElementById("item");
//             let item = document.createElement("div");
//             item.classList.add("item-card");
//             //item.name = "itemCardComp1Plain";   // `itemCardComp${this.j}Plain`;
//             //item.setAttribute('name', 'itemCardComp1Choice');
//             item.setAttribute('name', 'itemCardComp'+`${j}`+'Plain');
//             item.setAttribute('id', 'item'+'Comp'+`${j}`);
//             parentItem.appendChild(item);
//             //const cardCompChoiceHtml = new CardCompChoice();
//             const cardCompPlainHtml = new draftCardCompPlain();
//             item = cardCompPlainHtml;
//             item.fetchCardCompPlain(0,j);
//             item.fetchCompOptionsPlain(0,j);//
//             item.render(j);
            
//             let cardLang = document.getElementsByName("itemCardComp"+`${j}`+"Plain");
//             //console.log(cardLang);
//             let cardItemOptions = cardLang[0].getElementsByClassName("item-option");
//             let cardLangRadios = cardLang[0].getElementsByClassName("option-radio");
//             //console.log(cardLangRadios);

//             for (let m=0; m < cardLangRadios.length; m++) {
//                 cardLangRadios[m].name = 'item' + wordNum + 'Comp' + `${j}`;//
//             }

//             //console.log(cardLangRadios);
            
//             let radioChecked = randEl(cardLangRadios);
//             radioChecked.checked = true;

//             for (let n=0; n < cardLangRadios.length; n++) {
//                 cardLangRadios[n].addEventListener('click', function() {
//                     //let dataIsRight = cardLangRadios[n].getAttribute('data-isright');
//                     if (cardLangRadios[n].getAttribute('data-isright') == "false") {
//                         cardItemOptions[n].style.backgroundColor = "#fccfe0";
//                         //console.log("this checked");
//                     } else {
//                         cardItemOptions[n].style.backgroundColor = "#c2fceb";
//                     }
//                 });
//             }
//             console.log(cardLangRadios[1].getAttribute('data-isright'));
//             //cardItemOptions[2].style.backgroundColor = "#fccfe0";

//         }
//     }
// }

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
//Define task rows with options array for mode Choice
///////let taskRowsOptions = [];////////////////////////

for (let i=0; i < taskRows.length; i++) {
    //console.log(taskRows[i].length);
    let rowTheme = taskRows[i][0].idTheme;
    let rowWord = taskRows[i][0].idWord;
    //getCompWordsTheme(rowTheme, rowWord);
    //console.log(compWordsTheme);
   
    for (let j=0; j < taskRows[i].length; j++) {
        let optionLang = taskRows[i][j].idLang;
        let optionsPlain = [];

        optionsPlain[j] = taskRows[i][j];
        optionsPlain[j].isRight = true;
    }

    taskRowsOptions.push(taskRows[i]);
}

console.log("Task rows options :");
console.log(taskRowsOptions);

//Function get random comp options from comp words array by theme and lang

function getOptionsPlain(themeId, langId, wordId) {
    compOptionsPlain = [];
    compWordsTheme = [];
    for (let k=0; k < compWords.length; k++) {
        if (compWords[k].idLang !== langId) {
            continue;
        } else if (compWords[k].idTheme == themeId && wordId !== compWords[k].idWord) {
            compWordsTheme.push(compWords[k]);//
        } else { continue;}         
    }

    //console.log(compWordsTheme);
    
    let option1 = randEl(compWordsTheme);
    let newCompWordsTheme = compWordsTheme.filter(item => item !== option1);
    let option2 = randEl(newCompWordsTheme);
    option1.isRight = false;
    option2.isRight = false;
    compOptionsPlain.push(option1, option2);
    //console.log(compOptionsPlain);
    return compOptionsPlain;
}

// //Example for get random comp options

// getOptionsPlain(3,3,40);
// console.log("Example for get random comp options");
// console.log(compOptionsPlain);
// console.log(compOptionsPlain.length);

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
    let rowsBlock = document.getElementById("taskModePlain");
    let rowItem = document.createElement("div");    // create row i
    rowItem.classList.add("task-mode");//
    rowItem.setAttribute('name', 'row'+`${index}`);
    rowItem.setAttribute('id', 'item'+`${index}`);
    rowsBlock.appendChild(rowItem);
}

// function rowsCompPlainDom() {
//     for (let i=0; i < (arrNum+1); i++) {
//         //
//     //}
//         for (let j=0; j<taskRowsTest[i].length; j++) {
//             // let themeNum = taskRows[0][j].idTheme;
//             let wordNum = taskRowsTest[i][j].idWord;
//             // let langNum = taskRows[0][j].idLang;
//             compOptionsPlain = [];
//             //console.log(wordNum);
//         if (taskRowsTest[i][j].idLang == selectedPrimLang[0].id) {
//             // let rowsBlock = document.getElementById("taskModePlain");
//             // let rowItem = document.createElement("div");    // create row i
//             // rowItem.classList.add("task-mode");//
//             // rowItem.setAttribute('name', 'row'+`${i}`);
//             // rowItem.setAttribute('id', 'item'+`${i}`);
//             // rowsBlock.appendChild(rowItem);
//             createRow(i);
//             let parentItem = document.getElementById("item"+`${i}`);
//             let itemPrim = document.createElement("div");   // create row's Prim card
//             itemPrim.classList.add("item-card-base");
//             itemPrim.setAttribute('name', 'item' + `${i}` + 'CardBase');
//             itemPrim.setAttribute('id', 'item' + `${i}` + 'Base');
//             parentItem.appendChild(itemPrim);

//             const cardPrimHtml = new CardPrim();
//             cardPrimHtml.fetchCardPrim(i, j);
//             cardPrimHtml.render(i);
//             } else {
//                 // let rowsBlock = document.getElementById("taskModePlain");
//                 // let rowItem = document.createElement("div");    // create row i
//                 // rowItem.classList.add("task-mode");//
//                 // rowItem.setAttribute('name', 'row'+`${i}`);
//                 // rowItem.setAttribute('id', 'item'+`${i}`);
//                 // rowsBlock.appendChild(rowItem);

//                 let parentItem = document.getElementById("item"+`${i}`);
//                 let item = document.createElement("div");   // create lang's card i,j
//                 item.classList.add("item-card");
//                 //item.name = "itemCardComp1Plain";   // `itemCardComp${this.j}Plain`;
//                 //item.setAttribute('name', 'itemCardComp1Choice');
//                 item.setAttribute('name', 'item'+`${i}`+'CardComp'+`${j}`+'Plain');
//                 item.setAttribute('id', 'item'+`${i}`+'Comp'+`${j}`);
//                 parentItem.appendChild(item);
//                 //const cardCompChoiceHtml = new CardCompChoice();
//                 const cardCompPlainHtml = new CardCompPlain();    // render lang's card i,j
//                 item = cardCompPlainHtml;
//                 item.fetchCardCompPlain(i,j);
//                 item.fetchCompOptionsPlain(i,j);//
//                 item.render(i,j);
                
//                 let cardLang = document.getElementsByName("item"+`${i}`+"CardComp"+`${j}`+"Plain");
//                 //console.log(cardLang);
//                 let cardItemOptions = cardLang[0].getElementsByClassName("item-option");
//                 let cardLangRadios = cardLang[0].getElementsByClassName("option-radio");
//                 //console.log(cardLangRadios);

//                 for (let m=0; m < cardLangRadios.length; m++) {
//                     cardLangRadios[m].name = 'item' + `${i}` + wordNum + 'Comp' + `${j}`;//
//                 }

//                 //console.log(cardLangRadios);
                
//                 let radioChecked = randEl(cardLangRadios);
//                 radioChecked.checked = true;

//                 for (let n=0; n < cardLangRadios.length; n++) {
//                     cardLangRadios[n].addEventListener('click', function() {
//                         //let dataIsRight = cardLangRadios[n].getAttribute('data-isright');
//                         if (cardLangRadios[n].getAttribute('data-isright') == "false") {
//                             cardItemOptions[n].style.backgroundColor = "#fccfe0";
//                             valueWorry++;
//                             resultWorry.textContent = valueWorry;
//                             //console.log("this checked");
//                         } else {
//                             cardItemOptions[n].style.backgroundColor = "#c2fceb";
//                             valueEnjoy++;
//                             resultEnjoy.textContent = valueEnjoy;
//                         }
//                     });
//                 }
//                 //console.log(cardLangRadios[1].getAttribute('data-isright'));
//                 //cardItemOptions[2].style.backgroundColor = "#fccfe0";

//             }
//         }
//     }
// }

// function resultsTotals() {
//     //
// }

function pageRowsCompPlainDom(firstIndex, lastIndex) {
    for (let i=firstIndex; i < (lastIndex); i++) {
        for (let j=0; j < (taskRowsTest[i].length); j++) {
            let wordNum = taskRowsTest[i][j].idWord;
            compOptionsPlain = [];
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

                item.setAttribute('name', 'item'+`${i}`+'CardComp'+`${j}`+'Plain');
                item.setAttribute('id', 'item'+`${i}`+'Comp'+`${j}`);
                parentItem.appendChild(item);

                const cardCompPlainHtml = new CardCompPlain();    // render lang's card i,j
                item = cardCompPlainHtml;
                item.fetchCardCompPlain(i,j);
                item.fetchCompOptionsPlain(i,j);//
                item.render(i,j);
                
                let cardLang = document.getElementsByName("item"+`${i}`+"CardComp"+`${j}`+"Plain");

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

//pageRowsCompPlainDom(3, 6);

