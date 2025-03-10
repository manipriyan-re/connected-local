'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import DeepLogEventHistory from '@/components/views/DeepLogEventHistory/DeepLogEventHistory'; // Import the new component
import Sidebar from '@/components/shared/Sidebar/Sidebar';

export default function Home() {
	const path = usePathname();
	const router = useRouter();
	const [showSideBar, setShowSideBar] = useState(false);

	useEffect(() => {
		if (path === '/') {
			router.replace('/deep-log-event-history');
		}
	}, [path, router]);

	// const changeTheme = () => {
	//   if (document.querySelector("body").getAttribute("data-theme") === "dark") {
	//     document.querySelector("body").setAttribute("data-theme", "light");
	//   } else {
	//     document.querySelector("body").setAttribute("data-theme", "dark");
	//   }
	// };

	return (
		<div>
			<DeepLogEventHistory
				setShowSideBar={setShowSideBar}
				showSideBar={showSideBar}
			/>
			{showSideBar && (
				<Sidebar isOpen={showSideBar} setShowSideBar={setShowSideBar} />
			)}
		</div>
	);
}
