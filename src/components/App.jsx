import React from 'react';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from './Feedback/FeedbackButton';
import Statistics from './Feedback/FeedbackValue';
import styles from './Feedback/Feedback.module.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = el => {
    this.setState(prevState => {
      return {
        [el]: prevState[el] + 1,
      };
    });
  };
  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, el) => (acc += el), 0);
  countPositiveFeedbackPercentage = () =>
    (this.state.good * 100) / this.countTotalFeedback();

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 25,
          color: '#010101',
          padding: 25,
        }}
      >
        <div className={styles.feedback}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeavefeedback={this.onLeaveFeedback}
            />
          </Section>

          {this.countTotalFeedback() === 0 ? (
            <Section>
              <Notification message="There is no feedback" />
            </Section>
          ) : (
            <Section>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          )}
        </div>
      </div>
    );
  }
}

export default App;
