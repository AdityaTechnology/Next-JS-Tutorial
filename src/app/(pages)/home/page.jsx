import Link from "next/link";

function HomePage() {
	return (
		<>
			<div className='max-w-4xl mx-auto border border-green-600 mt-20 flex justify-between py-2 px-4'>
				<Link href='/home'>Home</Link>
				<Link href='/about'>About</Link>
				<Link href='/gallery'>Gallery</Link>
				<Link href='/contact'>Contact</Link>
			</div>
		</>
	);
}

export default HomePage;
