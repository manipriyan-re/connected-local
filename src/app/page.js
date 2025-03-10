'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Home() {
	const path = usePathname();
	const router = useRouter();

	const [theme, setTheme] = useState('light');

	useEffect(() => {
		// Check localStorage for saved theme preference
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}, []);

	useEffect(() => {
		// Apply theme class to the body
		if (theme === 'dark') {
			document.body.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.body.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [theme]);

	useEffect(() => {
		if (path === '/') {
			router.replace('/monitoring/vehicle-dashboard');
		}
	}, [path, router]);

	return (
		<>
			<h2>Home Page</h2>
		</>
	);
}
