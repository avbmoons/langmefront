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
        return `<div class="item-option" id="item${this.idWord}Comp${this.idLang}Option1">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option1Word">${this.spellEng}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option1Spell" style="display: none;"></p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option1Radio" checked>
                    </div>                                    
                </div>`;
    }
}

class CardCompMix {
    constructor() {
        this.ctaskRows = {};
        this.itemHeadingComp = new ItemHeadingComp();
        this.itemOptionCompMix = new ItemOptionCompMix();
    }
    fetchCardCompMix(i, j) {
        this.ctaskRows = taskRows[i][j];
    }
    render(j) {
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

        // + three versions

        let itemOptionCompMixV1 = new ItemOptionCompMix(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        );

        let itemOptionCompMixV2 = new ItemOptionCompMix(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        );

        let itemOptionCompMixV3 = new ItemOptionCompMix(
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
        console.log(itemOptionCompMix.wordName);

        this.ctaskRows = itemHeadingComp;
        this.ctaskRows = itemOptionCompMix;
        this.ctaskRows = itemOptionCompMixV1;
        this.ctaskRows = itemOptionCompMixV2;
        
        itemHeadingCompHtml = itemHeadingComp.render();
        itemOptionCompMixHtml = itemOptionCompMix.render();
        itemOptionCompMixV1Html = itemOptionCompMixV1.render();
        itemOptionCompMixV2Html = itemOptionCompMixV2.render();
        itemOptionCompMixV3Html = itemOptionCompMixV3.render();

        let itemCompMixHtml = itemHeadingCompHtml + itemOptionCompMixHtml + itemOptionCompMixV1Html + itemOptionCompMixV2Html + itemOptionCompMixV3Html;

        document.querySelector("#item1Comp"+`${j}`).innerHTML = itemCompMixHtml;
    }
}

// const cardCompPlainHtml = new CardCompPlain();
// cardCompPlainHtml.fetchCardCompPlain(0,1);
// cardCompPlainHtml.render();

cardCompMixDom();

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

function cardCompMixDom() {
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
            item.setAttribute('name', 'itemCardComp1Mix');
            item.setAttribute('id', 'item1'+'Comp'+`${j}`);
            parentItem.appendChild(item);
            const cardCompMixHtml = new CardCompMix();
            item = cardCompMixHtml;
            item.fetchCardCompMix(0,j);
            item.render(j);
            console.log("done");
            // item.innerHTML = cardCompPlainHtml;
            //cardCompPlainDom(j);
            // cardCompPlainHtml.fetchCardCompPlain(0,j);
            // cardCompPlainHtml.render();
        }
    }
}
