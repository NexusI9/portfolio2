"use client"
import styles from "./content.module.scss"

interface IContent {
	children: React.ReactNode;
}

export default function Content({ children }: IContent) {


  return (<main className={styles.content}>
		{children}
	</main>);


}
