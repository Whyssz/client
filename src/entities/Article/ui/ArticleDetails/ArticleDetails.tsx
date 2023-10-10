import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/getArticleDetails';
import { articleDetailsReducer } from 'entities/Article/model/slices/articleDetailsSlice';
import { fetchArticleById } from 'entities/Article/service/fetchArticleById/fetchArticleById';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import {
	ArticleBlock,
	ArticleBlockType,
} from '../../model/types/article.types';
import { ArticleCodeComponent } from '../ArticleCodeComponent/ArticleCodeComponent';
import { ArticleImageComponent } from '../ArticleImageComponent/ArticleImageComponent';
import { ArticleTextComponent } from '../ArticleTextComponent/ArticleTextComponent';
import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
	className?: string;
	id: string;
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(
	(props: ArticleDetailsProps): React.ReactElement => {
		const { className, id } = props;

		const article = useSelector(getArticleDetailsData);
		const isLoading = useSelector(getArticleDetailsIsLoading);
		const error = useSelector(getArticleDetailsError);

		const dispatch = useAppDispatch();

		const renderBlock = useCallback((block: ArticleBlock) => {
			switch (block.type) {
				case ArticleBlockType.CODE:
					return (
						<ArticleCodeComponent
							key={block.id}
							className={styles.block}
							block={block}
						/>
					);
				case ArticleBlockType.IMAGE:
					return (
						<ArticleImageComponent
							key={block.id}
							className={styles.block}
							block={block}
						/>
					);
				case ArticleBlockType.TEXT:
					return (
						<ArticleTextComponent
							key={block.id}
							className={styles.block}
							block={block}
						/>
					);
				default:
					return null;
			}
		}, []);

		useEffect(() => {
			if (__PROJECT__ !== 'storybook') {
				dispatch(fetchArticleById(id));
			}
		}, [dispatch, id]);

		let content;

		if (isLoading) {
			content = (
				<>
					<Skeleton
						className={styles.avatar}
						width={200}
						height={200}
						border='50%'
					/>
					<Skeleton
						className={styles.title}
						width={300}
						height={32}
					/>
					<Skeleton
						className={styles.skeleton}
						width={600}
						height={24}
					/>
					<Skeleton
						className={styles.skeleton}
						width='100%'
						height={200}
					/>
					<Skeleton
						className={styles.skeleton}
						width='100%'
						height={200}
					/>
				</>
			);
		} else if (error) {
			content = <Text title={error} align={TextAlign.CENTER} />;
		} else {
			content = (
				<>
					<div className={styles.avatarWrapper}>
						<Avatar
							src={article?.img}
							size={200}
							className={styles.avatar}
						/>
						<Text
							className={styles.title}
							title={article?.title}
							text={article?.subtitle}
							size={TextSize.L}
						/>
					</div>
					<div className={styles.articleInfo}>
						<Icon Svg={EyeIcon} className={styles.icon} />
						<Text text={String(article?.views)} />
					</div>
					<div className={styles.articleInfo}>
						<Icon Svg={CalendarIcon} className={styles.icon} />
						<Text text={article?.createdAt} />
					</div>
					{article?.blocks.map(renderBlock)}
				</>
			);
		}

		return (
			<DynamicModuleLoader reducers={reducers}>
				<div
					className={classNames(styles.ArticleDetails, {}, [
						className,
					])}
				>
					{content}
				</div>
			</DynamicModuleLoader>
		);
	}
);
