// import PropTypes from 'prop-types';
import FeedbackItem from "./FeedbackItem";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";
import {motion, AnimatePresence} from "framer-motion";

function FeedbackList() {
    const { feedback } = useContext(FeedbackContext);

    if(!feedback || feedback.length === 0){
        return(<p style={{color: "red", fontWeight: "bold", fontSize: "1.5rem"}}>No feedback yet</p>)
    }else{
        return (            
            <div className="feedback-list">
                <AnimatePresence>
                    {feedback.map((item) => {
                        return (
                            <motion.div 
                            key={item.id}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}>
                                <FeedbackItem key={item.id} item={item}/>
                            </motion.div>
                        )
                        })}
                </AnimatePresence>
            </div>
          )

        // return (
        // <div className="feedback-list">
        //     {feedback.map((item) => {return <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>})}
        // </div>
        // )
    }
}

// FeedbackList.propTypes = {
//     // feedback: PropTypes.array, // array property
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.any,
//             rating: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//         }
//         )
//     )//array property with the specific propertynames and proptypes
// }

export default FeedbackList;