import { ChangeEvent, memo, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import styles from './Select.module.scss';

interface SelectOption {
	value: string;
	content: string;
}

interface SelectProps {
	className?: string;
	label?: string;
	options?: SelectOption[];
	value?: string;
	readonly?: boolean;
	onChange?: (value: string) => void;
}

export const Select = memo(
	(props: SelectProps): React.ReactElement => {
		const { label, className, value, onChange, options, readonly } =
			props;

		const optionsList = useMemo(() => {
			return options?.map(o => (
				<option
					key={o.value}
					value={o.value}
					className={styles.option}
				>
					{o.content}
				</option>
			));
		}, [options]);

		const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
			onChange?.(e.target.value);
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
	}
);
