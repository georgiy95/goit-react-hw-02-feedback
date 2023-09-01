import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

export default function FeedbackOptions({ options, onLeavefeedback }) {
  return (
    <ul className={styles.wrapper}>
      {options.map(opt => (
        <li key={opt}>
          <button
            type="button"
            onClick={() => onLeavefeedback(opt)}
            className={styles.button}
          >
            {opt}
          </button>
        </li>
      ))}
    </ul>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeavefeedback: PropTypes.func.isRequired,
};
