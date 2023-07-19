import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Loader.module.scss';

interface LoaderProps {
	className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
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
