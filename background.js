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
        //when the webpage doesnt load
        if (xhr.status == 404) {
            console.log('Resource not found');
        }
    }
};
//using a cors anywhere herokuapp proxy to send requests cuz chrome sucks
xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2349036', true);
xhr.send();

//math dep profs
var math = new XMLHttpRequest();
math.onreadystatechange = function() {
    if (math.readyState == 4) {
        if (math.status == 200) {
            console.log(xhr.responseText);
            console.log(document.getElementsByClassName('RatingValue__Numerator-qw8sqy-2.liyUjw'));
            console.log("succesfully connected to ratemyprofessors.com");
            results = document.getElementsByClassName('NameTitle__Name-dowf0z-0');
            
            var mathHtml = document.createElement('div');
            mathHtml.innerHTML = math.responseText;
            console.log(mathHtml);
            
            
            var names = mathHtml.querySelector('h5');
            console.log(names);


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
        if (math.status == 404) {
            console.log('Resource not found');
        }
    }
};
math.open('GET', 'https://cors-anywhere.herokuapp.com/https://www.engr.ucr.edu/people', true);
math.send();

//QUERY SELECTOR WONT WORK
//loading up local html to get prof names



    
//chrome.runtime.sendNativeMessage('com.professor.ratings', { text: "Hello"},
//function(response) {
//    console.log("received " + response);
//});
