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

//Define selected Mode
let strSelectedMode = localStorage.getItem('modeChoice');
console.log("Users mode: " + strSelectedMode);

//Define selected PrimLang
let strSelectedPrimLang = localStorage.getItem('primLang');
console.log("Users Prim lang: " + strSelectedPrimLang);

//Define selected CompLangs
let strSelectedCompLangs = localStorage.getItem('compLangs');
console.log("Users Comp langs: " + strSelectedCompLangs);
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

console.log(listLangs);
console.log(listThemes);
console.log(listWords);

let arrLangsLength = listLangs.arrLangs.length;
let arrThemesLength = listThemes.arrThemes.length;
let arrWordsLength = listWords.arrWords.length;

let arrSelectedCompLangsLength = arrSelectedCompLangs.length;
let arrSelectedThemesLength = arrSelectedThemes.length;

//Define words array for mode and selected settings

let selectedMode = strSelectedMode;
console.log("Selected mode: " + selectedMode);

let arrPrimWords = [];

let selectedPrimLang =[];

for (let i=0; i<arrLangsLength; i++) {
    if (strSelectedPrimLang.includes(listLangs.arrLangs[i].langName)) {
        listLangs.arrLangs[i].isPrim = 1;
        selectedPrimLang.push(listLangs.arrLangs[i]);
        break;
    } 
}

console.log("Selected Prim lang:");
console.log(selectedPrimLang);

//Define selected comp langs array
let selectedCompLangs = [];

for (let i=0; i<arrSelectedCompLangsLength; i++) {
    for (let j=0; j<arrLangsLength; j++) {
        if (listLangs.arrLangs[j].langName == arrSelectedCompLangs[i].trim()) {
            listLangs.arrLangs[j].isPrim = 0;
            selectedCompLangs.push(listLangs.arrLangs[j]);
        }
    }
}

console.log("Selected Comp langs:");
console.log(selectedCompLangs);

let allSelectedLangs = selectedPrimLang.concat(selectedCompLangs);

console.log("All selected langs:");
console.log(allSelectedLangs);


//Define selected themes array

let selectedThemes = [];

for (let i=0; i<arrSelectedThemesLength; i++) {
    for (let j=0; j<arrThemesLength; j++) {
        if (listThemes.arrThemes[j].themeName == arrSelectedThemes[i].trim()) {
            selectedThemes.push(listThemes.arrThemes[j]);
        }
    }
}

console.log("Selected themes:");
console.log(selectedThemes);

//Define selected words array by selected themes

let selectedWords = [];

for (let i=0; i<arrSelectedThemesLength; i++) {
    for (let j=0; j<arrWordsLength; j++) {
        if (listWords.arrWords[j].idTheme == selectedThemes[i].id) {
            selectedWords.push(listWords.arrWords[j]);
        }
    }
}

console.log("Selected words:")
console.log(selectedWords);

//Define array with name = "_pattern"+"langAlias"

let patternBaseName = "_pattern" + selectedPrimLang[0].langAlias;

let patternsNames = [];

for (let i=0; i<listLangs.arrLangs.length; i++) {
    patternsNames[i] = "_pattern" + listLangs.arrLangs[i].langAlias;
}

//console.log(listLangs.arrLangs[3]);
console.log("Patterns names: ");
console.log(patternsNames);

// const myArrays = {
//     cars: ["asdf", "ghjk", "lkjh"],
//     bikes: ["hgfds", "vcxza", "nbvfd"]
// }

// const arrayName = "cars";

// console.log(myArrays[arrayName]);

// const objPatterns = {
//     _patternRus: _patternRus,
//     _patternEng: _patternEng,
//     _patternArm: _patternArm,
//     _patternGre: _patternGre,
//     _patternFin: _patternFin,
//     _patternLav: _patternLav,
// }

// const objPatternBaseName = patternBaseName;
// console.log("Base pattern: " + patternBaseName);

let objPatternsNames = [];

patternsNames.forEach(patternName => {
        objPatternsNames.push(patternName);
    });

//console.log(objPatternsNames);

const objPatterns = {
    _patternRus: _patternRus,
    _patternEng: _patternEng,
    _patternArm: _patternArm,
    _patternGre: _patternGre,
    _patternFin: _patternFin,
    _patternLav: _patternLav
}

//console.log(arrPatterns[arrPatternName]);
//let basePattern = objPatterns[objPatternBaseName];

let basePatterns = [];   // = objPatterns[objPatternsNames[2]];
//let basePatternItem;

for (let i=0; i<objPatternsNames.length; i++) {
    //basePatternItem[i] = objPatterns[objPatternsNames[i]];
    basePatterns[i] = objPatterns[objPatternsNames[i]];
}

console.log("Base patterns: ");
console.log(basePatterns);
//console.log(objPatterns[objPatternsNames[3]]);

