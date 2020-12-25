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
    

    //chrome.runtime.onMessage.addListener(gotMessage);
    
    //function gotMessage(message, sender, sendResponse){
    //    console.log(message.txt);
    //    $(function(){
    //        $('.email').text('the real no way');
    //    });
    //}


  
    

    

    
    
