var myGame = new SimonGame();

$(document).ready(function () {

    myGame.startGame();

});


$(document).ready(function () {

    $('button').click(function () {
        // which color button was clicked?
        var clickedColor = $(this).attr('id');
        var currentSpot = myGame.currentClickSequence;

        // compare the clicked color to the sequence color
        if (myGame.sequence[currentSpot] === clickedColor) {
            // go to the next color in the sequence
            myGame.currentClickSequence += 1;

            // go to the next round if that was the last color
            if (myGame.currentClickSequence === myGame.sequence.length) {
                // remove the class and then add it to restart the animation
                $('#round-win').removeClass('play');
                setTimeout(function () {
                    $('#round-win').addClass('play');
                }, 10);

                myGame.addColor();
                myGame.showSequence();
                myGame.currentClickSequence = 0;
                $('#counter').html(myGame.sequence.length);
            }
        }

        // you messed up any color of the sequence
        else {
            myGame.gameOver();
        }
    });

});


$(document).ready(function () {
    $('#feedback a').click(function () {
        myGame.startGame();
    });
});
