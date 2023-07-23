import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
	className?: string;
	value?: Country;
	onChange?: (value: Country) => void;
	readonly?: boolean;
}

const option = [
	{ value: Country.Russia, content: Country.Russia },
	{ value: Country.Belarus, content: Country.Belarus },
	{ value: Country.Kazakhstan, content: Country.Kazakhstan },
	{ value: Country.Armenia, content: Country.Armenia },
];

export const CountrySelect = memo(
	(props: CountrySelectProps): React.ReactElement => {
		const { className, value, onChange, readonly } = props;
		const { t } = useTranslation();

		const onChangeHandler = useCallback(
			(value: string) => {
				onChange?.(value as Country);
			},
			[onChange]
		);

		return (
			<Select
				label={t('Укажите страну')}
				options={option}
				onChange={onChangeHandler}
				value={value}
				readonly={readonly}
				className={classNames('', {}, [className])}
			/>
		);
	}
);
