import { ReactNode } from 'react';

interface H1Props {
	children: ReactNode;
	className?: string;
	[props: string]: any;
}

export default function H1({ children, className, ...props }: H1Props) {
	return className ? (
		<h1 {...props} className={`text-5xl text-wi-black ${className}`}>
			{children}
		</h1>
	) : (
		<h1 {...props} className="text-5xl text-wi-black">
			{children}
		</h1>
	);
}
