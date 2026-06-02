import React from 'react'

const Ternary = (props) => {
    return(
    // TERNARY OPERATOR
        props.isLoggedIn ? <p>Success</p> : <p>Failed !!</p>
    );
}

export default Ternary
