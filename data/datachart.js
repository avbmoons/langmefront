let modesCh = [];
let modesSt = [];
let modesStr = [];

let langsCh = [];
let langsSt = [];
let langsStr = [];

let patternsCh =[];

let wordsCh = [];
let wordsSt = [];
let wordsStr = [];

let wordsDraft = [];
let wordsActive = [];
let wordsBlocked = [];
let wordsClose = [];

let themesCh = [];
let themesSt = [];
let themesStr = [];

let themesDraft = [];
let themesActive = [];
let themesBlocked = [];
let themesClose = [];

let themesWords = [];
let themesWordsStr = [];

let statusCh = ['draft', 'active', 'blocked', 'close'];

let testLabels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
let testData = [12, 19, 3, 5, 2, 3];

for (let i=0; i<modes.length; i++) {
    modesCh[i] = modes[i].modeName;
    modesSt[i] = modes[i].status + 1;
    modesStr[i] = modesSt[i].toString();
}

console.log('modesCh = ' + modesCh);

for (let i=0; i<langs.length; i++) {
    langsCh[i] = langs[i].langAlias;
    langsSt[i] = langs[i].status + 1;
    langsStr[i] = langsSt[i].toString();
}

console.log('langsCh = ' + langsCh);

for (let i=0; i<words.length; i++) {
    wordsCh[i] = words[i].wordName;
    wordsSt[i] = words[i].idStatus;

    switch (wordsSt[i])  {
        case 0:
            wordsDraft.push(1);
            break;
        case 1:
            wordsActive.push(1);
            break;
        case 2:
            wordsBlocked.push(1);
            break;
        case 3:
            wordsClose.push(1);
            break;
    }
}

let sumWordsDraft = 0; 

wordsDraft.forEach(item => {
    sumWordsDraft += item ;
});

let sumWordsActive = 0; 

wordsActive.forEach(item => {
    sumWordsActive += item ;
});

let sumWordsBlocked = 0; 

wordsBlocked.forEach(item => {
    sumWordsBlocked += item ;
});

let sumWordsClose = 0; 

wordsClose.forEach(item => {
    sumWordsClose += item ;
});

console.log('wordsSt = ' + wordsSt);
console.log('wordsBlocked = ' + wordsBlocked);
console.log("sumWordsDraft = " + sumWordsDraft);
console.log("sumWordsActive = " + sumWordsActive);
console.log("sumWordsBlocked = " + sumWordsBlocked);
console.log("sumWordsClose = " + sumWordsClose);

for (let i=0; i<themes.length; i++) {

    let wordsNum = 0;

    for (let j=0; j<words.length; j++) {
        if (words[j].idTheme === themes[i].id) {
            wordsNum++;            
        } 
    }
    themesWords[i] = wordsNum;
}

console.log('themesWords = ' + themesWords);
console.log('themes.length = ' + themes.length + '___' + 'themesWords.length = ' + themesWords.length);

for (let i=0; i<themes.length; i++) {
    themesCh[i] = themes[i].themeName;
    themesSt[i] = themes[i].status + 1;
    themesStr[i] = themesSt[i].toString();
}

for (let i=0; i<themesWords.length; i++) {
    themesWordsStr[i] = themesWords[i].toString();
}

for (let i=0; i<themes.length; i++) {
    themesCh[i] = themes[i].themeName;
    themesSt[i] = themes[i].status;

    switch (themesSt[i])  {
        case 0:
            themesDraft.push(1);
            break;
        case 1:
            themesActive.push(1);
            break;
        case 2:
            themesBlocked.push(1);
            break;
        case 3:
            themesClose.push(1);
            break;
    }
}

let sumThemesDraft = 0; 

themesDraft.forEach(item => {
    sumThemesDraft += item ;
});

let sumThemesActive = 0; 

themesActive.forEach(item => {
    sumThemesActive += item ;
});

let sumThemesBlocked = 0; 

themesBlocked.forEach(item => {
    sumThemesBlocked += item ;
});

let sumThemesClose = 0; 

themesClose.forEach(item => {
    sumThemesClose += item ;
});

console.log('themesSt = ' + themesSt);
console.log('themesBlocked = ' + themesBlocked);
console.log("sumThemesDraft = " + sumThemesDraft);
console.log("sumThemesActive = " + sumThemesActive);
console.log("sumThemesBlocked = " + sumThemesBlocked);
console.log("sumThemesClose = " + sumThemesClose);

