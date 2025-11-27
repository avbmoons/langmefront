let timeSite = document.getElementById('currentTime');

setInterval(function () {
    let currentTime = new Date();
    timeSite.innerHTML = currentTime.toLocaleString({dateStyle: 'medium', timeStyle: 'short'});
    //timeSite.innerHTML = currentTime.toLocaleString({hour:'2-digit', minute: '2-digit'});
}) ;

//console.log(timeSite);