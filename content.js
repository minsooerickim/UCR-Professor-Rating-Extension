var body = document.getElementsByClassName('aurora-theme')[0],
    newdiv = document.createElement('p');   
    newdiv.id = 'newid';                 
    //testing appending to registration site
    newdiv.textContent = 'YOOOOO';
    body.appendChild(newdiv);

    //jQuery to get elements and append
    $(function(){
        $.get('listOfProfessors.html',function(response){ 
            $('html').html(response); 
           });
    });


    $(function(){
        $('#search-go').on('click', function(){
            window.setTimeout(function(){
                //loading up local html to get prof names
                
                //(trying to get rid of ratings next to staff names)
                var profName = $('a.email');
                var profLinks = $('a.email').attr("href");
                
                var i;
                for (i = 0; i < profLinks.length; i++) {
                    if(profLinks[i].includes('mailto')) {
                        $('a.email').append(' Minsoo Kim ');
                    }
                }
                $('#newid').append('testingggg append');
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


  
    

    

    
    
