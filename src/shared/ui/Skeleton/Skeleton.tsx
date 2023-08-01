import { CSSProperties, memo, ReactElement } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
	className?: string;
	width?: string | number;
	height?: string | number;
	border?: string;
	margin?: string | number;
}

export const Skeleton = memo((props: SkeletonProps): ReactElement => {
	const { className, width, height, border, margin } = props;

	const style: CSSProperties = {
		width,
		height,
		margin,
		borderRadius: border,
	};

	return (
		<div
			style={style}
			className={classNames(styles.Skeleton, {}, [className])}
		></div>
	);
});
