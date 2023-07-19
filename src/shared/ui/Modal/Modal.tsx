import {
	MouseEventHandler,
	ReactNode,
	memo,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
	className?: string;
	isOpen: boolean;
	onClose?: () => void;
	children: ReactNode | string;
	lazy?: boolean;
}

const CLOSE_DELAY = 200;

export const Modal = memo(
	(props: ModalProps): React.ReactElement | null => {
		const { className, children, isOpen, onClose, lazy } = props;

		const [isMounted, setIsMounted] = useState(false);
		const [isClosing, setIsClosing] = useState(false);
		const timerRef = useRef<ReturnType<typeof setTimeout>>();

		const mods: Mods = {
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

		useEffect(() => {
			if (isOpen) {
				setIsMounted(true);
			}
		}, [isOpen]);

		if (lazy && !isMounted) {
			return null;
		}

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
