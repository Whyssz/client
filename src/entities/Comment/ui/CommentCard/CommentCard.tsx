import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment.types';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
	className?: string;
	isLoading?: boolean;
	comment?: Comment;
}

export const CommentCard = (
	props: CommentCardProps
): React.ReactElement | null => {
	const { className, comment, isLoading } = props;

	if (isLoading) {
		return (
			<div
				className={classNames(styles.CommentCard, {}, [
					className,
					styles.loading,
				])}
			>
				<div className={styles.header}>
					<Skeleton width={30} height={30} border='50%' />
					<Skeleton
						className={styles.username}
						width={100}
						height={16}
					/>
				</div>
				<Skeleton
					className={styles.text}
					width={'100%'}
					height={50}
				/>
			</div>
		);
	}

	if (!comment) {
		return null;
	}

	return (
		<div className={classNames(styles.CommentCard, {}, [className])}>
			<AppLink
				to={`${RoutePath.profile}${comment.user.id}`}
				className={styles.header}
			>
				{comment.user.avatar ? (
					<Avatar size={30} src={comment.user.avatar} />
				) : null}
				<Text
					className={styles.username}
					title={comment.user.username}
				/>
			</AppLink>
			<Text className={styles.text} text={comment.text} />
		</div>
	);
};
