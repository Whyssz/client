import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Icon.module.scss';

interface TextProps {
	className?: string;
	Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: TextProps) => {
	const { Svg, className } = props;

	return <Svg className={classNames(styles.Icon, {}, [className])} />;
});
