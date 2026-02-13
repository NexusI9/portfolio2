
type TText = Readonly<{
	className?: string;
	children: React.ReactNode;
}>;

export const Text = {

	H1: ({ className, children }: TText) => (<h1 className={className}>{children}</h1>),

	H2: ({ className, children }: TText) => (<h2 className={className}>{children}</h2>),

	H3: ({ className, children }: TText) => (<h3 className={className}>{children}</h3>),

	H4: ({ className, children }: TText) => (<h4 className={className}>{children}</h4>),

	H5: ({ className, children }: TText) => (<h5 className={className}>{children}</h5>),

	H6: ({ className, children }: TText) => (<h6 className={className}>{children}</h6>),

	Subtitle1: ({ className, children }: TText) => (<p className={`subtitle-1 ${className || ''}`}>{children}</p>),

	Subtitle2: ({ className, children }: TText) => (<p className={`subtitle-2 ${className || ''}`}>{children}</p>),

	Body: ({ className, children }: TText) => (<p className={className}>{children}</p>),

	Body2: ({ className, children }: TText) => (<p className={`body-2 ${className || ''}`}>{children}</p>),

	Caption: ({ className, children }: TText) => (<p className={`caption ${className || ''}`}>{children}</p>),

	Footnote: ({ className, children }: TText) => (<p className={`footnote ${className || ''}`}>{children}</p>),

	Label: {
		Large: ({ className, children }: TText) => (<p className={`label-large ${className || ''}`}>{children}</p>),
		Medium: ({ className, children }: TText) => (<p className={`label-medium ${className || ''}`}>{children}</p>),
		Small: ({ className, children }: TText) => (<p className={`label-small ${className || ''}`}>{children}</p>),
	},

};
