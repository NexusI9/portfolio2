import Image from "next/image";
import { Text } from "@/components/text/text";

export interface ExperienceRole {
	position: string;
	date: { start: string; end: string };
	location: string;
}

export interface Experience {
	logoSrc: string;
	logoAlt: string;
	company: string;
	roles: ExperienceRole[];
}

interface ExperienceItemProps {
	experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
	return (
		<li className="flex flex-col gap-2 py-6 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
			<div className="flex flex-col">
				{experience.roles.map((role, roleIndex) => {
					const isFirst = roleIndex === 0;
					const isLast = roleIndex === experience.roles.length - 1;

					return (
						<div key={role.position} className="flex gap-4">
							{/* Connector column: logo on the first role, a dot on later roles, joined by a line */}
							<div className="flex w-10 shrink-0 flex-col items-center">
								{isFirst ? (
									<div className="relative h-10 w-10 overflow-hidden bg-neutral-100">
										<Image
											src={experience.logoSrc}
											alt={experience.logoAlt}
											fill
											className="object-contain"
										/>
									</div>
								) : (
									<span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-(--color-surface-low)" />
								)}
								{!isLast && (
								 <span className="my-1 w-px flex-1 bg-(--color-surface-base)" />
								)}
							</div>

							<div className={`flex flex-col ${isLast ? "" : "pb-9"}`}>
								<Text.Body className="font-medium text-neutral-900">
									{role.position}
								</Text.Body>
								<Text.Body2 className="flex items-center gap-1.5 text-sm text-(--color-text-subtle-on-light)">
									{role.date.start} - {role.date.end}
									&nbsp; :: &nbsp;
									{role.location}
								</Text.Body2>
							</div>
						</div>
					);
				})}
			</div>

			<Text.Body2 className="shrink-0 text-(--color-text-subtle-on-light)">
				{experience.company}
			</Text.Body2>
		</li>
	);
}