// console.log("Base pattern: ");
// console.log(basePattern);
// //let basePatternLength = basePattern.length;

//Define base selected words array

let baseSelectedWords = [];

for (let i=0; i<basePatterns.length; i++) {
    for (let j=0; j<arrSelectedThemesLength; j++) {
        if (basePatterns[i][j].idTheme == selectedThemes[j].id) {
            baseSelectedWords.push(basePatterns[i][j]);
        }
    }
}

console.log("Base selected words:")
console.log(baseSelectedWords);

let arrPatterns = Object.entries(objPatterns);

console.log("All patterns: ");
console.log(arrPatterns);
// console.log(arrPatterns[1][0]);
// console.log(arrPatterns[1][1][1].idWord);

//Define pattern for Prim lang

let primPattern = [];

for (let i=0; i<selectedPrimLang.length; i++) {
    let alias = selectedPrimLang[i].langAlias;
    for (let j=0; j<arrPatterns.length; j++) {
        if (arrPatterns[j][0] == "_pattern" + alias) {
            primPattern.push(arrPatterns[j]);
        }
    }
}

console.log("Prim pattern:");
console.log(primPattern);
// console.log(primPattern[0]);
// console.log(primPattern[0][1][5].idTheme);

//Define patterns for Comp langs

let compPatterns = [];

for (let i=0; i<selectedCompLangs.length; i++) {
    let alias = selectedCompLangs[i].langAlias;
    for (let j=0; j<arrPatterns.length; j++) {
        if (arrPatterns[j][0] == "_pattern" + alias) {
            compPatterns.push(arrPatterns[j]);
        }
    }
}

console.log("Comp patterns:");
console.log(compPatterns);

//Define Prim pattern filtered by selected themes

let primPatternSelectedThemes = [];
//let compPatternSelectedThemes = [];

let patternWordsLength;
//console.log(patternWordsLength);

primPatternFilterBySelectedThemes();

console.log("Prim pattern filtered by selected themes: ");
console.log(primPattern);

compPatternsFilterBySelectedThemes();

console.log("Comp patterns filtered by selected themes: ");
console.log(compPatterns);

function primPatternFilterBySelectedThemes() {
    let primPatternSelectedThemes = [];

    let patternWordsLength;
    //console.log(patternWordsLength);

    for (let i=0; i<primPattern.length; i++) {
        //console.log(primPattern.length);
        let patternLength = primPattern[i].length;
        //console.log(patternLength);
        for (let j=0; j<patternLength; j++){
            //console.log(primPattern[i][j]);
            if (Array.isArray(primPattern[i][j])) {
                patternWordsLength = primPattern[i][j].length;
                //console.log(patternWordsLength);
                for (let k=0; k<selectedThemes.length; k++) {
                    //console.log(selectedThemes[k].themeName);
                    for (let m=0; m<patternWordsLength; m++) {
                        //console.log(primPattern[i][j][m]);
                        if (primPattern[i][j][m].idTheme == selectedThemes[k].id) {
                            //console.log(primPattern[i][j][m]);
                            primPatternSelectedThemes.push(primPattern[i][j][m]);
                        }
                    }
                }
                //console.log(primPatternSelectedThemes);
                primPattern[i][j] = primPatternSelectedThemes;
            } else { continue }
        }
    }
    return primPattern;
}

function compPatternsFilterBySelectedThemes() {
    let patternWordsLength;
    for (let i=0; i<compPatterns.length; i++) {
        //console.log(compPatterns.length);
        //console.log(i);
        //console.log(compPatterns[i]);
        //console.log(compPatterns[i].length);
        let patternLength = compPatterns[i].length;
        //console.log(patternLength);
        for (let j=0; j<patternLength; j++) {
            //console.log(compPatterns[i][j]);
            patternWordsLength = compPatterns[i][j].length;
            //console.log(patternWordsLength);
            if (Array.isArray(compPatterns[i][j])) {
                //console.log(compPatterns[i][j]);
                let compPatternSelectedThemes = [];////
                for (let k=0; k<selectedThemes.length; k++) {
                    //console.log(selectedThemes[k].themeName);
                    for (let m=0; m<patternWordsLength; m++) {
                        //console.log(compPatterns[i][j][m]);                    
                        if (compPatterns[i][j][m].idTheme == selectedThemes[k].id) {
                            //console.log(compPatterns[i][j][m]);
                            compPatternSelectedThemes.push(compPatterns[i][j][m]);
                        }
                    }
                }
                //console.log(compPatternSelectedThemes);
                compPatterns[i][j] = compPatternSelectedThemes;
            } else { continue }
        }
    }
    return compPatterns;
}


