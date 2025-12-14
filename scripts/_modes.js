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
    fetchCardPrim() {
        this.ctaskRows = taskRows[0][0];
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

const cardPrimHtml = new CardPrim();
cardPrimHtml.fetchCardPrim();
cardPrimHtml.render();  // --> for Plain, Choice and Mix modes

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
    fetchCardPrimLang() {
        this.ctaskRows = taskRows[0][0];
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

const cardPrimLangHtml = new CardPrimLang();
cardPrimLangHtml.fetchCardPrimLang();
//cardPrimLangHtml.render();    --> for Lang mode

//Classes for Comp words for modes: Plain, Choice and Mix

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

class ItemOptionCompChoiceList {
    constructor() {
        this.ctaskRows = [];
    }
    fetchItemOptionCompChoiceList() {
        this.ctaskRows = taskRows[0][2];
    }
    render() {
        let listHtmlItemOptionCompChoice = '';
        this.ctaskRows.forEach( ctaskRow => {
            const itemOptionCompChoice = new ItemOptionCompChoice(
                this.ctaskRows.id,
                this.ctaskRows.idTheme,
                this.ctaskRows.idWord,
                this.ctaskRows.idLang,
                this.ctaskRows.langName,
                this.ctaskRows.wordName,
                this.ctaskRows.spellBase,
                this.ctaskRows.spellEng,
            );
            listHtmlItemOptionCompChoice += itemOptionCompChoice.render();
        });
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

class CardCompPlain {
    constructor() {
        this.ctaskRows = {};
        this.itemHeadingComp = new ItemHeadingComp();
        this.itemOptionCompPlain = new ItemOptionCompPlain();
    }
    fetchCardCompPlain() {
        this.ctaskRows = taskRows[0][1];
    }
    render() {
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
        document.querySelector('[name="itemCardComp1Plain"]').innerHTML = itemCompPlainHtml;
    }
}

class CardCompChoice {
    constructor() {
        this.ctaskRows = {};
        this.itemHeadingComp = new ItemHeadingComp();
        this.itemOptionCompChoice = new ItemOptionCompChoice();
    }
    fetchCardCompChoice() {
        this.ctaskRows = taskRows[0][2];
    }
    render() {
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

        document.querySelector('[name="itemCardComp2Choice"]').innerHTML = itemCompChoiceHtml;
    }
}

class TestCardCompChoice {
    constructor() {
        this.ctaskRows = {};
        this.itemHeadingComp = new ItemHeadingComp();
        this.itemOptionCompChoiceList = new ItemOptionCompChoiceList();
    }
    fetchCardCompChoice() {
        this.ctaskRows = taskRows[0][2];
    }
    render() {
        let itemHeadingCompHtml = '';
        let itemOptionCompChoiceListHtml = '';

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
        
        let itemOptionCompChoiceList = new ItemOptionCompChoiceList(
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
        //console.log(itemOptionCompChoiceList);

        this.ctaskRows = itemHeadingComp;
        this.ctaskRows = itemOptionCompChoiceList;
        
        itemHeadingCompHtml = itemHeadingComp.render();
        itemOptionCompChoiceListHtml = itemOptionCompChoiceList.render();

        let itemCompChoiceHtml = itemHeadingCompHtml + itemOptionCompChoiceListHtml;

        document.querySelector('[name="itemCardComp2Choice"]').innerHTML = itemCompChoiceHtml;
    }
}

class CardCompMix {
    constructor() {
        this.ctaskRows = {};
        this.itemHeadingComp = new ItemHeadingComp();
        this.itemOptionCompMix = new ItemOptionCompMix();
    }
    fetchCardCompMix() {
        this.ctaskRows = taskRows[0][4];
    }
    render() {
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

        document.querySelector('[name="itemCardComp4Mix"]').innerHTML = itemCompMixHtml;
    }
}

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
    fetchCardCompLang() {
        this.ctaskRows = taskRows[0][3];
    }
    render() {
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

        document.querySelector('[name="itemCardComp3Lang"]').innerHTML = itemCompLangHtml;
    }
}

const cardCompPlainHtml = new CardCompPlain();
cardCompPlainHtml.fetchCardCompPlain();
cardCompPlainHtml.render();

const cardCompChoiceHtml = new CardCompChoice();
cardCompChoiceHtml.fetchCardCompChoice();
cardCompChoiceHtml.render();

// const cardCompChoiceHtml = new TestCardCompChoice();
// cardCompChoiceHtml.fetchCardCompChoice();
// cardCompChoiceHtml.render();

const cardCompLangHtml = new CardCompLang();
cardCompLangHtml.fetchCardCompLang();
cardCompLangHtml.render();

const cardCompMixHtml = new CardCompMix();
cardCompMixHtml.fetchCardCompMix();
cardCompMixHtml.render();

//Class for Plain mode row
// class ModePlainRow {
//     constructor() {
//         this.ctaskRows = {};    // [];
//     }
//     fetchModePlainRow() {
//         //console.log(taskRows[0]);
//         this.ctaskRows = taskRows[0];
//         console.log(this.ctaskRows[0]);
//         console.log(this.ctaskRows[1]);
//     }
//     render() {
//         let listHtmlCardPlain = '';

//         const cardPrimPlainItem = new CardPrim(
//             this.ctaskRows[0].id,
//             this.ctaskRows[0].idTheme,
//             this.ctaskRows[0].idWord,
//             this.ctaskRows[0].idLang,
//             this.ctaskRows[0].langName,
//             this.ctaskRows[0].wordName,
//             this.ctaskRows[0].spellBase,
//             this.ctaskRows[0].spellEng,
//         );    
//         const cardCompPlainItem1 = new CardCompPlain(
//                 this.ctaskRows[1].id,
//                 this.ctaskRows[1].idTheme,
//                 this.ctaskRows[1].idWord,
//                 this.ctaskRows[1].idLang,
//                 this.ctaskRows[1].langName,
//                 this.ctaskRows[1].wordName,
//                 this.ctaskRows[1].spellBase,
//                 this.ctaskRows[1].spellEng,
//             ); 
//         const cardCompPlainItem2 = new CardCompPlain(
//                 this.ctaskRows[2].id,
//                 this.ctaskRows[2].idTheme,
//                 this.ctaskRows[2].idWord,
//                 this.ctaskRows[2].idLang,
//                 this.ctaskRows[2].langName,
//                 this.ctaskRows[2].wordName,
//                 this.ctaskRows[2].spellBase,
//                 this.ctaskRows[2].spellEng,
//             );   
//         const cardCompPlainItem3 = new CardCompPlain(
//                 this.ctaskRows[3].id,
//                 this.ctaskRows[3].idTheme,
//                 this.ctaskRows[3].idWord,
//                 this.ctaskRows[3].idLang,
//                 this.ctaskRows[3].langName,
//                 this.ctaskRows[3].wordName,
//                 this.ctaskRows[3].spellBase,
//                 this.ctaskRows[3].spellEng,
//             );
//         const cardCompPlainItem4 = new CardCompPlain(
//                 this.ctaskRows[4].id,
//                 this.ctaskRows[4].idTheme,
//                 this.ctaskRows[4].idWord,
//                 this.ctaskRows[4].idLang,
//                 this.ctaskRows[4].langName,
//                 this.ctaskRows[4].wordName,
//                 this.ctaskRows[4].spellBase,
//                 this.ctaskRows[4].spellEng,
//             );

//         // this.ctaskRows.forEach( ctaskRows => {
//         //     const cardCompPlainItem = new CardCompPlain(
//         //         this.ctaskRows[0].id,
//         //         this.ctaskRows[0].idTheme,
//         //         this.ctaskRows[0].idWord,
//         //         this.ctaskRows[0].idLang,
//         //         this.ctaskRows[0].langName,
//         //         this.ctaskRows[0].wordName,
//         //         this.ctaskRows[0].spellBase,
//         //         this.ctaskRows[0].spellEng,
//         //     );
//         //     listHtmlCardPlain += cardPrimPlainItem.render() + cardCompPlainItem.render();
//         // });
//         listHtmlCardPlain += cardPrimPlainItem.render() + cardCompPlainItem1.render() + cardCompPlainItem2.render() + cardCompPlainItem3.render() + cardCompPlainItem4.render();
//         document.querySelector('[name = "rowPlain"]').innerHTML = listHtmlCardPlain;
        
//     }
// }

// //console.log(taskRows[0]);

// const modePlainRow = new ModePlainRow();
// modePlainRow.fetchModePlainRow();
// modePlainRow.render();

// //Class for Plain mode rows list
// class CardPlainList {
//     constructor() {
//         this.ctaskRows = [];
//     }
//     fetchCardPlain() {
//         this.ctaskRows = taskRows;
//     }
//     render() {
//         let listHtmlCardPlain = '';
//         this.ctaskRows.forEach( ctaskRows => {
//             const cardPrimPlainItem = new CardPrim(
//                 ctaskRows.id,
//                 ctaskRows.idTheme,
//                 ctaskRows.idWord,
//                 ctaskRows.idLang,
//                 ctaskRows.langName,
//                 ctaskRows.wordName,
//                 ctaskRows.spellBase,
//                 ctaskRows.spellEng,
//             );
//             const cardCompPlainItem = new CardCompPlain(
//                 ctaskRows.id,
//                 ctaskRows.idTheme,
//                 ctaskRows.idWord,
//                 ctaskRows.idLang,
//                 ctaskRows.langName,
//                 ctaskRows.wordName,
//                 ctaskRows.spellBase,
//                 ctaskRows.spellEng,
//             );
//             listHtmlCardPlain += cardPrimPlainItem.render() + cardCompPlainItem.render();
//         });
//         document.querySelector('taskModePlain').innerHTML = listHtmlCardPlain;
        
//     }
// }


// //const listCardPlain = new CardPlainList();
// // listCardPlain.fetchCardPlain();
// // listCardPlain.render();


