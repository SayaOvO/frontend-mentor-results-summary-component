const summarySection = document.querySelector(".summary-section");

const container = document.createElement("div");

container.classList.add("summary-scores");

try {
  fetch("./data.json").then((response) => {
    if (!response.ok) {
      throw new Error(response.body);
    }
    response.json().then((data) => {
      data.forEach(({ icon, score, category }) => {
        const summaryScore = document.createElement("p");
        summaryScore.classList.add("summary-score-row", category.toLowerCase());
        const img = document.createElement("img");
        img.src = icon;
        const categorySpan = document.createElement("span");
        categorySpan.textContent = category;
        categorySpan.classList.add("category");

        const scoreSpan = document.createElement("span");
        scoreSpan.classList.add("summary-score");

        const scoreValueSpan = document.createElement("span");
        scoreValueSpan.textContent = score;
        scoreValueSpan.classList.add("summary-score-value");
        scoreSpan.appendChild(scoreValueSpan);
        scoreSpan.appendChild(document.createTextNode(" / 100"));

        summaryScore.appendChild(img);
        summaryScore.appendChild(categorySpan);
        summaryScore.appendChild(scoreSpan);

        container.appendChild(summaryScore);
      });
      console.log("container:", container);

      summarySection.appendChild(container);
      const btn = document.createElement("button");
      btn.classList.add("continue-btn");
      btn.textContent = "Continue";
      summarySection.appendChild(btn);
    });
  });
} catch (error) {
  console.log("Error: ", error);
}
