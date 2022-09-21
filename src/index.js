import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import "./index-complete.css";

const container = document.getElementById("root"); // create conainer
const root = ReactDOM.createRoot(container); // make th container te rot

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);