import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "My NextJS Project",
	description: "This is my Next JS project",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<div className='max-w-4xl mx-auto border border-green-600 mt-20 flex justify-between py-2 px-4'>
					<Link href='/home'>Home</Link>
					<Link href='/about'>About</Link>
					<Link href='/gallery'>Gallery</Link>
					<Link href='/contact'>Contact</Link>
				</div>
				<h1>Master Page</h1>
				{children}
			</body>
		</html>
	);
}
