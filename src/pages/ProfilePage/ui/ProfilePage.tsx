import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
	ProfileCard,
	fetchProfileData,
	getProfileError,
	getProfileForm,
	getProfileIsLoading,
	getProfileValidateErrors,
	profileActions,
	profileReducer,
} from 'entities/Profile';
import { ValidateProfileErrors } from 'entities/Profile/model/types/profile';
import { ReactElement, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
	profile: profileReducer,
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = ({
	className,
}: ProfilePageProps): ReactElement => {
	const { id } = useParams<{ id: string }>();
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
	const formData = useSelector(getProfileForm);
	const profileError = useSelector(getProfileError);
	const profileIsLoading = useSelector(getProfileIsLoading);
	const validateErrors = useSelector(getProfileValidateErrors);

	const validateErrorsTranslates = {
		[ValidateProfileErrors.INCORRECT_USER_DATA]: t(
			'Имя и Фамилия обязательны'
		),
		[ValidateProfileErrors.INCORRECT_COUNTRY]: t(
			'Некорректный регион'
		),
		[ValidateProfileErrors.INCORRECT_AGE]: t('Некорректный возраст'),
		[ValidateProfileErrors.NO_DATA]: t('Данные не указаны'),
		[ValidateProfileErrors.SERVER_ERROR]: t(
			'Серверная ошибка при сохранении'
		),
	};

	useInitialEffect(() => {
		if (id) {
			dispatch(fetchProfileData(id));
		}
	});

	const onChangeFirstname = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ first: value || '' }));
		},
		[dispatch]
	);

	const onChangeLastname = useCallback(
		(value?: string) => {
			dispatch(
				profileActions.updateProfile({ lastname: value || '' })
			);
		},
		[dispatch]
	);

	const onChangeCity = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ city: value || '' }));
		},
		[dispatch]
	);

	const onChangeAge = useCallback(
		(value?: number) => {
			dispatch(
				profileActions.updateProfile({
					age: value || 0,
				})
			);
		},
		[dispatch]
	);

	const onChangeUsername = useCallback(
		(value?: string) => {
			dispatch(
				profileActions.updateProfile({ username: value || '' })
			);
		},
		[dispatch]
	);

	const onChangeAvatar = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ avatar: value || '' }));
		},
		[dispatch]
	);

	const onChangeCountry = useCallback(
		(country: Country) => {
			dispatch(profileActions.updateProfile({ country }));
		},
		[dispatch]
	);

	const onChangeCurrency = useCallback(
		(currency: Currency) => {
			dispatch(profileActions.updateProfile({ currency }));
		},
		[dispatch]
	);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<Page className={classNames('', {}, [className])}>
				<ProfilePageHeader />
				{validateErrors?.length &&
					validateErrors.map(err => (
						<Text
							key={err}
							theme={TextTheme.ERROR}
							text={validateErrorsTranslates[err]}
						/>
					))}
				<ProfileCard
					data={formData}
					isLoading={profileIsLoading}
					error={profileError}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeCity={onChangeCity}
					onChangeAge={onChangeAge}
					onChangeUsername={onChangeUsername}
					onChangeAvatar={onChangeAvatar}
					onChangeCountry={onChangeCountry}
					onChangeCurrency={onChangeCurrency}
				/>
			</Page>
		</DynamicModuleLoader>
	);
};
export default ProfilePage;
