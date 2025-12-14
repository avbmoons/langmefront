//Classes for Prim words for mode Lang

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
                    <p class="heading-text" id="item${this.idWord}HeadingBase" style="font-size: 1.39vw; font-weight: 400; height: 20%;">${this.wordName}</p>
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
                    <p class="item-word base" id="item${this.idLang}WordBase" style="font-size: 1.11vw; font-weight: 300; height: 20%; background-color: #f2f7f7;">${this.langName}</p>
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
        this.ctaskRows = taskRows[i][j];
    }
    render() {
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

        console.log(itemHeadingPrimLang.langName);
        console.log(itemOptionPrimLang.wordName);

        this.ctaskRows = itemHeadingPrimLang;
        this.ctaskRows = itemOptionPrimLang;
        
        itemHeadingPrimLangHtml = itemHeadingPrimLang.render();
        itemOptionPrimLangHtml = itemOptionPrimLang.render();
        let itemPrimLangHtml = itemHeadingPrimLangHtml + itemOptionPrimLangHtml;
        document.querySelector('[name="itemCardBase"]').innerHTML = itemPrimLangHtml;
    }
}


// console.log(taskRows.length);
// console.log(taskRows[0].length);

// const cardPrimHtml = new CardPrim();
// cardPrimHtml.fetchCardPrim(0, 0);
// cardPrimHtml.render();  // --> for Plain, Choice and Mix modes

//Classes for Comp words for mode Lang

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
        return `<div class="item-heading">
                    <p class="heading-text" id="item${this.idWord}Comp${this.idLang}Heading">${this.spellEng}</p>
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
        return `<div class="item-option" id="item${this.idWord}Comp${this.idLang}Option1">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option1Word">${this.langName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option1Spell" style="display: none;"></p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option1Radio" checked>
                    </div>                                    
                </div>`;
    }
}

class CardCompLang {
    constructor() {
        this.ctaskRows = {};
        this.itemHeadingCompLang = new ItemHeadingCompLang();
        this.itemOptionCompLang = new ItemOptionCompLang();
    }
    fetchCardCompLang(i, j) {
        this.ctaskRows = taskRows[i][j];
    }
    render(j) {
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

        // + three versions

        let itemOptionCompLangV1 = new ItemOptionCompLang(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        );

        let itemOptionCompLangV2 = new ItemOptionCompLang(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        );

        let itemOptionCompLangV3 = new ItemOptionCompLang(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        );

        console.log(itemHeadingCompLang.langName);
        console.log(itemOptionCompLang.wordName);

        this.ctaskRows = itemHeadingCompLang;
        this.ctaskRows = itemOptionCompLang;
        this.ctaskRows = itemOptionCompLangV1;
        this.ctaskRows = itemOptionCompLangV2;
        
        itemHeadingCompLangHtml = itemHeadingCompLang.render();
        itemOptionCompLangHtml = itemOptionCompLang.render();
        itemOptionCompLangV1Html = itemOptionCompLangV1.render();
        itemOptionCompLangV2Html = itemOptionCompLangV2.render();
        itemOptionCompLangV3Html = itemOptionCompLangV3.render();

        let itemCompLangHtml = itemHeadingCompLangHtml + itemOptionCompLangHtml + itemOptionCompLangV1Html + itemOptionCompLangV2Html + itemOptionCompLangV3Html;

        document.querySelector("#item1Comp"+`${j}`).innerHTML = itemCompLangHtml;
    }
}

// const cardCompPlainHtml = new CardCompPlain();
// cardCompPlainHtml.fetchCardCompPlain(0,1);
// cardCompPlainHtml.render();

cardCompLangDom();

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

function cardCompLangDom() {
    for (let j=0; j<taskRows[0].length; j++) {
    if (taskRows[0][j].idLang == selectedPrimLang[0].id) {
           const cardPrimHtml = new CardPrimLang();
           cardPrimHtml.fetchCardPrimLang(0, j);
           cardPrimHtml.render();
        } else {            
            let parentItem = document.getElementById("item1");
            let item = document.createElement("div");
            item.classList.add("item-card");
            //item.name = "itemCardComp1Lang";   // `itemCardComp${this.j}Lang`;
            item.setAttribute('name', 'itemCardComp1Lang');
            item.setAttribute('id', 'item1'+'Comp'+`${j}`);
            parentItem.appendChild(item);
            const cardCompLangHtml = new CardCompLang();
            item = cardCompLangHtml;
            item.fetchCardCompLang(0,j);
            item.render(j);
            console.log("done");
            // item.innerHTML = cardCompPlainHtml;
            //cardCompPlainDom(j);
            // cardCompPlainHtml.fetchCardCompPlain(0,j);
            // cardCompPlainHtml.render();
        }
    }
}
