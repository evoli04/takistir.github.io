//anket memnuniyet

document.addEventListener('DOMContentLoaded', () => {
    nextButton.classList.add('hide');
  });
  
  const startButton = document.getElementById('start-btn');
  const nextButton = document.getElementById('next-btn');
  const questionContainerElement = document.getElementById('question-container');
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');
  const quizAppElement = document.getElementById('quiz-app');
  const resultsElement = document.createElement('div');
  resultsElement.setAttribute('id', 'results');
  resultsElement.classList.add('results', 'hide');
  quizAppElement.appendChild(resultsElement);
  
  let shuffledQuestions, currentQuestionIndex;
  let score = 0;
  
  startButton.addEventListener('click', startGame);
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
  });
  
  function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
  }
  
  function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }
  
  function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
  
  function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', () => selectAnswer(button));
        answerButtonsElement.appendChild(button);
    });
  }
  
  function selectAnswer(selectedButton) {
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        setStatusClass(button, button.dataset.correct);
    });
  
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    }
    setStatusClass(selectedButton, correct);
  
    setTimeout(() => {
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            nextButton.classList.remove('hide');
        } else {
            concludeQuiz();
        }
    }, 1000); // Adjust delay as needed
   
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }
  
  function concludeQuiz() {
    questionContainerElement.classList.add('hide');
    nextButton.classList.add('hide');
  
    resultsElement.classList.remove('hide');
    resultsElement.innerHTML = `
        <h2>Anket tamamlandı!</h2>
        <button onclick="restartQuiz()">Tekrarla</button>
    `;
    quizAppElement.appendChild(resultsElement);
  }
  
  function restartQuiz() {
    resultsElement.classList.add('hide');
    score = 0;
    currentQuestionIndex = 0;
    startGame();
  }
  
  const questions = [
    {
        question: "İşletmemizden memnun kaldınız mı?",
        answers: [
            { text: "Hayır", correct: false },
            { text: "Evet", correct: true },
           
        ]
    },
    {
        question: "Bizi bir daha tercih eder misiniz?",
        answers: [
            { text: "Evet", correct: true },
            { text: "Hayır", correct: false },
          
        ]
    },
    {
        question: "Hangisini tercih edersiniz?",
        answers: [
            { text: "Gümüş takı", correct: true },
            { text: "Çelik takı", correct: false },
           
        ]
    }
   
  ];