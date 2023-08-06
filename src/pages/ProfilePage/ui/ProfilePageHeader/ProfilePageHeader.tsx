import {
	getProfileData,
	getProfileReadonly,
	profileActions,
	updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader = ({
	className,
}: ProfilePageHeaderProps): React.ReactElement => {
	const { t } = useTranslation('profile');
	const authData = useSelector(getUserAuthData);
	const profileData = useSelector(getProfileData);
	const canEdit = authData?.id === profileData?.id;

	const readonly = useSelector(getProfileReadonly);
	const dispatch = useAppDispatch();

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const onSaveEdit = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]);

	return (
		<div
			className={classNames(styles.ProfileHeader, {}, [className])}
		>
			<Text title={t('Профиль')} />
			{canEdit && (
				<div className={styles.btnsWrapper}>
					{readonly ? (
						<Button
							theme={ButtonTheme.OUTLINE}
							className={styles.editBtn}
							onClick={onEdit}
						>
							{t('Редактировать')}
						</Button>
					) : (
						<>
							<Button
								theme={ButtonTheme.OUTLINE_RED}
								className={styles.editBtn}
								onClick={onCancelEdit}
							>
								{t('Отменить')}
							</Button>
							<Button
								theme={ButtonTheme.OUTLINE}
								className={styles.editBtn}
								onClick={onSaveEdit}
							>
								{t('Сохранить')}
							</Button>
						</>
					)}
				</div>
			)}
		</div>
	);
};
