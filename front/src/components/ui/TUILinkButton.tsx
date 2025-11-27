import { Globe } from 'lucide-react';
import Github from '@/assets/github.svg';
import { cn } from '@/libs/utils';

type Variants = "github" | "website" | "none";

interface LinkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Variants
}

function getLogo(variant?: Variants) {
	switch (variant){
		case "github":
			return <img src={Github} alt="github logo" className='self-start'/>;
		case "website":
			return <Globe className='self-start'/>
		case "none":
		default:
			return null;
	}
}

function getStyleVariant(variant?: Variants): string {
	const defaultStyle: string = "cursor-pointer p-4 flex items-center border-1 flex w-full text-center ";
	switch (variant) {
		case "github":
			return defaultStyle + "border-(--black) hover:bg-(--black) hover:text-(--white)";
		case "website":
			return defaultStyle + "border-(--purple) hover:bg-(--purple) hover:text-(--white)";
		case "none":
		default:
			return defaultStyle + "border-(--white) hover:bg-(--white) hover:text-(--black)";
	}
}
export function LinkButton(props: LinkButtonProps) {
	const variant = props.variant;
	delete props.variant;

	const className = cn(getStyleVariant(variant), props.className,)
	delete props.className;

	return (
		<button {...props} className={className}>
			{
				getLogo(variant)
			}
			{props.children}
		</button>
	)
}
