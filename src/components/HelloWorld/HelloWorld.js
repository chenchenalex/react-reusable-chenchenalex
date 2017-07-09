import React from 'react';
import PropTypes from 'prop-types';

/** A super simpe component demostration */
function HelloWorld({message}){
    return <div>{message}</div>
}

HelloWorld.propTypes={
    /** message to display */
    message: PropTypes.string
}

HelloWorld.defaultProps = {
    message: 'World'
}
export default HelloWorld;