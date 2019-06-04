
//object containing all information for questions
var questions = [{
    ques: "What year did the first Pokemon game release?",
    ans: ["2019", "2000", "1997", "1996"],
    name: "firstYear",
    correct: "1996",
    divClass: ".firstYear"
},
{
    ques: "How many games are there in the core series of Pokemon (including all versions and remakes)?",
    ans: ["40", "37", "31", "28"],
    name: "numberOfGames",
    correct: "31",
    divClass: ".numberOfGames"
},
{
    ques: "Which of these was never a starter Pokemon in a core series game?",
    ans: ["Charmander", "Totodile", "Pikachu", "Meowth"],
    name: "starter",
    correct: "Meowth",
    divClass: ".starter"
},
{
    ques: "How many Pokemon movies have been released in theaters?",
    ans: ["30", "27", "22", "19"],
    name: "movies",
    correct: "22",
    divClass: ".movies"
},
{
    ques: "How many legendary Pokemon are there?",
    ans: ["52", "49", "46", "43"],
    name: "legendary",
    correct: "49",
    divClass: ".legendary"
},
{
    ques: "Which Pokemon type has never had a gym leader specialize in this type?",
    ans: ["Ghost", "Steel", "Flying", "Dark"],
    name: "type",
    correct: "Dark",
    divClass: ".type"
},
{
    ques: "What is the signature move of MewTwo?",
    ans: ["Psystrike", "Psychic", "Psyshock", "Psychic Terrain"],
    name: "mewtwo",
    correct: "Psystrike",
    divClass: ".mewtwo"
},
{
    ques: "Which generation of Pokemon games were abilities introduced?",
    ans: ["1", " 2", "3", "4"],
    name: "abilities",
    correct: "3",
    divClass: ".abilities"
},
{
    ques: "Which of the following attacks would be most effective against the pokemon Stakataka?",
    ans: ["Hydropump", "Sludge Bomb", "Shadow Ball", "Close Combat"],
    name: "effective",
    correct: "Close Combat",
    divClass: ".effective"
},
{
    ques: "What was the first legendary pokemon to appear in the Pokemon anime?",
    ans: ["Mew", "Mewtwo", "Ho-oh", "Arceus"],
    name: "firstLegendary",
    correct: "Ho-oh",
    divClass: ".firstLegendary"
}
] 

var labels = ["first", "second", "third", "forth"];

//function to start game
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

//function to display questions 
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// timer function
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// stops timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

//goes through and checks the quiz
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

countdown();
// fade out questions
$('.container').fadeOut(500);
$('#answerScreen').show();
$('#correctScreen').append(correctAnswers);
$('#wrongScreen').append(wrongAnswers);
// message depends on score of quiz
if (correctAnswers === 10) {
    $('#scoreMessage').append("Perfect score! You are a Pokémon MASTER!");
} else if (correctAnswers >= 5) {
    $('#scoreMessage').append("Not bad, but I know you could do better!");
} else {
    $('#scoreMessage').append("Oof...better luck next time...");
}
}); 