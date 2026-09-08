import { ComponentPropsWithoutRef } from "react";
import Corner from "./corner"
import clsx from "clsx";

type TCornerRole = "BRAND" | "ON LIGHT" | "ON DARK";

interface ICornerFrame extends ComponentPropsWithoutRef<"div"> {
	role?: TCornerRole;
}

export default function CornerFrame({ className, role = "BRAND" }: ICornerFrame) {

	return (<div className={clsx("flex flex-col justify-between items-center", className)}>
		<div className="flex justify-between items-center w-full">
			<Corner side="TOP_LEFT" role={role} />
			<Corner side="TOP_RIGHT" role={role} />
		</div>

		<div className="flex justify-between items-center w-full">
			<Corner side="BOTTOM_LEFT" role={role} />
			<Corner side="BOTTOM_RIGHT" role={role} />
		</div>
	</div>);

}
