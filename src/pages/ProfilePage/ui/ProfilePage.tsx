import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
	ProfileCard,
	fetchProfileData,
	getProfileError,
	getProfileForm,
	getProfileIsLoading,
	profileActions,
	profileReducer,
} from 'entities/Profile';
import { ReactElement, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
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
	const dispatch = useAppDispatch();
	const formData = useSelector(getProfileForm);
	const profileError = useSelector(getProfileError);
	const profileIsLoading = useSelector(getProfileIsLoading);

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

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
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames('', {}, [className])}>
				<ProfilePageHeader />
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
			</div>
		</DynamicModuleLoader>
	);
};
export default ProfilePage;
