import React from 'react'

const UserName = (props) => {
    if(props.isLoggedIn){
        return(
            <>
                <h2>{props.name}</h2>
            </>
        )
    }
    return(
            <>
                <h2>Pls loggin !!</h2>
            </>
    )


}

export default UserName