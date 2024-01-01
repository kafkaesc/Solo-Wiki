'use client';

import Button from '@/elements/Button';

export default function LogInForm() {
	function login(ev: any) {
		ev.preventDefault();
		console.log('login not implemented');
	}

	return (
		<form onSubmit={login}>
			<label htmlFor="wi-username">Username</label>
			<input id="wi-username" name="wi-username" type="text" />
			<label htmlFor="wi-password">Password</label>
			<input id="wi-password" name="wi-password" type="password" />
			<Button className="text-center">Submit</Button>
		</form>
	);
}
