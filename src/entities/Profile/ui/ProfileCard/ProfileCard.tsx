import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
}

export const ProfileCard = ({
	className,
}: ProfileCardProps): React.ReactElement => {
	const { t } = useTranslation('profile');
	const profileData = useSelector(getProfileData);
	const profileError = useSelector(getProfileError);
	const profileIsLoding = useSelector(getProfileIsLoading);

	return (
		<div className={classNames(styles.ProfilePage, {}, [className])}>
			<div className={styles.header}>
				<Text title={t('Профиль')} />
				<Button
					theme={ButtonTheme.OUTLINE}
					className={styles.editBtn}
				>
					{t('Редактировать')}
				</Button>
			</div>
			<div className={styles.data}>
				<Input
					className={styles.input}
					value={profileData?.first}
					label={t('Ваше имя')}
				/>
				<Input
					className={styles.input}
					value={profileData?.lastname}
					label={t('Ваша фамилия')}
				/>
			</div>
		</div>
	);
};
