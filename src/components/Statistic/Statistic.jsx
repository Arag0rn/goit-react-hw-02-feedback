import { StatList, Number } from "./Statistic.styled";

export const Statistics = ({ items, countPositiveFeedbackPercentage }) => {

  return (
    <div>
  
      <StatList>
        <li>Good: <Number>{items.good}</Number></li>
        <li>Neutral: <Number>{items.neutral}</Number></li>
        <li>Bad: <Number>{items.bad}</Number></li>
        <li>Positive Feedback Percentage: <Number>{Math.round(countPositiveFeedbackPercentage())}%</Number> </li>
      </StatList>
  </div>
);
};