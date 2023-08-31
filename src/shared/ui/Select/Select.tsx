import React, { ChangeEvent, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import styles from './Select.module.scss';

export interface SelectOption<T extends string> {
	value: T;
	content: string;
}

interface SelectProps<T extends string> {
	className?: string;
	label?: string;
	options?: Array<SelectOption<T>>;
	value?: T;
	readonly?: boolean;
	onChange?: (value: T) => void;
}

export const Select = <T extends string>(
	props: SelectProps<T>
): React.ReactElement => {
	const { label, className, value, onChange, options, readonly } =
		props;

	const optionsList = useMemo(() => {
		return options?.map(o => (
			<option key={o.value} value={o.value} className={styles.option}>
				{o.content}
			</option>
		));
	}, [options]);

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value as T);
	};

	const mods: Mods = {};

	return (
		<div className={classNames(styles.Wrapper, mods, [className])}>
			{label && <span className={styles.label}>{`${label}>`}</span>}
			<select
				value={value}
				onChange={onChangeHandler}
				disabled={readonly}
				className={styles.select}
			>
				{optionsList}
			</select>
		</div>
	);
};
