import type { PropsWithChildren } from "react";

export function Badge(props: PropsWithChildren) {
	return (
		<div className="p-1 border-2 border-(--green) text-(--green) flex justify-center items-end text-[6px] md:text-xs">
			{props.children}
		</div>
	);
}