// for (let i=0; i<compPatterns.length; i++) {
//     console.log(compPatterns.length);
//     console.log(i);
//     console.log(compPatterns[i]);
//     console.log(compPatterns[i].length);
//     let patternLength = compPatterns[i].length;
//     console.log(patternLength);
//     for (let j=0; j<patternLength; j++) {
//         console.log(compPatterns[i][j]);
//         patternWordsLength = compPatterns[i][j].length;
//         console.log(patternWordsLength);
//         if (Array.isArray(compPatterns[i][j])) {
//             console.log(compPatterns[i][j]);
//             let compPatternSelectedThemes = [];////
//             for (let k=0; k<selectedThemes.length; k++) {
//                 console.log(selectedThemes[k].themeName);
//                 for (let m=0; m<patternWordsLength; m++) {
//                     //console.log(compPatterns[i][j][m]);                    
//                     if (compPatterns[i][j][m].idTheme == selectedThemes[k].id) {
//                         //console.log(compPatterns[i][j][m]);
//                         compPatternSelectedThemes.push(compPatterns[i][j][m]);
//                     }
//                 }
//             }
//             console.log(compPatternSelectedThemes);
//             compPatterns[i][j] = compPatternSelectedThemes;
//         } else { continue }
//     }
// }

// console.log("Comp patterns filtered by selected themes: ");
// console.log(compPatterns);

// for (let n=0; n<compPatterns.length; n++) {
//     console.log(compPatterns.length);
//     for (let i=0; i<compPatterns[n].length; i++) {
//         console.log(compPatterns[n].length);
//         console.log(compPatterns[n]);
//     }
// }

//Define Comp patterns filtered by selected themes

// // //Define words array from comp patterns

// // let compPatternWords = [[]];
// let compPatternsWords = [];
// let compWords = [];
// let wordsLength;

// for (let i=0; i<compPatterns.length; i++) {
//     compPatternsWords[i] = compPatterns[i][1];
//     wordsLength = compPatterns[i][1].length;
// }

// console.log("Comp patterns words:");
// console.log(compPatternsWords);
// console.log("Words array length = " + wordsLength);

// for (let i=0; i<compPatterns.length; i++) {
//     for (let j=0; j<wordsLength; j++) {
//         compWords.push(compPatternsWords[i][j]);
//     }
// }

// console.log("Comp words:");
// console.log(compWords);

// let selectedCompWords = [];

// for (let i=0; i<selectedWords.length; i++) {
//     for (let j=0; j<compWords.length; j++) {
//         if (compWords[j].id == selectedWords[i].id) {
//             selectedCompWords.push(compWords[j]);
//         }
//     }
// }

// console.log("Selected comp words:");
// console.log(selectedCompWords);

// //Define rows for words base --> comps by idWords for each theme

// let wordsRows = [[]];

//  for (let i=0; i<baseSelectedWords.length; i++) {
//     wordsRows[i] = baseSelectedWords[i];
//     for (let j=0; j<selectedCompWords.length; j++) {
//         if ( selectedCompWords[j].id == baseSelectedWords[i].id) {
//             wordsRows[i][j] = selectedCompWords[j];
//         }
//     }
//  }

//  console.log("Words rows: ");
//  console.log(wordsRows);

//  console.log(wordsRows[1]);
//  //console.log(wordsRows[1][5]);
//  //console.log(wordsRows[10].wordName);
//  //console.log(wordsRows[10][43].wordName);
//  //console.log(Object.keys(wordsRows[10]).length);

// //  // test --> filter by theme = 5
// // let testTheme = [];
// // //for (let i=0; i< selectedThemes.length; i++) {
// //     // for (let j=0; j<wordsRows.length; j++) {
// //     //     if (wordsRows.idTheme == 4) {
// //     //         testTheme.push(wordsRows[j]);
// //     //     }
// //     // }
// // //}
// // testTheme = wordsRows.filter((row) => row.idTheme == 4);
// // console.log(testTheme);

// // //console.log()
// function randomSortRows(array) {
//     array.sort(() => Math.random() - 0.5)
// }

// console.log("Random sort rows for render: ");
// randomSortRows(wordsRows);
// console.log(wordsRows);

// // function randomSortCompWords(array) {
// //     array.sort(() => Math.random() - 0.5)
// // }

// let compItems = [];
// let compItemsNums = [];

// function compItemsKeys() {
//     for (let i=0; i<wordsRows.length; i++) {
//         compItems.push((Object.keys(wordsRows[i])));                       
//     }
// }

// compItemsKeys();



// // "id" && "idLang" && "idTheme" && "idWord" && "spellBase" && "spellEng" && "wordName"

// console.log(compItems);
// console.log(compItemsNums);
// //console.log(Object.keys(wordsRows[1]));
// // console.log("Random sort comp wodrs for word card render: ");
// // randomSortCompWords(wordsRows[1]);
// // console.log(wordsRows[1]);