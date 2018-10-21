function genQuiz() {

    var correct = 0;
    var incorrect = 0;

    
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    var twoMinutes = 60 * 2;
    display = $("#timeremaining");
    startTimer(twoMinutes, display)

   

    var questions = [{
            question: "Who was the president at the beginning of WW1?",
            answers: {
                a: "William Mckinley",
                b: "Woodrow Wilson",
                c: "Chester Arthur",
                d: "James Garfield",
            },
            correctAnswer: "b"
        },
        {
            question: "Who said, 'The only thing we have to fear is fear itself?'",
            answers: {
                a: "Abraham Lincoln",
                b: "Ulysses Grant",
                c: "Andrew Jackson",
                d: "Franklin Roosevelt",
            },
            correctAnswer: "d"
        },
        {
            question: "Which President never served in the Military?",
            answers: {
                a: "John Adams",
                b: "Harry Truman",
                c: "George Washington",
                d: "John Tyler",
            },
            correctAnswer: "a"
        },
        {
            question: "What was Ronald Reagan's occupation before he served as president?",
            answers: {
                a: "Peanut Farmer",
                b: "Movie Actor",
                c: "Steel Mill Worker",
                d: "Lawyer",
            },
            correctAnswer: "b"
        },
        {
            question: "Which President collects comic books?",
            answers: {
                a: "Jimmy Carter",
                b: "Donald Trump",
                c: "Barack Obama",
                d: "Bill Clinton",
            },
            correctAnswer: "c"
        },
    ]

    function showQuestions(questions) {
       
        // var questionNum = questions;
        for(var i = 0; i < questions.length; i++){
            var div = $("<div>");
            var questionText = questions[i].question
            // div.append(questionText);
            $("#quiz").prepend(questionText)
            console.log(questionText)

            

        }

    }

    function createradio(questionNum) {
        var radioList = $("<ul>");
        for(var z = 0; z < questionNum[i].answers[z]; z++ ){
            console.log(questionNum.answers)
        }

    }

    showQuestions(questions);
}

genQuiz()