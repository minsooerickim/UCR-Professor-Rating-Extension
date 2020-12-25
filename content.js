console.log("Testing!!!!");

var body = document.getElementsByClassName('aurora-theme')[0],
    newdiv = document.createElement('p');   //create a div
    newdiv.id = 'newid';                      //add an id
    newdiv.textContent = 'YOOOOO';
    body.appendChild(newdiv);

    $(function(){
        //var instructors = $("td [data-property='instructor']");
        //console.log(instructors);

        $('.form-row').text('no way');

        $('#search-go').on('click', function(){
            window.setTimeout(function(){
                $('a.email').append('minsoo kim');
                $('#newid').append('testingggg append');
            }, 2000);


        });
    });

    

    //chrome.runtime.onMessage.addListener(gotMessage);
    
    //function gotMessage(message, sender, sendResponse){
    //    console.log(message.txt);
    //    $(function(){
    //        $('.email').text('the real no way');
    //    });
    //}


  
    

    

    
    
