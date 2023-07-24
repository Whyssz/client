import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Country, CountrySelect } from '../../../Country';
import { Currency, CurrencySelect } from '../../../Currency';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { Profile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	isLoading?: boolean;
	error?: string;
	onChangeFirstname?: (value?: string) => void;
	onChangeLastname?: (value?: string) => void;
	onChangeCity?: (value?: string) => void;
	onChangeAge?: (value?: number) => void;
	onChangeAvatar?: (value?: string) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeCurrency?: (value: Currency) => void;
	onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = memo(
	(props: ProfileCardProps): React.ReactElement => {
		const {
			className,
			data,
			isLoading,
			error,
			onChangeFirstname,
			onChangeLastname,
			onChangeCity,
			onChangeAge,
			onChangeAvatar,
			onChangeUsername,
			onChangeCurrency,
			onChangeCountry,
		} = props;

		const { t } = useTranslation('profile');
		const readonly = useSelector(getProfileReadonly);

		const onAgeValidate = useCallback(
			(e: string) => {
				const pattern = e.match(/\d+/g);
				if (pattern == null) {
					onChangeAge?.(0);
				} else {
					if (pattern[0] !== '') {
						onChangeAge?.(Number(pattern));
					}
				}
			},
			[onChangeAge]
		);

		if (error) {
			return (
				<div
					className={classNames(styles.ProfilePage, {}, [
						className,
						styles.error,
					])}
				>
					<Text
						theme={TextTheme.ERROR}
						title={t('Произошла ошибка при загрузке профиля')}
						text={t('Попробуйте обновить страницу')}
						align={TextAlign.CENTER}
					/>
				</div>
			);
		}

		if (isLoading) {
			return (
				<div
					className={classNames(styles.ProfilePage, {}, [
						className,
						styles.loading,
					])}
				>
					<Loader />
				</div>
			);
		}

		const mods: Mods = {
			[styles.editing]: !readonly,
		};

		return (
			<div
				className={classNames(styles.ProfilePage, mods, [className])}
			>
				<div className={styles.data}>
					{data?.avatar && (
						<div className={styles.avatarWrapper}>
							<Avatar
								src={data.avatar}
								size={200}
								alt='Profile avatar'
							/>
						</div>
					)}
					<Input
						className={styles.input}
						value={data?.first}
						label={t('Ваше имя')}
						onChange={onChangeFirstname}
						readonly={readonly}
					/>
					<Input
						className={styles.input}
						value={data?.lastname}
						label={t('Ваша фамилия')}
						onChange={onChangeLastname}
						readonly={readonly}
					/>
					<Input
						className={styles.input}
						value={data?.city}
						label={t('Ваш город')}
						onChange={onChangeCity}
						readonly={readonly}
					/>
					<Input
						className={styles.input}
						value={data?.age}
						label={t('Ваш возраст')}
						onChange={onAgeValidate}
						readonly={readonly}
					/>
					<Input
						className={styles.input}
						value={data?.username}
						label={t('Введите имя пользователя')}
						onChange={onChangeUsername}
						readonly={readonly}
					/>
					<Input
						className={styles.input}
						value={data?.avatar}
						label={t('Введите ссылку на аватар')}
						onChange={onChangeAvatar}
						readonly={readonly}
					/>
					<CurrencySelect
						className={styles.input}
						value={data?.currency}
						onChange={onChangeCurrency}
						readonly={readonly}
					/>
					<CountrySelect
						className={styles.input}
						value={data?.country}
						onChange={onChangeCountry}
						readonly={readonly}
					/>
				</div>
			</div>
		);
	}
);
