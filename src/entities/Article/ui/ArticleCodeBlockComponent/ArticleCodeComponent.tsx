import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleCodeBlockComponentProps {
	className?: string;
}

export const ArticleDetails = (
	props: ArticleCodeBlockComponentProps
): React.ReactElement | null => {
	const { className } = props;

	return <div className={classNames('', {}, [className])}></div>;
};
