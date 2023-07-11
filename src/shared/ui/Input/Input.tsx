import {
	ChangeEvent,
	InputHTMLAttributes,
	memo,
	useEffect,
	useRef,
	useState,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Input.module.scss';

type OmitInputAttributes = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>;

interface InputProps extends OmitInputAttributes {
	className?: string;
	value?: string;
	label?: string;
	autofocus?: boolean;
	isOpen?: boolean;
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

	useEffect(() => {
		if (autofocus || isOpen) {
			setIsFocused(true);
			inputRef.current.focus();
		}
	}, [autofocus, isOpen]);

	return (
		<div className={classNames(styles.InputWrapper, {}, [className])}>
			{label && <label className={styles.label}>{`${label}>`}</label>}
			<div className={styles.caretWrapper}>
				<input
					ref={inputRef}
					value={value}
					onChange={onChangeHandler}
					type={type}
					className={styles.input}
					onFocus={onFocus}
					onBlur={onBlur}
					onSelect={onSelect}
					{...otherProps}
				/>
				{isFocused && (
					<span
						className={styles.caret}
						style={{ left: `${caretPosition * 9}px` }}
					></span>
				)}
			</div>
		</div>
	);
});
