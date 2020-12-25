console.log("background script running!!");

//chrome.browserAction.onClicked.addListener(buttonClicked);

//function buttonClicked(tab){
//    let msg = {
//        txt: "execute"
//    }
//    chrome.tabs.sendMessage(tab.id, msg);
//}

//const xhr = new XMLHttpRequest();

//xhr.onreadystatechange = function() {
//    if (xhr.readyState == 4) {
//        if (xhr.status == 200) {
//            console.log(xhr.responseText);
//        }
//        if (xhr.status == 404) {
//            console.log('Resource not found!');
//        }
//    }
//}

//xhr.open('get', 'https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2349036', true);
//xhr.send();
$(function(){
    $.ajax({
        url: 'https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2349036/api/mycall',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        type: "GET", /* or type:"GET" or type:"PUT" */
        dataType: "json",
        data: {
        },
        success: function (result) {
            console.log(result);
        },
        error: function () {
            console.log("error");
        }
    });
});