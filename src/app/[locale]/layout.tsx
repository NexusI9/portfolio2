import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "@/styles/globals.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { NavigationProvider } from "@/contexts/navigation/navigation";
import { DEFAULT_LOCALE, isRtl, Locale, locales, } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { DictionaryProvider } from "@/i18n/Context";
import Script from "next/script";

const fontBody = Raleway({
	variable: "--font-body",
	subsets: ["latin"],
});

const fontHeading = Raleway({
	variable: "--font-heading",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Nassim El Khantour - UX Engineer",
	description: "UX Engineer based in Taiwan with over 7 years of experience across numerous industries.",
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
		<html lang={locale} dir={dir} data-scroll-behavior="smooth">
			<body className={`${fontBody.variable} ${fontHeading.variable}`}>
				<DictionaryProvider dictionary={dico}>
					<NavigationProvider>
						<Header />
						{children}
						<Footer />
					</NavigationProvider>
				</DictionaryProvider>


				<GoogleAnalytics gaId={'G-6BRRN05LJJ'} />
				<Script>
					{`
                                           (function(h,o,t,j,a,r){
                                               h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                                               h._hjSettings={hjid:3433824,hjsv:6};
                                               a=o.getElementsByTagName('head')[0];
                                               r=o.createElement('script');r.async=1;
                                               r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                                               a.appendChild(r);
                                           })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                                       `}
				</Script>
			</body>
		</html>
	);
}
