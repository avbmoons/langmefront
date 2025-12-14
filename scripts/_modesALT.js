// class DataService {
//     getData() {
//         //let prim
//     }
// }

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
        return `<div class="item-option base">
                    <p class="item-word base" id="item${this.idWord}WordBase">${this.wordName}</p>
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
    render() {
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

        console.log(itemHeadingPrim.langName);
        console.log(itemOptionPrim.wordName);

        this.ctaskRows = itemHeadingPrim;
        this.ctaskRows = itemOptionPrim;
        
        itemHeadingPrimHtml = itemHeadingPrim.render();
        itemOptionPrimHtml = itemOptionPrim.render();
        let itemPrimHtml = itemHeadingPrimHtml + itemOptionPrimHtml;
        document.querySelector('[name="itemCardBase"]').innerHTML = itemPrimHtml;
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
        return `<div class="item-heading">
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
        return `<div class="item-option" id="item${this.idWord}Comp${this.idLang}Option1" style="height: 25%;">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option1Word">${this.wordName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option1Spell">${this.spellEng}</p>
                    </div>
                    <div class="option-radio-block" style="display: none;">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option1Radio">
                    </div>                                    
                </div>`;
    }
}

class CardCompPlain {
    constructor() {
        this.ctaskRows = {};
        this.itemHeadingComp = new ItemHeadingComp();
        this.itemOptionCompPlain = new ItemOptionCompPlain();
    }
    fetchCardCompPlain(i,j) {
        this.ctaskRows = taskRows[i][j];
    }
    render(j) {
        let itemHeadingCompHtml = '';
        let itemOptionCompPlainHtml = '';

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

        console.log(itemHeadingComp.langName);
        console.log(itemOptionCompPlain.wordName);

        this.ctaskRows = itemHeadingComp;
        this.ctaskRows = itemOptionCompPlain;
        
        itemHeadingCompHtml = itemHeadingComp.render();
        itemOptionCompPlainHtml = itemOptionCompPlain.render();
        let itemCompPlainHtml = itemHeadingCompHtml + itemOptionCompPlainHtml;
        //document.querySelector('[name="itemCardComp1Plain"]').innerHTML = itemCompPlainHtml;
        document.querySelector("#item1Comp"+`${j}`).innerHTML = itemCompPlainHtml;
    }
}

class ItemOptionCompChoice {
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
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option1Word">${this.wordName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option1Spell">${this.spellEng}</p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option1Radio" checked>
                    </div>                                    
                </div>`;
    }
}

class CardCompChoice {
    constructor() {
        this.ctaskRows = {};
        this.itemHeadingComp = new ItemHeadingComp();
        this.itemOptionCompChoice = new ItemOptionCompChoice();
    }
    fetchCardCompChoice(i, j) {
        this.ctaskRows = taskRows[i][j];
    }
    render(j) {
        let itemHeadingCompHtml = '';
        let itemOptionCompChoiceHtml = '';
        let itemOptionCompChoiceV1Html = '';
        let itemOptionCompChoiceV2Html = '';

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
        
        let itemOptionCompChoice = new ItemOptionCompChoice(
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

        let itemOptionCompChoiceV1 = new ItemOptionCompChoice(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        );

        let itemOptionCompChoiceV2 = new ItemOptionCompChoice(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        );

        console.log(itemHeadingComp.langName);
        console.log(itemOptionCompChoice.wordName);

        this.ctaskRows = itemHeadingComp;
        this.ctaskRows = itemOptionCompChoice;
        this.ctaskRows = itemOptionCompChoiceV1;
        this.ctaskRows = itemOptionCompChoiceV2;
        
        itemHeadingCompHtml = itemHeadingComp.render();
        itemOptionCompChoiceHtml = itemOptionCompChoice.render();
        itemOptionCompChoiceV1Html = itemOptionCompChoiceV1.render();
        itemOptionCompChoiceV2Html = itemOptionCompChoiceV2.render();

        let itemCompChoiceHtml = itemHeadingCompHtml + itemOptionCompChoiceHtml + itemOptionCompChoiceV1Html + itemOptionCompChoiceV2Html;

        document.querySelector("#itemComp"+`${j}`).innerHTML = itemCompChoiceHtml;
    }
}

// const cardCompPlainHtml = new CardCompPlain();
// cardCompPlainHtml.fetchCardCompPlain(0,1);
// cardCompPlainHtml.render();

cardCompPlainDom();

// for (let j=0; j<taskRows[0].length; j++) {
//     if (taskRows[0][j].idLang == selectedPrimLang[0].id) {
//            const cardPrimHtml = new CardPrim();
//            cardPrimHtml.fetchCardPrim(0, j);
//            cardPrimHtml.render();
//         } else {            
//             let parentItem = document.getElementById("item1");
//             let item = document.createElement("div");
//             item.classList.add("item-card");
//             //item.name = "itemCardComp1Choice";   // `itemCardComp${this.j}Choice`;
//             item.setAttribute('name', 'itemCardComp1Choice');
//             item.setAttribute('id', 'item1'+'Comp'+`${j}`);
//             parentItem.appendChild(item);
//             const cardCompChoiceHtml = new CardCompChoice();
//             item = cardCompChoiceHtml;
//             item.fetchCardCompChoice(0,j);
//             item.render(j);
//             console.log("done");
//             // item.innerHTML = cardCompPlainHtml;
//             //cardCompPlainDom(j);
//             // cardCompPlainHtml.fetchCardCompPlain(0,j);
//             // cardCompPlainHtml.render();
//         }
// }

function cardCompPlainDom() {
    for (let j=0; j<taskRows[0].length; j++) {
    if (taskRows[0][j].idLang == selectedPrimLang[0].id) {
           const cardPrimHtml = new CardPrim();
           cardPrimHtml.fetchCardPrim(0, j);
           cardPrimHtml.render();
        } else {            
            let parentItem = document.getElementById("item1");
            let item = document.createElement("div");
            item.classList.add("item-card");
            //item.name = "itemCardComp1Plain";   // `itemCardComp${this.j}Plain`;
            item.setAttribute('name', 'itemCardComp1Plain');
            item.setAttribute('id', 'item1'+'Comp'+`${j}`);
            parentItem.appendChild(item);
            const cardCompPlainHtml = new CardCompPlain();
            item = cardCompPlainHtml;
            item.fetchCardCompPlain(0,j);
            item.render(j);
            console.log("done");
            // item.innerHTML = cardCompPlainHtml;
            //cardCompPlainDom(j);
            // cardCompPlainHtml.fetchCardCompPlain(0,j);
            // cardCompPlainHtml.render();
        }
    }
}
