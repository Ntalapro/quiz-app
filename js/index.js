//structuring data (json)
var quiz = {
    data: [
    {
      q : "Which of the following is not an OOPS concept?",
      o : [
        "Encapsulation",
        "Polymorphism",
        "Exception",
        "Abstraction",
      ],
      a : 2
    },
    {
      q : "Which feature of OOPS derives the class from another class?",
      o : [
        "Inheritance",
        "Data hiding",
        "Encapsulation",
        "Polymorphism",
      ],
      a : 0
    },
    {
      q : "Which class cannot create its instance?",
      o : [
        "Parent Class",
        "Nested Class",
        "Anonymous Class",
        "Abstract Class"
      ],
      a : 3
    },
    {
      q : "On what basis is it determined, when a variable comes into existence in memory?",
      o : [
        "Data type",
        "Storage Class",
        "Scope",
        "All of the above"
      ],
      a : 1
    },
    {
      q : "What is the number of parameters that a default constructor requires?",
      o : [
        "0",
        "1",
        "2",
        "3"
      ],
      a : 0
    }
    ],
  
    // (A2) HTML ELEMENTS
    hWrap: null, // HTML quiz container
    hQn: null, // HTML question wrapper
    hAns: null, // HTML answers wrapper
  
    // (A3) GAME FLAGS
    now: 0, // current question
    score: 0, // current score
  
    // (B) INIT QUIZ HTML
    init: () => {
      //This suggests that there is an HTML element with the ID "quizWrap" in the document, and this code is trying to get a reference to it.
      
      // (B1) WRAPPER
      quiz.hWrap = document.getElementById("quizWrap");
  
      // (B2) QUESTIONS SECTION
      quiz.hQn = document.createElement("div");
      quiz.hQn.id = "quizQn";
      quiz.hWrap.appendChild(quiz.hQn);
  
      // (B3) ANSWERS SECTION
      quiz.hAns = document.createElement("div");
      quiz.hAns.id = "quizAns";
      quiz.hWrap.appendChild(quiz.hAns);
  
      // (B4) GO!
      quiz.draw();
    },
  
    // (C) DRAW QUESTION
    draw: () => {
      // (C1) QUESTION
      quiz.hQn.innerHTML = quiz.data[quiz.now].q;
  
      // (C2) OPTIONS
      quiz.hAns.innerHTML = "";
      for (let i in quiz.data[quiz.now].o) {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz";
        radio.id = "quizo" + i;
        quiz.hAns.appendChild(radio);
        let label = document.createElement("label");
        label.innerHTML = quiz.data[quiz.now].o[i];
        label.setAttribute("for", "quizo" + i);
        label.dataset.idx = i;
        label.addEventListener("click", () => { quiz.select(label); });
        quiz.hAns.appendChild(label);
      }
    },
  
    // (D) OPTION SELECTED
    select: (option) => {
      // (D1) DETACH ALL ONCLICK
      let all = quiz.hAns.getElementsByTagName("label");
      for (let label of all) {
        label.removeEventListener("click", quiz.select);
      }
  
      // (D2) CHECK IF CORRECT
      let correct = option.dataset.idx == quiz.data[quiz.now].a;
      if (correct) {
        quiz.score++;
        option.classList.add("correct");
      } else {
        option.classList.add("wrong");
      }
  
      // (D3) NEXT QUESTION OR END GAME
      quiz.now++;
      setTimeout(() => {
        if (quiz.now < quiz.data.length) { quiz.draw(); }
        else {
          quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
          quiz.hAns.innerHTML = "";
        }
      }, 1000);
    },
  
    // (E) RESTART QUIZ
    reset : () => {
      quiz.now = 0;
      quiz.score = 0;
      quiz.draw();
    }
  };
  window.addEventListener("load", quiz.init);
  