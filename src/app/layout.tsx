import type { Metadata } from "next";
import { Instrument_Serif, Raleway } from "next/font/google";
import "./_styles/globals.scss";
import Header from "@components/header/header";

const fontBody = Raleway({
	variable: "--font-body",
	subsets: ["latin"],
});

const fontHeading = Raleway({
	variable: "--font-heading",
	subsets: ["latin"],
});

const fontDisplay = Instrument_Serif({
	weight: '400',
	variable: "--font-display",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Nassim El Khantour - Design Engineer",
	description: "Design Engineer based in Taiwan with over 10 years of experience across numerous industries.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${fontBody.variable} ${fontHeading.variable}  ${fontDisplay.variable}`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
