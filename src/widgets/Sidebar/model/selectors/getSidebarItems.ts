import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import AboutIcon from 'shared/assets/icons/about.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
	getUserAuthData,
	userData => {
		const sidebarItemsList: SidebarItemType[] = [
			{
				path: RoutePath.main,
				text: 'Страница главная',
				Icon: MainIcon,
			},
			{
				path: RoutePath.about,
				text: 'Страница о нас',
				Icon: AboutIcon,
			},
		];

		if (userData) {
			sidebarItemsList.push(
				{
					path: RoutePath.profile + userData.id,
					text: 'Профиль',
					Icon: ProfileIcon,
					authOnly: true,
				},
				{
					path: RoutePath.articles,
					text: 'Статья',
					Icon: ArticleIcon,
					authOnly: true,
				}
			);
		}

		return sidebarItemsList;
	}
);
