// import PropTypes from 'prop-types';
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext);
  
  let average = feedback.reduce((acc, curr) => {
      return acc + curr.rating;
  }, 0) / feedback.length //second arg is default for the acc which begins with zero

  average = average.toFixed(1).replace(/[.]0$/, ""); //removed any unnecessary zeros with regex

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Review(s)</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats;

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array,
// }