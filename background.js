console.log("background script baby!");

//chrome.browserAction.onClicked.addListener(buttonClicked);

//function buttonClicked(tab){
//    let msg = {
//        txt: "execute"
//    }
//    chrome.tabs.sendMessage(tab.id, msg);
//}


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 1) {
        if (xhr.status == 200) {
            console.log(xhr.responseText);
        }
        if (xhr.status == 404) {
            console.log('Resource not found');
        }
    }
};

xhr.open('GET', 'https://0.0.0.0:8080/www.ratemyprofessors.com/ShowRatings.jsp?tid=2349036', true);
xhr.send();