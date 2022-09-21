import {createContext, useState} from "react";
import {v4 as uuidv4} from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is item 1 from the context",
            rating: 8,
        },
        {
            id: 2,
            text: "This is item 2 from the context",
            rating: 9,
        },
        {
            id: 3,
            text: "This is item 3 from the context",
            rating: 8,
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    // Delete a feedback Item
    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete?")){
            setFeedback(feedback.filter(item => item.id !== id));
        }
        
    }   
    

    // Add a new feedback item
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    // Edit feedback
    const editFeedback = (item) => { 
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item))) 
    }
    
    return (
        <FeedbackContext.Provider value={
            {feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;