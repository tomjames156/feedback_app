import {Navigate, useNavigate, Routes, Route, useParams} from "react-router-dom";
import Card from "./shared/Card";


function Post() {
    const params = useParams(); //takes params from the url pathname
    const status = 402;
    const backToHome = useNavigate();

    if(status === 404){
        return (<Navigate to={"/error"}/>)
    }

    const returnToHome = () => {
        console.log("We're on our way home. Chile")
        backToHome("/")
    }

    if(status ===  402){
        returnToHome();
    }

    return (
        <Card>
        <h1>Post #{params.id}</h1> A practical example of the usage of the useParams would be if we were working with a backend to get the item's id and use it in the program
        <p>Author: {params.name}</p>
        </Card>
        
        // <Routes>
        //     <Route path="" element={
        //         <>
        //         <div>
        //         <p>No posts yet</p>
        //             {/* <button className="btn btn-secondary" onClick={returnHome}>Go back to homepage</button> */}
        //             {/* <Button onClick={returnToHome} version='secondary'>Go back to homepage</Button> */}
        //         </div>
        //         <button className="btn btn-secondary" onClick={returnToHome}>Go back to homepage</button>
        //         </>
        //     }/>  
        //     <Route path={"/newuser"} element={
        //         <Card>
        //             <h1>Welcome to the Feedback Posts section App</h1>
        //             <p>You can view other user's posts here</p>
        //             <button onClick={returnToHome} className="btn btn-secondary">Go To Homepage</button>
        //         </Card>
        //     }/>             
        // </Routes>
            
    )
}

export default Post;