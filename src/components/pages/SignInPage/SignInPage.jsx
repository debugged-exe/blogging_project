import React from 'react';
import Login from '../../Login/Login';
import SignUp from '../../SignUp/SignUp';

const SignInPage = () => {
    console.log('hi');
    return (
        <div className="flex justify-around items-center pt6">
            <Login />
            <SignUp />
        </div>
    );
}

export default SignInPage;