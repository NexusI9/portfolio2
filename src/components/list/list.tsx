'use client';
import React, { ReactNode } from 'react';
import styles from "./list.module.scss";
import clsx from 'clsx';
import { Check, X, AlertTriangle, type LucideIcon } from 'lucide-react';

// --- Types ---
export type ListType = 'BULLET' | 'NUMBER' | 'SUCCESS' | 'FAIL' | 'WARNING';

interface ListRootProps {
	type?: ListType;
	children?: ReactNode;
	className?: string;
}

interface ListItemProps {
	children: ReactNode;
	className?: string;
	type?: ListType;
}

// --- List Context (for type awareness in items) ---
const ListContext = React.createContext<ListType>('BULLET');

// --- Icon Type Config ---
const ICON_TYPE_CONFIG: Partial<Record<ListType, { Icon: LucideIcon; className: string }>> = {
	SUCCESS: { Icon: Check, className: styles.iconSuccess },
	FAIL: { Icon: X, className: styles.iconFail },
	WARNING: { Icon: AlertTriangle, className: styles.iconWarning },
};

// --- Root Component ---
export const List = {
	Root: ({ type = 'BULLET', children, className }: ListRootProps) => {
		const Tag = type === 'NUMBER' ? 'ol' : 'ul';
		return (
			<ListContext.Provider value={type}>
				<Tag className={clsx(styles.list, className)}>{children}</Tag>
			</ListContext.Provider>
		);
	},
	Item: ({ children, className, type }: ListItemProps) => {
		// You could consume the root type if needed
		const rootType = React.useContext(ListContext);

		const iconConfig = type ? ICON_TYPE_CONFIG[type] : undefined;

		if (iconConfig) {
			const { Icon, className: iconClassName } = iconConfig;
			return (
				<li className={clsx(styles.listItemIcon, className)}>
					<span className={clsx(styles.iconReserve, iconClassName)}>
						<Icon className={styles.icon} size={12} strokeWidth={2.5} />
					</span>
					<span className={styles.itemContent}>{children}</span>
				</li>
			);
		}

		return <li className={className}>{children}</li>;
	},
};
