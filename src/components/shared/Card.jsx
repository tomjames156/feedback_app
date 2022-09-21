import React from 'react';
import PropTypes from 'prop-types';

function Card({children, reverse}) {
  return (
    // <div className={`card ${reverse && 'reverse'}`}> //conditional class
    <div className='card'
    style={{
        backgroundColor: reverse ? "rgba(0, 0, 0, 0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
    }}>
        {children}
    </div>
  )//children reps the children of our element
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired, //a jsx element
    reverse: PropTypes.bool,
}

export default Card;