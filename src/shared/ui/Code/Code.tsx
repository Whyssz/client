import { useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import styles from './Code.module.scss';

interface CodeProps {
	className?: string;
	text: string;
}

export const Code = (props: CodeProps): React.ReactElement => {
	const { className, text } = props;

	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(text);
	}, [text]);

	return (
		<div className={styles.wrapper}>
			<Button
				onClick={onCopy}
				className={styles.copyBtn}
				theme={ButtonTheme.CLEAR}
			>
				<CopyIcon className={styles.copyIcon} />
			</Button>
			<pre className={classNames(styles.code, {}, [className])}>
				<code>{text}</code>
			</pre>
		</div>
	);
};
