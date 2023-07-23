import { CSSProperties, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import styles from './Avatar.module.scss';

interface AvatarProps {
	className?: string;
	src?: string;
	size?: number;
	alt?: string;
}

export const Avatar = (props: AvatarProps): React.ReactElement => {
	const { className, src, size = 100, alt = 'Картинка' } = props;

	const avatarStyle = useMemo<CSSProperties>(
		() => ({
			width: size,
			height: size,
		}),
		[size]
	);

	const mods: Mods = {};

	return (
		<img
			src={src}
			alt={alt}
			style={avatarStyle}
			className={classNames(styles.Avatar, mods, [className])}
		/>
	);
};
