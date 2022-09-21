import { BrowserRouter as Router, Routes, Route, NavLink, Navigate} from "react-router-dom";
import Header from "./components/Header";
import Post from "./components/Post";
import Card from "./components/shared/Card";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackList from "./components/FeedbackList";
import {FeedbackProvider} from "./context/FeedbackContext";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <FeedbackProvider>
      <Router>
          <Header />
          <div className="container">
          <Card>
                <NavLink style={{textDecoration: "none", marginRight: "1rem"}} className={(navStatus) => navStatus.isActive ? "active": null} to="/home">Home</NavLink>
                <NavLink style={{textDecoration: "none"}} className={(navStatus) => navStatus.isActive ? "active": null} to="/about">About</NavLink>
          </Card>
            <Routes>
              <Route exact path="/" element={
                <Navigate to={"/home"} />
              }/>
              <Route path="/home" element={
                <>
                <FeedbackForm/>
                <FeedbackStats/>
                <FeedbackList/>
                </>
              }/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/post/*" element={<Post/>}></Route>
              <Route path="*" element={<ErrorPage/>}></Route>
              <Route path="/post/:id/:name" element={<Post/>}></Route>
            </Routes>
            {/* <Route path="*" element={ */}
            {/* // }> */}
            {/* </Route> */}
            <AboutIconLink/>  
          </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App;