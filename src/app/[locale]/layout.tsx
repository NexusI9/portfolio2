import type { Metadata } from "next";
import { Instrument_Serif, Raleway } from "next/font/google";
import "./_styles/globals.scss";
import Header from "@components/header/header";
import Footer from "./_components/footer/footer";
import { NavigationProvider } from "./_context/navigation/navigation";
import { DEFAULT_LOCALE, isRtl, Locale, locales, } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { DictionaryProvider } from "@/i18n/Context";
import localFont from "next/font/local";

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

const fontDisplayZh = localFont({
	src: "../../../public/assets/fonts/chuhuo.woff2",
	variable: "--font-display-zh",
});


export const metadata: Metadata = {
	title: "Nassim El Khantour - Design Engineer",
	description: "Design Engineer based in Taiwan with over 10 years of experience across numerous industries.",
};


export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children, params
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string; }>;
}>) {

	let { locale } = await params;

	// Validate locale from URL params
	// If invalid locale is provided, fall back to default locale
	if (!locales.includes(locale as Locale))
		locale = DEFAULT_LOCALE;

	const dico = await getDictionary(locale);

	// Determine text direction based on locale
	// RTL languages like Arabic need dir="rtl" for proper text rendering
	const dir = isRtl(locale) ? "rtl" : "ltr";

	return (
		<html lang={locale} dir={dir}>
			<body className={`${fontBody.variable} ${fontHeading.variable} ${fontDisplay.variable} ${fontDisplayZh.variable}`}>
				<DictionaryProvider dictionary={dico}>
					<NavigationProvider>
						<Header />
						{children}
						<Footer />
					</NavigationProvider>
				</DictionaryProvider>
			</body>
		</html>
	);
}
