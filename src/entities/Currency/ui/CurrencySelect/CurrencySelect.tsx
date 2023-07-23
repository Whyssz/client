import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
	className?: string;
	value?: Currency;
	onChange?: (value: Currency) => void;
	readonly?: boolean;
}

const option = [
	{ value: Currency.RUB, content: Currency.RUB },
	{ value: Currency.EUR, content: Currency.EUR },
	{ value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
	(props: CurrencySelectProps): React.ReactElement => {
		const { className, value, onChange, readonly } = props;
		const { t } = useTranslation();

		const onChangeHandler = useCallback(
			(value: string) => {
				onChange?.(value as Currency);
			},
			[onChange]
		);

		return (
			<Select
				label={t('Укажите валюту')}
				options={option}
				onChange={onChangeHandler}
				value={value}
				readonly={readonly}
				className={classNames('', {}, [className])}
			/>
		);
	}
);
