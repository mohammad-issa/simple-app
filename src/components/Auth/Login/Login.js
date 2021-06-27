import { useState } from 'react';

import { useRouter } from 'next/router'

import { post } from '../../../services/apiServices';

import styles from './Login.module.scss';

const Login = () => {
	const router = useRouter();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const res = await post('auth/login/', {
				email,
				password,
			});
			console.log('res: ', res);
			if (res.success) {
				router.push('/')
			}
		} catch (err) {
			console.log('err: ', err);
		}
	}

	return (
		<>
			<div className={styles.loginHeader}>
				<div className={styles.mainText}>Sign In</div>
				<div className={styles.secondaryText}>Login to manage your account.</div>
			</div>
	
			<form onSubmit={handleSubmit}>
				<div className={styles.inputRow}>
					<input
						className={styles.inputValue}
						onChange={e => setEmail(e.target.value)}
						type="text"
						placeholder="Email"
					/>
				</div>
	
				<div className={styles.inputRow}>
					<input
						className={styles.inputValue}
						onChange={e => setPassword(e.target.value)}
						type="password"
						placeholder="Password"
					/>
				</div>
	
				<input className={styles.submitButton} type="submit" value="Login" />
			</form>
		</>
	);
}

export default Login;
