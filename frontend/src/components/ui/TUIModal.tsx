import { cn } from "@/libs/utils";
import { createContext, type ComponentProps, type PropsWithChildren, useState, type Dispatch, type SetStateAction, useContext } from "react";

interface TUIModalContextProps {
	open: boolean,
	setOpen: Dispatch<SetStateAction<boolean>>;
}

const TUIModalContext = createContext<TUIModalContextProps | null>(null)

export function TUIModal(props: PropsWithChildren) {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<TUIModalContext.Provider value={{open, setOpen}}>
			{props.children}
		</TUIModalContext.Provider >
	);
}

export function TUIModalOpenButton({className, onClick, ...props}: ComponentProps<'button'>) {
	const ModalCtx = useContext(TUIModalContext);

	if (ModalCtx === null) return ;

	const defaultClass = "";
	className = cn(defaultClass, className);

	function click(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		ModalCtx?.setOpen(true);
		if (onClick)
			onClick(e)
	}

	return (
		<button
			{...props}
			className={className}
			onClick={click}
		>
		</button>
	)
}

export function TUIModalCloseButton({className, onClick, children, ...props}: ComponentProps<'button'>) {
	const ModalCtx = useContext(TUIModalContext);

	if (ModalCtx === null) return ;

	const defaultClass = "p-2 my-4 border border-(--cyan) hover:bg-(--cyan) hover:text-(--black) self-center absolute bottom-0";
	className = cn(defaultClass, className);

	function click(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		ModalCtx?.setOpen(false);
		if (onClick)
			onClick(e)
	}

	return (
		<button
			{...props}
			className={className}
			onClick={click}
		>
			{children ?? "close"}
		</button>
	)
}

export function TUIModalContent({className, ...props}: ComponentProps<'div'>) {
	const ModalCtx = useContext(TUIModalContext);

	if (ModalCtx === null) return ;
	const defaultClass = `flex m-2 p-2 bg-(--black) border border-(--gutter-gray) max-w-4/5 min-w-2/5 max-h-4/5 relative min-h-2/5 flex-col overflow-y-scroll place-items-center`;
	className = cn(defaultClass, className);

	return (
		<div className={`size-full absolute top-0 left-0 ${ModalCtx.open ? 'flex' : 'hidden'} flex-column justify-center items-center`} onClick={() => {ModalCtx.setOpen(false)}}>
			<div
				{...props}
				className={className}
				onClick={(e) => { e.stopPropagation() }}
			/>
		</div>
	);
}

export function TUIModalTitle({className, ...props}: ComponentProps<'h1'>) {
	const defaultClassName = "text-(--yellow) text-xl font-bold my-4";
	className = cn(defaultClassName, className);

	return <h1 {...props} className={className}/>;
}

// openbutton
// closebutton
// title
// content
//
// <TUIModal>
//	<TUIModalOpenButton>text</TUIModalOpenButton>
//	<TUIModalContent>
//		<TUIModalTitle> Text </TUIModalTitle>
//		[...]
//		<TUICloseButton> Text </TUICloseButton>
//	</TUIModalContent>
// </TUIModal>
//
