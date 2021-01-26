function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is the number of people in the world with health issues?", ["650million", "900million","1billion", "3billion"], "1billion"),

    new Question("How many hours per week are you sleeping", ["56 perfect amount of sleep", "60 over sleep","45 good amount of sleep", "25 Insomania"], "56 perfect amount of sleep"),
    

    new Question("What are the main causes of depression", ["Abuse", "death or loss of closed ones","Conflict and pressure", "All"], "all"),
    

    new Question("Signs of mental health issues", ["Social withdrawal", "Excessive paranoia, worry, or anxiety","Long-lasting sadness or irritability.", "All"], "All"),
        
  new Question("What is the best way to fight mental health issues?", ["Talking to a professional therapist", "Keeping to yourself","Faking being happy", "Getting angry at things"], "Talking to a professional therapist"),



];


var quiz = new Quiz(questions);


populate();




