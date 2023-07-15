import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({
	className,
	isOpen,
	...rest
}) => {
	return (
		<Modal
			lazy
			isOpen={isOpen}
			className={classNames('', {}, [className])}
			{...rest}
		>
			<Suspense fallback={<Loader />}>
				<LoginFormAsync isOpen={isOpen} />
			</Suspense>
		</Modal>
	);
};
