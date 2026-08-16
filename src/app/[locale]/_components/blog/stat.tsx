import Impact, { IImpactItem } from "./impact";

// Reuses Blog.Impact per row; awaiting Q2 answer on nesting behavior
interface IBlogStatsProps {
	headline: string;
	rows: IImpactItem[][];
}

export default function Stats({ headline, rows }: IBlogStatsProps) {
	return (
		<>
			{rows.map((row, i) => (
				<Impact key={i} items={row} headline={headline} />
			))}
		</>
	);
}
