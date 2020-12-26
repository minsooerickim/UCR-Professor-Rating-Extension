console.log("Testing!!!!");

var body = document.getElementsByClassName('aurora-theme')[0],
    newdiv = document.createElement('p');   //create a div
    newdiv.id = 'newid';                      //add an id
    newdiv.textContent = 'YOOOOO';
    body.appendChild(newdiv);

    $(function(){
        $('.form-row').text('no way');

        $('#search-go').on('click', function(){
            window.setTimeout(function(){
                $('a.email').append('minsoo kim');
                $('#newid').append('testingggg append');
            }, 2000);


        });
    });

    chrome.runtime.onMessage.addListener(
        function(response, sender, sendResponse) {
            if (response.type == 'info') {
                var port = chrome.runtime.connectNative('com.professor.ratings')

                port.postMessage(request.value)

                port.onMessage.addListener(function (message){
                    console.log(message)
                })

                port.onDisconnect(function (error){
                    console.log('last error:' + chrome.runtime.lastError.message)
                })
            }
        }
    );

  
    

    

    
    
