import React,{useEffect} from 'react';

const LoginSuccess = () => {

	useEffect(() => {
		setTimeout(() => {
			window.close()
		}, 1000)
	})

	return (
		<div className="flex flex-column justify-center items-center" style={{width: '100vw', height: '100vh'}}>
			<h1>Thank You for Signing In</h1>
		</div>
	)
}

export default LoginSuccess;