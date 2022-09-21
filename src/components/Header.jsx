import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export default function Header(props) {
  const headerStyles = {
    backgroundColor: props.bgColor, 
    color: props.textColor
  }

  return (    
    <Link className="homebtn" to={{pathname: "/", hash: "#homepage",}}>
      <header style={headerStyles}>
        <div className="container">
            <h2>{props.text}</h2>
        </div>
      </header>
    </Link>
  );
}


Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0, 0, 0, 0.4)",
  textColor: '#ff6a95',
};

Header.propTypes = {
  text: PropTypes.string,
};