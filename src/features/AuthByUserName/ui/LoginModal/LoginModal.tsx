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
	onClose,
	...rest
}) => {
	return (
		<Modal
			lazy
			isOpen={isOpen}
			onClose={onClose}
			className={classNames('', {}, [className])}
			{...rest}
		>
			<Suspense fallback={<Loader />}>
				<LoginFormAsync isOpen={isOpen} onSuccess={onClose} />
			</Suspense>
		</Modal>
	);
};
