import { useTheme } from 'app/providers/ThemeProvider';
import {
	MouseEventHandler,
	ReactNode,
	memo,
	useCallback,
	useEffect,
	useRef,
	useState,
	type FC,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
	className?: string;
	isOpen: boolean;
	onClose?: () => void;
	children: ReactNode | string;
}

const CLOSE_DELAY = 200;

export const Modal: FC<ModalProps> = memo(
	({ className, children, isOpen, onClose }: ModalProps) => {
		const [isClosing, setIsClosing] = useState(false);
		const timerRef = useRef<ReturnType<typeof setTimeout>>();

		const { theme } = useTheme();

		const mods: Record<string, boolean> = {
			[styles.opened]: isOpen,
			[styles.closing]: isClosing,
		};

		const onContentClick: MouseEventHandler<HTMLDivElement> = e => {
			e.stopPropagation();
		};

		const closeHandler = useCallback(() => {
			if (onClose) {
				setIsClosing(true);
				timerRef.current = setTimeout(() => {
					onClose();
					setIsClosing(false);
				}, CLOSE_DELAY);
			}
		}, [onClose]);

		const onKeyDown = useCallback(
			(e: KeyboardEvent) => {
				if (e.key === 'Escape') {
					closeHandler();
				}
			},
			[closeHandler]
		);

		useEffect(() => {
			if (isOpen) {
				window.addEventListener('keydown', onKeyDown);
			}

			return () => {
				clearTimeout(timerRef.current);
			};
		}, [isOpen, onKeyDown]);

		return (
			<Portal>
				<div className={classNames(styles.Modal, mods, [className])}>
					<div className={styles.overlay} onClick={closeHandler}>
						<div className={styles.content} onClick={onContentClick}>
							{children}
						</div>
					</div>
				</div>
			</Portal>
		);
	}
);
