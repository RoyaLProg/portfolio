import type { PropsWithChildren } from "react";

interface ContentContainerProps extends PropsWithChildren {
	show: boolean;
}

export function ContentContainer(props: ContentContainerProps) {

	return (
		<div className={` ${props.show ? "block" : "hidden"} mt-12 mx-auto w-11/12 border-4 p-2 border-(--gutter-fg-grey)`}>
			{props.children}
		</div>
	)
}
