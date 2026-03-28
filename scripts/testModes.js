// ////////test

class ItemCompPlain {
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
        return `<div class="item-heading" style="height: 50%;">
                    <p class="heading-text" id="item${this.idWord}Comp${this.idLang}Heading">${this.langName}</p>
                </div>
                <div class="item-option" id="item${this.idWord}Comp${this.idLang}Option1" style="height: 50%;">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option1Word">${this.wordName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option1Spell">${this.spellEng}</p>
                    </div>                                   
                </div>`;
    }
}

class ItemCompChoice {
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
                </div>
                <div class="item-option" id="item${this.idWord}Comp${this.idLang}Option1">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option1Word">${this.wordName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option1Spell">${this.spellEng}</p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option1Radio">
                    </div>                                    
                </div>
                <div class="item-option" id="item${this.idWord}Comp${this.idLang}Option2">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option2Word">${this.wordName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option2Spell">${this.spellEng}</p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option2Radio">
                    </div>                                
                </div>
                <div class="item-option" id="item${this.idWord}Comp${this.idLang}Option3">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option3Word">${this.wordName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option3Spell">${this.spellEng}</p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option3Radio" checked>
                    </div>                                
                </div>`;
    }
}

class ItemCompLang {
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
                </div>
                <div class="item-option" id="item${this.idWord}Comp${this.idLang}Option1">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option1Word">${this.langName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option1Spell" style="display: none;"></p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option1Radio" checked>
                    </div>                                    
                </div>
                <div class="item-option" id="item${this.idWord}Comp${this.idLang}Option2">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option2Word">${this.langName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option2Spell" style="display: none;"></p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option2Radio">
                    </div>                                
                </div>
                <div class="item-option" id="item${this.idWord}Comp${this.idLang}Option3">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option3Word">${this.langName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option3Spell" style="display: none;"></p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option3Radio">
                    </div>                                
                </div>
                <div class="item-option" id="item${this.idWord}Comp${this.idLang}Option4">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option4Word">${this.langName}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option4Spell" style="display: none;"></p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option4Radio">
                    </div>                                
                </div>`;
    }
}

class ItemCompMix {
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
                </div>
                <div class="item-option" id="item${this.idWord}Comp${this.idLang}Option1">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option1Word">${this.spellEng}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option1Spell" style="display: none;"></p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option1Radio">
                    </div>
                                    
