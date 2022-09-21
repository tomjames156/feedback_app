function App(){
    const title = "About Feedback App";
    const about = "this is a feedback app which the first project in the React fron to back course from Brad trasversy";
    const comments = [
        {id: 1, comment: "I like your website"},
        {id: 2, comment: "I like your website's UI"},
        {id: 3, comment: "I would like you to update your website"}       
    ]
    const loading = false;
    const showComments = true;
    const commentBlock = 
    <div className="comments">
        <h3>Comments: {comments.length}</h3>
        <ul>
            {comments.map((value, index) => {
                return <li key={index}>{value.comment}</li>
            })}
        </ul>
    </div>

    if(loading){return <h1>Loading...</h1>} // This code can be specifically used when working with a backend and while the dynamic content is being fetched before it is then passed to the website
    return (
    <div className="welcome">
        <h1>{title}</h1>
        <p>{titleCase(about)}
        </p>

        {showComments && commentBlock}
    </div>
    );
}

function titleCase(textInput){
    textInput = textInput.split("");
    textInput[0] = textInput[0].toUpperCase();
    return textInput.join("");
}

// import React from "react";

// function App(){
//     return (
//         React.createElement('div', {className: 'welcome'}, React.createElement(
//             'h1', {}, 'Welcome from the app component'
//         ), React.createElement('p', {}, 'This is my first React App'))
//     )
// }

export default App;