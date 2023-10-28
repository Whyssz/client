import { StateSchema } from 'app/providers/StoreProvider';
import {
	memo,
	MutableRefObject,
	ReactElement,
	ReactNode,
	UIEvent,
	useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import { getScrollByPath } from '../ScrollSave/model/selectors/scrollSelector';
import { scrollActions } from '../ScrollSave/model/slice/scrollSlice';
import { PAGE_ID } from './constants';
import styles from './Page.module.scss';

interface PageProps {
	className?: string;
	children: ReactNode;
	onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps): ReactElement => {
	const { className, children, onScrollEnd } = props;
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();

	const scrollPosition = useSelector((state: StateSchema) =>
		getScrollByPath(state, pathname)
	);

	useInfiniteScroll({
		callback: onScrollEnd,
		wrapperRef,
		triggerRef,
	});

	const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

	useInitialEffect(
		() => {
			timeoutRef.current = setTimeout(() => {
				wrapperRef.current.scrollTop = scrollPosition;
			}, 100);
		},
		() => {
			clearTimeout(timeoutRef.current);
		}
	);

	const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
		dispatch(
			scrollActions.setScrollPosition({
				path: pathname,
				position: event.currentTarget.scrollTop,
			})
		);
	}, 500);

	return (
		<section
			ref={wrapperRef}
			onScroll={onScroll}
			className={classNames(styles.Page, {}, [className])}
			id={PAGE_ID}
		>
			{children}
			{onScrollEnd ? (
				<div className={styles.trigger} ref={triggerRef} />
			) : null}
		</section>
	);
});
