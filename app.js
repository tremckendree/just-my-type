$(document).ready(function (){
    $('#keyboard-upper-container').hide();

    // $('#shift-btn').on('click', function(){
    //     $('#keyboard-upper-container').toggle();
    // })
    $(document).keydown(function(e){
        // ascii code for shift is 16
        if(e.which == 16){
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        }else{
            let character = e.key.charCodeAt(0); // "abc"
            $("#" + character).css("background-color","yellow");
            // $(this).css("color","black");
        }
    })

 let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sentenceIndex = 0;
    let charIndex = 0;
    //let currentCharDiv = $("#target-letter");
    let currentSentence = sentences[0];
    let currentChar = currentSentence[0];

    $(document).keyup(function(e){
        if(e.which == 16){
            $('#keyboard-lower-container').show();
            $('#keyboard-upper-container').hide();
        } else {
            let character = e.key.charCodeAt(0);
            $("#" + character).css("background-color","#f5f5f5");
        }
    })
   
   $(document).key
    $('#sentence').append(currentSentence);
    //currentCharDiv.text(currentChar)
    $('#target-letter').append(currentChar)
})