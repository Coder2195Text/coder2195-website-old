import Link from "next/link";
import { FC } from "react";
import styles from "./IconButton.module.css";

interface Props {
	disabled?: boolean;
	src: string;
	href: string;
	target?: string;
	size?: string;
	color?: string;
}

const IconButton: FC<Props> = ({
	disabled,
	href,
	target,
	size,
	src
}) => {
	if (!size) size = "42pt";
	const button = (
		<button
			style={{
				fontSize: size,
				height: size,
				width: size,
				borderRadius: size,
				backgroundImage: `url("${src}")`
			}}
			className={styles.button}
			disabled={disabled}
		>
		</button>
	);
	if (disabled) return button;
	return (
		<Link href={href}>
			<a target={target}>{button}</a>
		</Link>
	);
};

export default IconButton;
