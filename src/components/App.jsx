
import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistic";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (feedbackType) => {
    this.setState(prevState => {
     
        return {
          ...prevState,
          [feedbackType]: prevState[feedbackType] + 1,
        }
    }

    )
  }
  render() {
    return (
    <>
    <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} items={this.state}/>
    <Statistics items={this.state}/>
    </>
  );}
}