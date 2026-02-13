import NavBar from "@components/navbar/navbar";
import styles from "./page.module.scss";

export default function Home() {
	return (
		<main>
			<div className={styles["navbar-wrapper"]}>
				<NavBar options={[
					{ label: "Digital Product", anchor: "digital-product" },
					{ label: "Game Development", anchor: "game-development" },
					{ label: "Film Production", anchor: "film-production" },
				]} />
			</div>
		</main>

	);
}
