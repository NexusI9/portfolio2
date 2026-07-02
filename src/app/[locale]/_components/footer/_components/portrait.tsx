"use client"

import Scene from './scene';
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';
import styles from "./portrait.module.scss";
import clsx from 'clsx';

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

		sceneRef.current = new Scene({ container: container.current });
		sceneRef.current.init();

		return () => {
			//sceneRef.current?.destroy?.();
			window.removeEventListener('scroll', onScroll);
			sceneRef.current = null;
		};
	}, []);


	useEffect(() => {
	  if (!sceneRef.current) { return; }
	  render ? sceneRef.current.play() : sceneRef.current.pause()	  
	}, [render]);


  return (<div className={clsx(className, styles.portrait)} ref={container}>
	    {children}
	  </div>);
}

export default Portrait;
