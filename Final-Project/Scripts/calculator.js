// Modularized Calculator JS - calculator-updated.js
const Calculator = {
  display1: document.querySelector(".display1"),
  display2: document.querySelector(".display2"),
  display3: document.querySelector(".display3"),
  isSecondNumber: false,

  displayNumber(num) {
    if (
      this.display1.value !== "" &&
      this.display2.value === "" &&
      this.display3.value === "" &&
      !this.isSecondNumber &&
      !["+", "-", "*", "/"].includes(num)
    ) {
      this.display1.value = num;
      return;
    }

    if (["+", "-", "*", "/"].includes(num)) {
      if (this.display1.value === "") return;
      this.display2.value = num;
      this.isSecondNumber = true;
    } else if (!this.isSecondNumber) {
      this.display1.value = this.display1.value === "0" ? num : this.display1.value + num;
    } else {
      this.display3.value = this.display3.value === "0" ? num : this.display3.value + num;
    }
  },

  clearDisplay() {
    this.display1.value = "";
    this.display2.value = "";
    this.display3.value = "";
    this.isSecondNumber = false;
  },

  calculate() {
    const num1 = parseFloat(this.display1.value);
    const operator = this.display2.value;
    const num2 = parseFloat(this.display3.value);
    let result;

    switch (operator) {
      case "+": result = num1 + num2; break;
      case "-": result = num1 - num2; break;
      case "*": result = num1 * num2; break;
      case "/": result = num2 !== 0 ? num1 / num2 : "Error"; break;
      default: result = "Invalid";
    }

    this.display1.value = result;
    this.display2.value = "";
    this.display3.value = "";
    this.isSecondNumber = false;

    if (result !== "Error" && result !== "Invalid") {
      this.addToHistory(`${num1} ${operator} ${num2} = ${result}`);
    }
    if (result === "Error") alert("Cannot divide by zero!");
    else if (result === "Invalid") alert("Invalid operation!");
  },

  deleteLast() {
    if (this.display3.value) {
      this.display3.value = this.display3.value.slice(0, -1);
    } else if (this.display2.value) {
      this.display2.value = "";
      this.isSecondNumber = false;
    } else {
      this.display1.value = this.display1.value.slice(0, -1);
    }
  },

  clearHistory() {
    document.getElementById("history-list").innerHTML = "";
    localStorage.removeItem("calcHistory");
  },

  saveHistoryToStorage() {
    const historyItems = Array.from(document.getElementById("history-list").children)
      .map(item => item.textContent);
    localStorage.setItem("calcHistory", JSON.stringify(historyItems));
  },

  loadHistoryFromStorage() {
    const historyItems = JSON.parse(localStorage.getItem("calcHistory")) || [];
    const historyList = document.getElementById("history-list");
    historyItems.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      historyList.appendChild(li);
    });
  },

  addToHistory(result) {
    const historyList = document.getElementById("history-list");
    const li = document.createElement("li");
    li.textContent = result;
    historyList.appendChild(li);
    this.saveHistoryToStorage();
  },
};

document.addEventListener("DOMContentLoaded", () => {
  Calculator.loadHistoryFromStorage();
  document.getElementById("clear-history").addEventListener("click", Calculator.clearHistory.bind(Calculator));
});

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (!isNaN(key)) Calculator.displayNumber(key);
  else if (["+", "-", "*", "/"].includes(key)) Calculator.displayNumber(key);
  else if (key === "Enter" || key === "=") Calculator.calculate();
  else if (key === "Backspace") Calculator.deleteLast();
  else if (key === "Escape") Calculator.clearDisplay();
});
