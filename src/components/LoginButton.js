import React from 'react';

const LoginButton = (props) => {
    return (
        <button style={{marginRight:"200px"}} type="button" onClick={props.openModal}>Sign In</button>
    );
};

export default LoginButton;