import Card from "../components/shared/Card";
import {Link} from "react-router-dom";

function AboutPage() {
  return (
    <Card>
        <h1>About This Project</h1>
        <p>This is an app to leave feedback for a product or service</p>
        <p>Version 1.0.0</p>
        <Link to={{
            pathname: "/",
            search: "?home", //optional extra params can be passed to link but as an object
            hash: "#homepage",
        }}>Back to Home</Link>
    </Card>
  )
}

export default AboutPage;