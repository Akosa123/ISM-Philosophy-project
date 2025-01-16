
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const questionEl = document.querySelector(".question");
  const optionsEl = document.querySelectorAll(".option");
  const progressCountEl = document.querySelector(".progress-count");
  const totalCountEl = document.querySelector(".total-count");

  // Placeholder data for questions
  const quizData = [
    {
      question: "Is the root node black?",
      left: "Yes",
      right: "No"
    },
    {
      question: "Does the left child exist?",
      left: "Yes",
      right: "No"
    },
    {
      question: "Is the tree balanced?",
      left: "Yes",
      right: "No"
    }
  ];

  let currentQuestion = 0;

  // Initialize quiz
  function loadQuestion() {
    const currentData = quizData[currentQuestion];
    questionEl.textContent = currentData.question;
    optionsEl[0].textContent = currentData.left;
    optionsEl[1].textContent = currentData.right;

    // Update progress
    progressCountEl.textContent = currentQuestion + 1;
    totalCountEl.textContent = quizData.length;
  }

  // Handle option clicks
  optionsEl.forEach((option) => {
    option.addEventListener("click", () => {
      if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
      } else {
        alert("Quiz Complete!");
      }
    });
  });

  loadQuestion();
});
