var questions = [
  {
    question: "From what years did WW1 last until?",
    answer: "1914-1918"
  },
  {
    question: "From what years did WW2 last until?",
    answer: "1939-1945"
  },
  {
    question: "From what years did the cold war last until?",
    answer: "1945-1990"
  },
  {
    question: "From what years did the Mexican Revolution last until?",
    answer: "1910-1920"
  },
  {
    question: "From what years did the Mexican American war last until?",
    answer: "1846-1848"
  },
  {
      question: "What did year did American gain her independence?",
      answer: "1776"
  },
  {
      question: "What year did the United States ratify the bill of rights?",
      answer: "1791"
  },
  {
      question: "what yead did Harry S Truman become president",
      answer: "1945"
  },
  {
      question: "What year did Ronald Reagan become president?",
      answer: "1981-1989"
  }
];
        // Loop through each array//
        for(var i = 0; questions.length; i++){
        // store each question value
        var question = questions[i].question;
        // store each elemnt to add question //
        var el = document.getElementById("question" + [i]);

        console.log(question, el);

        // update text content of each elemnt//
        el.textContent = question;


      }
      // Check results when the user submits Quiz//
      function testResults() {
        var correct = 0;
        var incorrect = 0;

        // loop through questions array
        for(var i = 0; i < questions.length; i++) {
          // First store each corrct answer
          var answer = questions[i].answer;
            // Second store each user answer
          var guess = document.getElementById("answer" + [i]).value;
          // Third store element to add a class if correct or incoorect
          var questionSpot = document.getElementById("question" + [i]);

          // check if the user matches the correct answer
          if ( answer == guess) {
            questionSpot.className = "correct";
            questionSpot.style.color = "green";

            correct++;
      } else {
            questionSpot.className = "incorrect";
            questionSpot.style.color = "red";

            incorrect++;
      };
    };


      // update corrct and incorrect values
      document.getElementById("correct").textContent = correct;
      document.getElementById("correct").style.color = "green";
      document.getElementById("incorrect").textContent = incorrect;
      document.getElementById("incorrect").style.color = "red";
    }
