class LangsItem {
    constructor (
        id,
        langName,
        langNative,
        langAlias,
        status,
        position,
    ) {
        this.id = id;
        this.langName = langName;
        this.langNative = langNative;
        this.langAlias = langAlias;
        this.status = status;
        this.position = position;
    }
}

class ThemesItem {
    constructor (
        id,
        themeName,
        status,
    ) {
        this.id = id;
        this.themeName = themeName;
        this.status = status;
    }
}

class WordsItem {
    constructor (
        id,
        idTheme,
        idStatus,
        wordName,
    ) {
        this.id = id;
        this.idTheme = idTheme;
        this.idStatus = idStatus;
        this.wordName = wordName;
    }
}

class LangsList {
    constructor() {
        this.arrLangs = [];
    }
    fetchLangsList(){
        this.arrLangs = langs;
    }
    LangsList() {
        this.arrLangs.forEach(arrLangs => {
            const langsItem = new LangsItem(
                arrLangs.id,
                arrLangs.langName,
                arrLangs.langNative,
                arrLangs.langAlias,
                arrLangs.status,
                arrLangs.position,
            );
            arrLangs += langsItem;
        });
        //console.log(this.arrLangs);
        return this.arrLangs;        
    }
}

class ThemesList {
    constructor() {
        this.arrThemes = [];
    }
    fetchThemesList() {
        this.arrThemes = themes;
    }
    ThemesList() {
        this.arrThemes.forEach(arrThemes => {
            const themesItem = new ThemesItem(
                arrThemes.id,
                arrThemes.themeName,
                arrThemes.status,
            );
            arrThemes += themesItem;
        });
        //console.log(this.arrThemes);
        return this.arrThemes;
    }
}

class WordsList {
    constructor() {
        this.arrWords = [];
    }
    fetchWordsList() {
        this.arrWords = words;
    }
    WordsList() {
        this.arrWords.forEach(arrWords => {
            const wordsItem = new WordsItem(
                arrWords.id,
                arrWords.idTheme,
                arrWords.idStatus,
                arrWords.wordName,
            );
            arrWords += wordsItem;
        });
        //console.log(this.arrWords);
        return this.arrWords;
    }
}

//Define selected PrimLang
let strSelectedPrimLang = localStorage.getItem('primLang');
console.log(strSelectedPrimLang);

//Define selected CompLangs
let strSelectedCompLangs = localStorage.getItem('compLangs');
console.log(strSelectedCompLangs);
let arrSelectedCompLangs = strSelectedCompLangs.split(',');
console.log(arrSelectedCompLangs);

//Define selected Themes
let strSelectedThemes = localStorage.getItem('themesLangs');
console.log(strSelectedThemes);
let arrSelectedThemes = strSelectedThemes.split(',');
console.log(arrSelectedThemes);

//Define lengths for selected CompLangs and Themes
let lengthCompLangs = arrSelectedCompLangs.length;
let lengthThemes = arrSelectedThemes.length;
console.log("CompLangs - " + lengthCompLangs + "   " + "Themes - " + lengthThemes);

const listLangs = new LangsList();
listLangs.fetchLangsList();
listLangs.LangsList();

const listThemes = new ThemesList();
listThemes.fetchThemesList();
listThemes.ThemesList();

const listWords = new WordsList();
listWords.fetchWordsList();
listWords.WordsList();

//console.log(listLangs);
console.log(listLangs.arrLangs[4]);
console.log(listThemes.arrThemes[19]);
console.log(listWords.arrWords[28]);

let arrLangsLength = listLangs.arrLangs.length;
console.log(arrLangsLength);

//Define words array for mode and selected settings

let arrPrimWords = [];

// console.log(listLangs.arrLangs);
// console.log(strSelectedPrimLang);
// console.log(listLangs.arrLangs[1].langNative);
let selectedPrimLang;

for (let i=0; i<arrLangsLength; i++) {
    //let selectedPrimLang;
    if (strSelectedPrimLang.includes(listLangs.arrLangs[i].langName)) {
        selectedPrimLang = listLangs.arrLangs[i];
        //console.log(selectedPrimLang.langName);
        break;
    }
    //return selectedPrimLang;    
}

console.log(selectedPrimLang.langName);

