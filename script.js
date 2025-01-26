document.addEventListener("DOMContentLoaded", function () {
  const quotes = [
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. – Malcolm X",
    "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do. – Pelé",
    "The beautiful thing about learning is that no one can take it away from you. – B.B. King",
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Dreams don't work unless you do. – John C. Maxwell",
    "Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family. – Kofi Annan",
    "The roots of education are bitter, but the fruit is sweet. – Aristotle",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The expert in anything was once a beginner. – Helen Hayes",
    "Strive for progress, not perfection. – Unknown",
    "Your education is a dress rehearsal for a life that is yours to lead. – Nora Ephron",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Education is the key to unlocking the world, a passport to freedom. – Oprah Winfrey",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    "The secret of success is to do the common thing uncommonly well. – John D. Rockefeller Jr.",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Education is not the filling of a pail, but the lighting of a fire. – William Butler Yeats",
  ];

  let displayedQuotes = [];

  function getRandomQuote() {
    if (displayedQuotes.length === quotes.length) {
      displayedQuotes = [];
    }

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (displayedQuotes.includes(randomIndex));

    displayedQuotes.push(randomIndex);
    return quotes[randomIndex];
  }

  setInterval(() => {
    document.getElementById("quote").textContent = getRandomQuote();
  }, 10000);
});
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");

      // Remove active class from all buttons and content
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to the clicked button and corresponding content
      this.classList.add("active");
      const targetContent = document.getElementById(targetTab);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
});
