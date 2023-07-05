import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Loader.module.scss';

interface LoaderProps {
	className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
	return (
		<div className={classNames(styles.Loader)}>
			<div className={styles.loaderInner}>
				<div />
				<div />
				<div />
			</div>
		</div>
	);
};
