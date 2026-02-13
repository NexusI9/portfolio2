import { catClass } from "@/app/_lib/utils";
import Corner from "./corner"
import styles from "./corner-frame.module.scss"

interface ICornerFrame {
	className?: string;
}

export default function CornerFrame({ className }: ICornerFrame) {

	return (<div className={`${catClass([styles["corner-frame"], className])} flex flex-col justify-between items-center`}>
		<div className="flex justify-between items-center w-full">
			<Corner side="TOP_LEFT" />
			<Corner side="TOP_RIGHT" />
		</div>

		<div className="flex justify-between items-center w-full">
			<Corner side="BOTTOM_LEFT" />
			<Corner side="BOTTOM_RIGHT" />
		</div>
	</div>);

}
