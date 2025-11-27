//// Modal open-close

const setButton = document.getElementById("setButton");
const getButton = document.getElementById("getButton");

const modalSettings = document.getElementById('settings');  //[0];

const comboPrimLangsList = document.getElementById("primLangChoice");
const comboPrimLangChoiceList = document.getElementById("primLangChoiceList");
// const comboPrimLangRus = document.getElementById("primRus");
// console.log(comboPrimLangRus);
const comboCompLangsList = document.getElementById("compLangChoice");
const comboCompLangChoiceList = document.getElementById("compLangChoiceList");

const comboThemesList = document.getElementById("themeChoice");
const comboThemeChoiceList = document.getElementById("themeChoiceList");

const btnOpenPrimLang = document.getElementById("btnOpenPrimLang");
const btnOpenCompLang = document.getElementById("btnOpenCompLang");
const btnOpenThemes = document.getElementById("btnOpenThemes");

//const modeButtons = document.getElementsByClassName("mode-button");  //mode buttons array
const modeButtons = document.querySelectorAll('input[name="modeButton"]');

const comboAppLangChoice = document.getElementById("appLangChoice");

//console.log(setModeCheck);

console.log(modalSettings);

const openModalSettings = () => {
    modalSettings.style.display = "flex";
    const modeButtonPlain = document.getElementById("setModePlain");
    modeButtonPlain.checked = true;
};

const closeModalSettings = () => {
    modalSettings.style.display = "none";
}

////Combo-list open-close

//const comboPrimLangsList = document.getElementById("primLangChoice");
const openPrimLangsChoiceList = () => {
    comboPrimLangsList.style.display = "flex";
    comboPrimLangChoiceList.style.display = "flex"; //
    const comboPrimLangRus = document.getElementById("primRus");    //
    //console.log(comboPrimLangRus);  //
    comboPrimLangRus.checked = true;  //
    btnOpenCompLang.disabled = true;
    btnOpenThemes.disabled = true;
}
const closePrimLangsChoiceList = () => {
    comboPrimLangsList.style.display = "none";
    comboPrimLangChoiceList.style.display = "none"; //
    btnOpenCompLang.disabled = false;
    btnOpenThemes.disabled = false;

    choosedItemRadio("primLang", "resultPrim");

    // const arrItems = document.getElementsByName("primLang");
    // for (const item of arrItems) {
    //     if (item.checked == true) {
    //         document.getElementById("primLang").value = item.value;
    //         break;
    //     }
    // }

    // arrItems.forEach(item => {
    //     if (item.checked = true) {
    //         document.getElementById("primLang").value = item.value;            
    //     }
    // });
}

//const comboCompLangsList = document.getElementById("compLangChoice");
const openCompLangsChoiceList = () => {
    comboCompLangsList.style.display = "flex";
    comboCompLangChoiceList.style.display = "flex"; //
    const comboCompLangArm = document.getElementById("compArm");    //
    const comboCompLangGre = document.getElementById("compGre");    //
    const comboCompLangFin = document.getElementById("compFin");    //
    const comboCompLangLav = document.getElementById("compLav");    //
    comboCompLangArm.checked = true;
    comboCompLangGre.checked = true;
    comboCompLangFin.checked = true;
    comboCompLangLav.checked = true;
    btnOpenPrimLang.disabled = true;
    btnOpenThemes.disabled = true;
}
const closeCompLangsChoiceList = () => {
    comboCompLangsList.style.display = "none";
    comboCompLangChoiceList.style.display = "none"; //
    btnOpenPrimLang.disabled = false;
    btnOpenThemes.disabled = false;

    choosedItemCheck("compLang", "resultComp");
}

//const comboThemesList = document.getElementById("themeChoice");

const openThemesChoiceList = () => {
    comboThemesList.style.display = "flex";
    comboThemeChoiceList.style.display = "flex"; //
    const comboTheme4 = document.getElementById("theme4");    //
    const comboTheme5 = document.getElementById("theme5");    //
    const comboTheme6 = document.getElementById("theme6");    //
    const comboTheme7 = document.getElementById("theme7");    //
    comboTheme4.checked = true;
    comboTheme5.checked = true;
    comboTheme6.checked = true;
    comboTheme7.checked = true;
    btnOpenPrimLang.disabled = true;
    btnOpenCompLang.disabled = true;
}
const closeThemesChoiceList = () => {
    comboThemesList.style.display = "none";
    comboThemeChoiceList.style.display = "none"; //
    btnOpenPrimLang.disabled = false;
    btnOpenCompLang.disabled = false;

    choosedItemCheck("themeList", "resultThemes");
}

const openAppLangChoiceList = () => {
    comboAppLangChoice.style.display = "flex";
}
const closeAppLangChoiceList = () => {
    comboAppLangChoice.style.display = "none";
}

function choosedItemRadio(radioName, resultName) {
    const arrItems = document.getElementsByName(radioName);
    for (const item of arrItems) {
        if (item.checked == true) {
            document.getElementById(radioName).value = item.value;
            document.getElementById(resultName).value += item.value + '\n';
            break;
        }
    }
}

function choosedItemCheck(checkName, resultName) {
    const arrItems = document.getElementsByName(checkName);
    //console.log(arrItems);
    const arrItemsChecked = [];
    for (const item of arrItems) {
        if (item.checked == true) {
            //console.log(document.getElementsByName(checkName));
            arrItemsChecked.push(item.value);
        }
        //return arrItemsChecked;
    }
    console.log(arrItemsChecked);
    document.getElementById(checkName).value = "";
    document.getElementById(resultName).value = "";
    arrItemsChecked.forEach(itemChecked => {
        document.getElementById(checkName).value += itemChecked + ',';
    });
    document.getElementById(resultName).value += arrItemsChecked.join(", ") + '\n';   // to "#userChoice"
}

function choosedModeItemRadio(radioName, resultName) {
    const arrItems = document.getElementsByName(radioName);
    for (const item of arrItems) {
        if (item.checked == true) {
            //document.getElementById(radioName).value = item.value;
            document.getElementById(resultName).value += item.value + '\n';
            break;
        }
    }
}

// const arrItems = document.getElementsByName("primLang");
//     for (const item of arrItems) {
//         if (item.checked == true) {
//             document.getElementById("primLang").value = item.value;
//             break;
//         }
//     }

// submit settings button code
//console.log(modeButtons);
function submitTaskSettings() { 
    window.location.href='../pages/home.html';
    // for (let i = 0; i < 4; i++) {  
    // if (modeButtons[i].checked) { 
    //     setButton.style.borderWidth = "2px";
    //     setButton.style.borderStyle = "solid";
    //     setButton.style.borderColor = 'red';    
    //     window.location.href='../pages/home.html';
        
    // } else {        
    //     window.location.href='../pages/home.html';
    //     }
    
    // }
}

// for (let i = 0; i < 4; i++) {
//     if (modeButtons[i].checked = "false")
//     {console.log(modeButtons[i]);} else {console.log("checked")};

// }
