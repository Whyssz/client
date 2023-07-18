import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '../model/slice/profileSlice';

const reducers: ReducersList = {
	profile: profileReducer,
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
	const { t } = useTranslation();

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames('', {}, [className])}>
				{t('Профиль')}
			</div>
		</DynamicModuleLoader>
	);
};
export default ProfilePage;
