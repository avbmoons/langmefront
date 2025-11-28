// const viewportWidth = window.innerWidth + "px";
//console.log("ViewportWidth = ", viewportWidth);

// const root = document.documentElement;
// root.style.setProperty('--viewport-width', viewportWidth);

// const pageUrl = window.location.pathname;
// const pageName = pageUrl.substring(pageUrl.lastIndexOf('/')+1);
// console.log(pageName);

function getTask() {
    let modeChoice = localStorage.getItem('modeChoice').trim();
    //let pageName;
    switch(modeChoice) {
        case 'Plain':
            window.location.href = "../pages/taskPlain.html";
            break;
        case 'Choice':
            window.location.href = "../pages/taskChoice.html";
            break;
        case 'Lang':
            window.location.href = "../pages/taskLang.html";
            break;
        case 'Mix':
            window.location.href = "../pages/taskMix.html";
            break;
    }
}

// function getTaskPage() {
//     let modeChoice = resultMode.value.trim();
//     console.log(modeChoice);
    
//     if (modeChoice == "Plain") {
//         window.location.href = "../pages/taskPlain.html";
//     } else if (modeChoice == "Choice") {
//         window.location.href = "../pages/taskChoice.html";
//     }  else if (modeChoice == "Lang")      {
//         window.location.href = "../pages/taskLang.html";
//     } else if (modeChoice == "Mix") {
//         window.location.href = "../pages/taskMix.html";
//     } else {
//         window.location.href = "../pages/home.html";
//     }          
        
// }

function getTaskPage() {
    let modeChoice = resultMode.value.trim();
    console.log(modeChoice);
    let pageName = window.location.pathname.substring(pageUrl.lastIndexOf('/')+1);
    if (pageName == 'home.html') {
        window.location.href = "../pages/home.html";
    } else if (modeChoice == "Plain") {
        window.location.href = "../pages/taskPlain.html";
    } else if (modeChoice == "Choice") {
        window.location.href = "../pages/taskChoice.html";
    }  else if (modeChoice == "Lang")      {
        window.location.href = "../pages/taskLang.html";
    } else {
        window.location.href = "../pages/taskMix.html";
    }
}
