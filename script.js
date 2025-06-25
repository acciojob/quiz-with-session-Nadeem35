//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
      const questions = [
        {
          question: "What is the capital of France?",
          choices: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        {
          question: "What is the highest mountain in the world?",
          choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
          answer: "Everest",
        },
        {
          question: "What is the largest country by area?",
          choices: ["Russia", "China", "Canada", "United States"],
          answer: "Russia",
        },
        {
          question: "Which is the largest planet in our solar system?",
          choices: ["Earth", "Jupiter", "Mars"],
          answer: "Jupiter",
        },
        {
          question: "What is the capital of Canada?",
          choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
          answer: "Ottawa",
        },
      ];

      const questionsElement = document.getElementById("questions");

      function renderQuestions() {
        for (let i = 0; i < questions.length; i++) {
          const question = questions[i];
          const questionElement = document.createElement("div");

          const questionText = document.createElement("p");
          questionText.textContent = question.question;
          questionElement.appendChild(questionText);

          for (let j = 0; j < question.choices.length; j++) {
            const choice = question.choices[j];
            const choiceElement = document.createElement("input");
            choiceElement.setAttribute("type", "radio");
            choiceElement.setAttribute("name", `question-${i}`);
            choiceElement.setAttribute("value", choice);

            const choiceLabel = document.createElement("label");
            choiceLabel.textContent = choice;
            choiceLabel.style.marginRight = "10px";

            questionElement.appendChild(choiceElement);
            questionElement.appendChild(choiceLabel);
          }

          questionsElement.appendChild(questionElement);
        }
      }

      renderQuestions();

      // First non-repeating character function
      function firstNonRepeatedChar(str) {
        const charCount = {};
        for (let char of str) {
          charCount[char] = (charCount[char] || 0) + 1;
        }

        for (let char of str) {
          if (charCount[char] === 1) {
            return char;
          }
        }

        return null;
      }

      // On submit
      document.getElementById("submit").addEventListener("click", () => {
        const testInput = "aabbcdd"; // You can change this or take input from user
        const result = firstNonRepeatedChar(testInput);
        document.getElementById("score").innerText =
          "First non-repeating character: " + (result ?? "null");
      });