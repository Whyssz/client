import {
	ChangeEvent,
	InputHTMLAttributes,
	memo,
	useEffect,
	useRef,
	useState,
} from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type OmitInputAttributes = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends OmitInputAttributes {
	className?: string;
	value?: string | number;
	label?: string;
	autofocus?: boolean;
	isOpen?: boolean;
	readonly?: boolean;
	onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		label,
		autofocus,
		isOpen,
		readonly,
		...otherProps
	} = props;

	const [isFocused, setIsFocused] = useState(false);
	const [caretPosition, setCaretPosition] = useState(0);

	const inputRef = useRef<HTMLInputElement>(null);

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
		setCaretPosition(e.target.value.length);
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	const onBlur = () => {
		setIsFocused(false);
	};

	const onSelect = (e: any) => {
		setCaretPosition(e?.target?.selectionStart || 0);
	};

	const isCaretVisible = isFocused && !readonly;

	useEffect(() => {
		if (autofocus || isOpen) {
			setIsFocused(true);
			inputRef.current?.focus();
		}
	}, [autofocus, isOpen]);

	const mods: Mods = {
		[styles.readonly]: readonly,
	};

	return (
		<div
			className={classNames(styles.InputWrapper, mods, [className])}
		>
			{label && <label className={styles.label}>{`${label}>`}</label>}
			<div className={styles.caretWrapper}>
				<input
					ref={inputRef}
					readOnly={readonly}
					value={value}
					onChange={onChangeHandler}
					type={type}
					className={styles.input}
					onFocus={onFocus}
					onBlur={onBlur}
					onSelect={onSelect}
					{...otherProps}
				/>
				{isCaretVisible && (
					<span
						className={styles.caret}
						style={{ left: `${caretPosition * 9}px` }}
					></span>
				)}
			</div>
		</div>
	);
});
