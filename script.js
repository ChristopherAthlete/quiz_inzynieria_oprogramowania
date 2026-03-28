let questions = [];
let current = 0;

fetch("questions.json")
  .then(res => res.json())
  .then(data => {
    questions = data;
    showQuestion();
  });

function showQuestion() {
  const q = questions[current];

  document.getElementById("quiz").innerHTML = `
    <h3>${q.question}</h3>
    ${Object.entries(q.options).map(([key, value]) => `
      <button onclick="checkAnswer('${key}')">${key}: ${value}</button>
    `).join("<br><br>")}
  `;
}

function checkAnswer(answer) {
  const correct = questions[current].correct;

  if (answer === correct) {
    alert("✅ Dobrze!");
  } else {
    alert("❌ Źle! Poprawna: " + correct);
  }
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    alert("Koniec quizu!");
  }
}