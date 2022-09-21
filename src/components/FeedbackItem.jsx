import {FaTimes, FaEdit} from "react-icons/fa";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";
import PropTypes from 'prop-types';
import Card from "./shared/Card";

function FeedbackItem({item}) {
    // {//default prop color for the icons and the icons are components}
    const {deleteFeedback, editFeedback} =  useContext(FeedbackContext);

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color="purple"/> 
            </button>
            <button onClick={() => editFeedback(item)} className="edit">
                <FaEdit color="purple"/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object,
}

export default FeedbackItem