import {useState, useContext, useEffect} from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";

function FeedbackForm() {
    const [text, setReviewText] = useState("");
    const [rating, setRating] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

    useEffect(() => {
        if(feedbackEdit.edit){
            setBtnDisabled(false);
            setRating(feedbackEdit.item.rating);
            setReviewText(feedbackEdit.item.text);
        }
    }, [feedbackEdit]) // this hook does things when an elements value changes it would be very useful for http req fetching or just api request when empty because it will work on page load empty array means it will run just once while array of a value is a dependency)

    const handleChange = (event) => {
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null);// dont send any message 
        }else if(!rating){
            setBtnDisabled(true);
            setMessage("Please select a rating");
        }else if(text !== "" && text.trim().length < 10 && rating){
            setMessage("Text can not be less than 10 characters");
            setBtnDisabled(true);
        }else{
            setMessage(null)
            setBtnDisabled(false);
        }
        setReviewText(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length >= 10){
            const newFeedback = {
                text, // shorthand will give it the propertyname as the variable name
                rating,
            }
            setReviewText("");
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback);
            }else{
                addFeedback(newFeedback);
            }
            
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service?</h2>
                {/* todo rating selection */}
                <RatingSelect rating={(rating) => {setRating(rating)}}/>
                <div className="input-group">
                    <input onChange={handleChange} type="text" value={text || ""} placeholder="Write a review"/>
                    {/* <button onClick={handleSubmit} type="submit">Send</button> */}
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm;