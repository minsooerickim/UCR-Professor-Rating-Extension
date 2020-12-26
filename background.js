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
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            //console.log(xhr.responseText);
            //console.log(document.getElementsByClassName('RatingValue__Numerator-qw8sqy-2.liyUjw'));
            console.log("succesfully connected to ratemyprofessors.com");
        }
        if (xhr.status == 404) {
            console.log('Resource not found');
        }
    }
};

xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2349036', true);
xhr.send();

chrome.runtime.sendNativeMessage('com.professor.ratings', { text: "Hello"},
function(response) {
    console.log("received " + response);
});
