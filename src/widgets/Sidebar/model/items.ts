import AboutIcon from 'shared/assets/icons/clarity_list.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';

export interface SidebarItemType {
	path: string;
	text: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
	authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
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
	{
		path: RoutePath.profile,
		text: 'Профиль',
		Icon: ProfileIcon,
		authOnly: true,
	},
];
