function SimonGame () {
    // these strings match up exactly to the IDs of the tags
    this.availableColors = [ 'green', 'red', 'yellow', 'blue' ];

    this.sequence = [];

    this.currentClickSequence = 0;
}

SimonGame.prototype.startGame = function () {
    // add the first color to the sequence
    this.addColor();

    // make that first color glow
    this.showSequence();

    $('#counter').html(this.sequence.length);
};

SimonGame.prototype.addColor = function () {
    // choose randomly between 0, 1, 2, 3
    var randomIndex = Math.floor(Math.random() * this.availableColors.length);

    // retrieve the color in that random position
    var randomColor = this.availableColors[randomIndex];

    // add the color to the sequence
    this.sequence.push(randomColor);
};

SimonGame.prototype.showSequence = function () {
    // start at the first color
    var i = 0;

    // make a variable to avoid "this" problems
    var ourSequence = this.sequence;

    // turn on a light every second
    var timerId = setInterval(function () {
        // get the current color
        var nextColor = ourSequence[i];

        // make it glow
        $('#' + nextColor).addClass('glow');

        // turn it off before the next color glows
        setTimeout(function () {
          $('#' + nextColor).removeClass('glow');
        }, 700);

        // increase the index so it doesn't go infinite
        i += 1;

        // stop the timer if there are no more colors in sequence
        if (i === ourSequence.length) {
            clearInterval(timerId);
        }
    }, 1000);
};
