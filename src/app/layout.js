import { Montserrat } from 'next/font/google';
import ReduxProvider from '@/store/Provider';
import './globals.css';
import './style.scss';
import '../reset.css';
import ClientLayout from './ClientLayout';

export const metadata = {
	title: 'Re-Connected',
	description: 'Internal app for Re',
};

const inter = Montserrat({ weight: '400', preload: false });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className} data-theme="dark">
				<ReduxProvider>
					<ClientLayout>
						<div
							id="content"
							className="ml-20 h-screen overflow-y-auto default-scroll-5">
							<div className="mt-3">{children}</div>
						</div>
					</ClientLayout>
				</ReduxProvider>
			</body>
		</html>
	);
}
