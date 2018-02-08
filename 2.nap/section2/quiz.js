

var rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});


console.ask = function (question, callback) {
    rl.question(question + "\n", callback);
}

console.say = console.log;


function random(min, max) {
    min = min || 1;
    max = max || 100;
    return min + Math.floor(Math.random() * (max - min));
}

function generateQuestions(count) {
    count = count || 10;

    var questions = [];
    var a, b;
    for (var i = 0; i < count; i++) {
        a = random();
        b = random();

        questions[i] = {
            text: "Mennyi " + a + " + " + b + "?",
            answer: (a + b)
        };
    }

    return questions;
}

function getProgQuestions() {
    return [
        {
            text: "What is the name of the language which this game was written in?",
            answers: [
                "PHP",
                "JavaScript",
                "Perl",
                "C++"
            ],
            correct: 2
        },
        {
            text: "In which year JavaScript was released?",
            answers: [
                "1993",
                "1994",
                "1995",
                "1996"
            ],
            correct: 3
        }
    ];
}






var mathQuiz = function () {

    var points = 0,
        questions = generateQuestions(),
        current = 0

    var next = function (i) {
        if (!questions[i]) {
            console.say("Pontok: " + points);
            menu();
            return;
        }

        current = questions[i];

        console.ask(current.text, function (answer) {
            if (answer == current.answer) {
                console.say("Helyes válasz. (" + (++points) + " pontod van)");
            }
            else {
                console.say("Hibás válasz.");
            }

            next(++i);
        });
    }

    next(0);

    //for (var i = 0; i < questions.length; i++) {
    //    current = questions[i];

    //    console.ask(current.text, function (answer) {
    //        if (answer == current.answer) {
    //            console.say("Helyes válasz. (" + (++points) + " pontod van)");
    //        }
    //        else {
    //            console.say("Hibás válasz.");
    //        }
    //        ...()
    //    });
    //}
}

var progQuiz = function () {

    var points = 0,
    questions = getProgQuestions(),
    current = 0;

    var next = function () {
        var question = questions[current++];

        if (question) {
            console.say(question.text);

            for (var i = 0; i < question.answers.length; i++) {
                console.say("[" + (i + 1) + "] " + question.answers[i]);
            }

            console.ask(" ", function (answer) {
                if (answer == question.correct) { //SZIMPLA ÖSSZEHASONLÍTÁS!
                    console.say("Correct, you have " + (++points) + " points.");
                }
                else {
                    console.say("Sorry, wrong answer.");
                }

                next();
            });
        }
        else {
            console.say("End of quiz! You've got " + points + " points.");
            menu();
        }
    }

    next();

}




var menu = function ()
{
    console.ask("Milyen quiz legyen? [prog,matek]", function (answer) {
        switch (answer) {
            case "prog":
                progQuiz();
                break;
            case "prog":
                mathQuiz();
                break;
            case "exit":
                process.exit(0);
                break;
            default:
                console.say("Nem értelek");
                menu();
                break;
        }

    });

}


console.say("Hello!!!");
menu();
