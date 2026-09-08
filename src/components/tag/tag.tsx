import { ComponentPropsWithoutRef } from "react";
import { IComponentRole } from "@/types/component";
import styles from "./tag.module.scss";
import clsx from "clsx";

interface ITag extends ComponentPropsWithoutRef<"div"> {
	role: IComponentRole
}

export default function Tag({ role, children, className }: ITag) {
	return <div className={clsx(styles.tag, className)} data-role={role}>{children}</div>
}
