'use client';

import React, { ReactNode } from 'react';
import styles from "./list.module.scss";
import clsx from 'clsx';

// --- Types ---
type ListType = 'BULLET' | 'NUMBER';

interface ListRootProps {
	type?: ListType;
	children?: ReactNode;
	className?: string;
}

interface ListItemProps {
	children: ReactNode;
	className?: string;
}

// --- List Context (optional, for type awareness in items) ---
const ListContext = React.createContext<ListType>('BULLET');

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

	Item: ({ children, className }: ListItemProps) => {
		// You could consume the type if needed
		const type = React.useContext(ListContext);

		return <li className={className}>{children}</li>;
	},
};
