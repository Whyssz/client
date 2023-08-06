import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlesPage.module.scss';
interface ArticlesPageProps {
	className?: string;
}

const ArticlesPage = (
	props: ArticlesPageProps
): React.ReactElement => {
	const { className } = props;
	const navigate = useNavigate();

	return (
		<div className={classNames(styles.ArticlesPage, {}, [className])}>
			<button
				onClick={() => {
					navigate('/articles/1');
				}}
			// eslint-disable-next-line i18next/no-literal-string
			>
				click
			</button>
		</div>
	);
};

export default memo(ArticlesPage);
