"use client"

import Scene from './scene';
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';
import styles from "./portrait.module.scss";
import clsx from 'clsx';
import Image from 'next/image';

const Portrait = ({ children, className }: ComponentPropsWithoutRef<"div">) => {

	const container = useRef<HTMLDivElement | null>(null);
	const [render, setRender] = useState(false);

	const sceneRef = useRef<Scene | null>(null);

	useEffect(() => {

		if (!container.current) return;

		const onScroll = () => {

			if (!container.current)
				return;

			const { top } = container.current.getBoundingClientRect();
			setRender(top < window.innerHeight);
		}

		onScroll();
		window.addEventListener('scroll', onScroll);

		try {
			sceneRef.current = new Scene({ container: container.current });
			sceneRef.current.init();
		} catch {
			return () => {
				sceneRef.current = null;
				window.removeEventListener('scroll', onScroll);
			}
		}

		return () => {
			window.removeEventListener('scroll', onScroll);
			sceneRef.current?.dispose();
			sceneRef.current = null;
		};
	}, []);


	useEffect(() => {

		if (!sceneRef.current) { return; }
		render ? sceneRef.current.play() : sceneRef.current.pause();

	}, [render]);


	return (<div className={clsx(className, styles.portrait)}>

		{children}
		<div className={styles["portrait-container"]} ref={container}>
	 {!sceneRef.current && <Image alt="3D Render Static Portrait" src="/assets/portrait-static.png" width={1327} height={1590}/>}
		</div>
	</div>);
}

export default Portrait;
