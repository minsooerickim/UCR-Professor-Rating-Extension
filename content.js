console.log("Testing!!!!");

var body = document.getElementsByClassName('aurora-theme')[0],
    newdiv = document.createElement('p');   //create a div
    newdiv.id = 'newid';                      //add an id
    newdiv.textContent = 'YOOOOO';
    body.appendChild(newdiv);

    $(function(){
        $('#search-go').on('click', function(){
            window.setTimeout(function(){
                //loading up local html to get prof names
                
                //(trying to get rid of ratings next to staff names)
                //var profName = $('a.email');
                //var profLinks = $('a.email').attr("href");
                
                //var i;
                //for (i = 0; i < profLinks.length; i++) {
                //    if(profLinks[i].includes('mailto')) {
                //        $('a.email').append(' (Rating: ');
                //    }
                //}
                //$('#newid').append('testingggg append');
                //chrome.tabs.executeScript(tab.id, {file: 'background.js'}, function() {
                //    console.log('Successfully injected script into the page');
                //});
            }, 2000);
        });


    });



    //var port = chrome.runtime.connectNative('com.professor.ratings');

    //port.onMessage.addListener(function(msg){
    //    console.log('Received' + msg);
    //})
    //port.onDisconnect.addListener(function(){
    //    console.log("Disconnected");
    //})


  
    

    

    
    
