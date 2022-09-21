import {useNavigate} from "react-router-dom";

function ErrorPage() {
  const returnHome = useNavigate();

  const returnToHome = () => {
    returnHome('/home');
  }

  return (
    <div>
        <h1 style={{color: '#ff6a95'}}>Page Not Found</h1>
        <p>Error 404</p>
        <button onClick={returnToHome} className="btn btn-secondary">Back to Homepage</button>
    </div>
  )
}

export default ErrorPage