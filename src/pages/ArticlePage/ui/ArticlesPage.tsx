import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlesPage.module.scss';
interface ArticlesPageProps {
	className?: string;
}

const ArticlesPage = (
	props: ArticlesPageProps
): React.ReactElement => {
	const { className } = props;

	return (
		<div
			className={classNames(styles.ArticlesPage, {}, [className])}
		></div>
	);
};

export default memo(ArticlesPage);
