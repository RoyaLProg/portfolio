import { Globe, Github } from 'lucide-react';
import { cn } from '@/libs/utils';

type Variants = "github" | "website" | "none";

interface LinkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Variants
}

function getLogo(variant?: Variants) {
	switch (variant){
		case "github":
			return <Github className='absolute left-4 stroke-(--comment-grey)'/>;
		case "website":
			return <Globe className='absolute left-4 stroke-(--purple)' color={undefined}/>
		case "none":
		default:
			return null;
	}
}

function getStyleVariant(variant?: Variants): string {
	const defaultStyle: string = "cursor-pointer p-4 flex grow border-1 justify-center relative w-full ";
	switch (variant) {
		case "github":
			return defaultStyle + "border-(--comment-grey) hover:bg-(--comment-grey) hover:[&>svg]:stroke-(--white)";
		case "website":
			return defaultStyle + "border-(--purple) hover:bg-(--purple) hover:[&>svg]:stroke-(--black) hover:text-(--black)";
		case "none":
		default:
			return defaultStyle + "border-(--white) hover:bg-(--white) hover:text-(--black)";
	}
}
export function LinkButton(props: LinkButtonProps) {
	const variant = props.variant;

	const className = cn(getStyleVariant(variant), props.className,)
	delete props.className;

	return (
		<button {...props} className={className}>
			{
				getLogo(variant)
			}
			{ props.children }
		</button>
	)
}
