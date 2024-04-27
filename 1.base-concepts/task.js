"use strict";

function solveEquation(a, b, c) {
   const discriminant = b ** 2 - 4 * a * c;
   if (discriminant < 0) {
    return [];
   }

   else if (discriminant === 0) {
    const root = - b / (2 * a);
    return [root];
   }

   else {
    const root1 = ((- b + Math.sqrt(discriminant)) / 2 * a);
    const root2 = ((- b - Math.sqrt(discriminant)) / 2 * a);
    return [root1, root2];
   }
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (typeof percent != "number" || typeof contribution !== "number" || typeof amount !== "number" || typeof countMonths !== "number") {
    return ("Ошибка ввода данных");
  }

  if (percent < 0 || contribution < 0 || amount < 0 || countMonths < 0) {
    return ("Введите положительные числа");
  }

  const monthlyInterestRate = percent / 100 / 12;
  const loanAmount = amount - contribution;
  const monthlyPayment = loanAmount * (monthlyInterestRate + monthlyInterestRate / ((1 + monthlyInterestRate) ** countMonths - 1));
  const totalPayment = monthlyPayment * countMonths;

  return parseFloat(totalPayment.toFixed(2));
}

