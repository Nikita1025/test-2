export function calculateMonthlyPayment(
  loanAmount: number,
  interestRate = 5,
  loanTerm: number,
  downPayment: number,
) {
  // Расчет суммы кредита
  const principal = loanAmount - downPayment;

  // Расчет месячной процентной ставки
  const monthlyInterestRate = interestRate / 12 / 100;

  // Расчет общего количества платежей
  const totalPayments = loanTerm * 12;

  // Расчет ежемесячного платежа
  const monthlyPayment =
    (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

  return monthlyPayment.toFixed(0).toLocaleString();
}
