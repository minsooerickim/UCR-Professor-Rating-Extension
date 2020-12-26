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
            //results = document.getElementsByClassName('NameTitle__Name-dowf0z-0');
            //console.log(results);
            var res = document.createElement('div');
            res.innerHTML = xhr.responseText;
            var rating = res.querySelector(".RatingValue__Numerator-qw8sqy-2.liyUjw").innerHTML;
            console.log(rating);

            $(function(){
                $('#search-go').on('click', function(){
                    window.setTimeout(function(){
                        //if(!profName.includes('The Staff')) {
                        //    $('a.email').append(rating + ')');
                        //}
                    }, 2000);
                });
            });
            
        }
        if (xhr.status == 404) {
            console.log('Resource not found');
        }
    }
};

xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2349036', true);
xhr.send();

//loading up local html to get prof names
var rawFile = new XMLHttpRequest();
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var html = rawFile.response;
                console.log(html.querySelector('.name'));
            }
        }
    }
rawFile.open("GET", 'listOfProfessors.htm', false);
rawFile.send();

    
//chrome.runtime.sendNativeMessage('com.professor.ratings', { text: "Hello"},
//function(response) {
//    console.log("received " + response);
//});
