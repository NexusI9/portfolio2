"use client"

import { useEffect, useState } from "react";
import { TABLET_WIDTH } from "@/lib/constants";
import DesktopHeader from "./_layouts/desktop";
import MobileHeader from "./_layouts/mobile";

export default function Header() {

	const [device, setDevice] = useState<"PC" | "TB">("PC");

	useEffect(() => {

	  const checkDevice = () => {
			setDevice(window.innerWidth > TABLET_WIDTH ? "PC" : "TB");
		};

		checkDevice();
		window.addEventListener("resize", checkDevice);

	  return () => window.removeEventListener("resize", checkDevice);
	}, []);

	return (<>
		{device == "PC" ? <DesktopHeader /> : <MobileHeader />}
	</>);

};
