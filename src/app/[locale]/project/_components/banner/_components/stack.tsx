"use client"
import Typescript from "@assets/logos/typescript.svg";
import React from "@assets/logos/react.svg";
import Redux from "@assets/logos/redux.svg";
import Figma from "@assets/logos/figma.svg";
import Adobe from "@assets/logos/adobe.svg";
import C from "@assets/logos/c.svg";
import CPlusPlus from "@assets/logos/cpp.svg";
import CSharp from "@assets/logos/csharp.svg";
import WebGPU from "@assets/logos/webgpu.svg";
import Wasm from "@assets/logos/wasm.svg";
import Blender from "@assets/logos/blender.svg";
import Unity from "@assets/logos/unity.svg";
import ZBrush from "@assets/logos/zbrush.svg";
import SubstancePainter from "@assets/logos/substance-painter.svg";

import styles from "./stack.module.scss";
import { Text } from "@components/text/text";


type TStack = "TYPESCRIPT"
	| "REACT"
	| "REDUX"
	| "FIGMA"
	| "ADOBE"
	| "C"
	| "C++"
	| "C#"
	| "WEBGPU"
	| "BLENDER"
	| "WASM"
	| "UNITY"
	| "ZBRUSH"
	| "SUBSTANCE_PAINTER";

interface IStack {
	type: TStack;
}


export default function Stack({ type }: IStack) {

	const iconMap: Record<
		TStack,
		{ icon: React.ReactNode; label: string }
	> = {
		"TYPESCRIPT": { icon: <Typescript />, label: "TypeScript" },
		"REACT": { icon: <React />, label: "React" },
		"REDUX": { icon: <Redux />, label: "Redux" },
		"FIGMA": { icon: <Figma />, label: "Figma" },
		"BLENDER": { icon: <Blender />, label: "Blender" },
		"ADOBE": { icon: <Adobe />, label: "Adobe Creative Suite" },
		"C": { icon: <C />, label: "C" },
		"C++": { icon: <CPlusPlus />, label: "C++" },
		"C#": { icon: <CSharp />, label: "C#" },
		"WEBGPU": { icon: <WebGPU />, label: "WebGPU" },
		"WASM": { icon: <Wasm />, label: "WASM" },
		"UNITY": { icon: <Unity />, label: "Unity" },
		"ZBRUSH": { icon: <ZBrush />, label: "ZBrush" },
		"SUBSTANCE_PAINTER": {
			icon: <SubstancePainter />,
			label: "Substance Painter",
		},
	};


	return (<span className={styles.stack}>
		{iconMap[type].icon}
		<Text.LabelMedium>{iconMap[type].label}</Text.LabelMedium>
	</span>);
}
