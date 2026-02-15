import type { PropsWithChildren } from "react";
import { cn } from "@/libs/utils";

interface ContentContainerProps extends PropsWithChildren {
	show: boolean;
	className?: string;
}

export function ContentContainer(props: ContentContainerProps) {

	let style:string = ` ${props.show ? "block" : "hidden"} mt-12 mx-auto w-11/12 border-4 p-2 border-(--gutter-fg-grey)`;
	if (props.className)
		style = cn(style, props.className);

	return (
		<div className={style}>
			{props.children}
		</div>
	)
}