                </div>
                <div class="item-option" id="item${this.idWord}Comp${this.idLang}Option2">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option2Word">${this.spellEng}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option2Spell" style="display: none;"></p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option2Radio" checked>
                    </div>                                
                </div>
                <div class="item-option" id="item${this.idWord}Comp${this.idLang}Option3">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option3Word">${this.spellEng}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option3Spell" style="display: none;"></p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option3Radio">
                    </div>                                
                </div>
                <div class="item-option" id="item${this.idWord}Comp${this.idLang}Option4">
                    <div class="option-word-block">
                        <p class="option-word" id="item${this.idWord}Comp${this.idLang}Option4Word">${this.spellEng}</p>
                        <p class="option-spell" id="item${this.idWord}Comp${this.idLang}Option4Spell" style="display: none;"></p>
                    </div>
                    <div class="option-radio-block">
                        <input class="option-radio" name="item${this.idWord}Comp${this.idLang}" type="radio" id="item${this.idWord}Comp${this.idLang}Option4Radio">
                    </div>                                
                </div>`;
    }
}

class CardBase {
    constructor() {
        this.ctaskRows = {}; 
        this.itemBase = new ItemBase();
    }
    fetchCardBase() {
        this.ctaskRows = taskRows[0][0];
        console.log(this.ctaskRows);
    }
    render() {
        let itemBaseHtml = '';
        //const optionBaseHtml = '';
        let itemBase = new ItemBase(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        ); 

        console.log(itemBase.wordName);
        this.ctaskRows = itemBase;       
        
        itemBaseHtml = itemBase.render();
        document.querySelector('[name="itemCardBase"]').innerHTML = itemBaseHtml;
    }
}

class CardPlain {
    constructor() {
        this.ctaskRows = {}; 
        this.itemCompPlain = new ItemCompPlain();
    }
    fetchCardPlain() {
        this.ctaskRows = taskRows[0][1];
        console.log(this.ctaskRows);
    }
    render() {
        let itemCompPlainHtml = '';
        //const optionBaseHtml = '';
        let itemCompPlain = new ItemCompPlain(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        ); 

        console.log(itemCompPlain.wordName);
        this.ctaskRows = itemCompPlain;       
        
        itemCompPlainHtml = itemCompPlain.render();
        document.querySelector('[name="itemCardComp1Plain"]').innerHTML = itemCompPlainHtml;
    }
}

class CardChoice {
    constructor() {
        this.ctaskRows = {}; 
        this.itemCompChoice = new ItemCompChoice();
    }
    fetchCardChoice() {
        this.ctaskRows = taskRows[0][2];
        console.log(this.ctaskRows);
    }
    render() {
        let itemCompChoiceHtml = '';
        //const optionBaseHtml = '';
        let itemCompChoice = new ItemCompChoice(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        ); 

        console.log(itemCompChoice.wordName);
        this.ctaskRows = itemCompChoice;       
        
        itemCompChoiceHtml = itemCompChoice.render();
        document.querySelector('[name="itemCardComp2Choice"]').innerHTML = itemCompChoiceHtml;
    }
}

class CardLang {
    constructor() {
        this.ctaskRows = {}; 
        this.itemCompLang = new ItemCompLang();
    }
    fetchCardLang() {
        this.ctaskRows = taskRows[0][3];
        console.log(this.ctaskRows);
    }
    render() {
        let itemCompLangHtml = '';
        //const optionBaseHtml = '';
        let itemCompLang = new ItemCompLang(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        ); 

        console.log(itemCompLang.wordName);
        this.ctaskRows = itemCompLang;       
        
        itemCompLangHtml = itemCompLang.render();
        document.querySelector('[name="itemCardComp3Lang"]').innerHTML = itemCompLangHtml;
    }
}

class CardMix {
    constructor() {
        this.ctaskRows = {}; 
        this.itemCompMix = new ItemCompMix();
    }
    fetchCardMix() {
        this.ctaskRows = taskRows[0][4];
        console.log(this.ctaskRows);
    }
    render() {
        let itemCompMixHtml = '';
        //const optionBaseHtml = '';
        let itemCompMix = new ItemCompMix(
            this.ctaskRows.id,
            this.ctaskRows.idTheme,
            this.ctaskRows.idWord,
            this.ctaskRows.idLang,
            this.ctaskRows.langName,
            this.ctaskRows.wordName,
            this.ctaskRows.spellBase,
            this.ctaskRows.spellEng,
        ); 

        console.log(itemCompMix.wordName);
        this.ctaskRows = itemCompMix;       
        
        itemCompMixHtml = itemCompMix.render();
        document.querySelector('[name="itemCardComp4Mix"]').innerHTML = itemCompMixHtml;
    }
}

class RowPlain {
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
        return `<div class="task-mode" name="row${this.idWord}" id="item${this.idWord}" style="height: 30%;">
                            <div class="item-card base" id="item${this.idWord}Base" style="height: 100%;">
                                <div class="item-heading" style="height: 50%;">
                                    <p class="heading-text" id="item${this.idWord}HeadingBase">Russian</p>
                                </div>
                                <div class="item-option base" style="height: 50%;">
                                    <p class="item-word base" id="item${this.idWord}WordBase">Четверг</p>
                                </div>
                            </div>
                            <div class="item-card" id="item${this.idWord}Comp1" style="height: 100%;">
                                <div class="item-heading" style="height: 50%;">
                                    <p class="heading-text" id="item${this.idWord}Comp1Heading">Armenian</p>
                                </div>
                                <div class="item-option" id="item${this.idWord}Comp1Option1" style="height: 50%;">
                                    <div class="option-word-block">
                                        <p class="option-word" id="item${this.idWord}Comp1Option1Word">Հինգշաբթի</p>
                                        <p class="option-spell" id="item${this.idWord}Comp1Option1Spell">hингшабtи</p>
                                    </div>                                   
                                </div>
                            </div>
                            <div class="item-card" id="item${this.idWord}Comp2" style="height: 100%;">
                                <div class="item-heading" style="height: 50%;">
                                    <p class="heading-text" id="item${this.idWord}Comp2Heading">Greek</p>
                                </div>
                                <div class="item-option" id="item${this.idWord}Comp2Option1" style="height: 50%;">
                                    <div class="option-word-block">
                                        <p class="option-word" id="item${this.idWord}Comp2Option1Word">Πέμπτη</p>
                                        <p class="option-spell" id="item${this.idWord}Comp2Option1Spell">пе́мпти</p>
                                    </div>                                  
                                </div>
                            </div>
                            <div class="item-card" id="item1Comp3" style="height: 100%;">
                                <div class="item-heading" style="height: 50%;">
                                    <p class="heading-text" id="item${this.idWord}Comp3Heading">Finnish</p>
                                </div>
                                <div class="item-option" id="item${this.idWord}Comp3Option1" style="height: 50%;">
                                    <div class="option-word-block">
                                        <p class="option-word" id="item${this.idWord}Comp3Option1Word">Torstai</p>
                                        <p class="option-spell" id="item${this.idWord}Comp3Option1Spell">торстай</p>
                                    </div>                                  
                                </div>
                            </div>
                            <div class="item-card" id="item${this.idWord}Comp4" style="height: 100%;">
                                <div class="item-heading" style="height: 50%;">
                                    <p class="heading-text" id="item${this.idWord}Comp4Heading">Latvian</p>
                                </div>
                                <div class="item-option" id="item${this.idWord}Comp4Option1" style="height: 50%;">
                                    <div class="option-word-block">
                                        <p class="option-word" id="item${this.idWord}Comp4Option1Word">Ceturtdiena</p>
                                        <p class="option-spell" id="item${this.idWord}Comp4Option1Spell">цетурдиена</p>
                                    </div>                                    
                                </div>
                            </div>
                </div>`;
    }
}

class RowChoice {
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
        return ``;
    }
}

class RowLang {
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
        return ``;
    }
}

class RowMix {
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
        return ``;
    }
}


///////////-----------------
