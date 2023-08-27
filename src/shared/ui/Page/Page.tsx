import {
	memo,
	MutableRefObject,
	ReactElement,
	ReactNode,
	useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
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

	useInfiniteScroll({
		callback: onScrollEnd,
		wrapperRef,
		triggerRef,
	});

	return (
		<section
			ref={wrapperRef}
			className={classNames(styles.Page, {}, [className])}
		>
			{children}
			<div ref={triggerRef} />
		</section>
	);
});
