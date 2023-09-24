import { ArticleType } from 'entities/Article/model/types/article.types';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

interface ArticleTypeTabsProps {
	className?: string;
	value?: ArticleType;
	onChangeType?: (type: ArticleType) => void;
}

export const ArticleTypeTabs = (
	props: ArticleTypeTabsProps
): React.ReactElement => {
	const { className, value, onChangeType } = props;
	const { t } = useTranslation();

	const typeTabs = useMemo<TabItem[]>(
		() => [
			{ value: ArticleType.ALL, content: t('Все статьи') },
			{ value: ArticleType.IT, content: t('Айти') },
			{ value: ArticleType.ECONOMIC, content: t('Экономика') },
			{ value: ArticleType.SCIENCE, content: t('Наука') },
		],
		[t]
	);

	const onTypeClick = useCallback(
		(tab: TabItem) => {
			onChangeType?.(tab.value);
		},
		[onChangeType]
	);

	return (
		<Tabs
			tabs={typeTabs}
			value={value}
			onTabClick={onTypeClick}
			className={classNames('', {}, [className])}
		></Tabs>
	);
};
