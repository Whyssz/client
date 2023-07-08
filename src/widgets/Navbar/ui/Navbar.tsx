/* eslint-disable i18next/no-literal-string */
import { useCallback, useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import styles from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const [isAuthModal, setIsAuthModal] = useState(false);

	const { t } = useTranslation();

	const onToggleModal = useCallback(() => {
		setIsAuthModal(prev => !prev);
	}, []);

	return (
		<div className={classNames(styles.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				onClick={onToggleModal}
				className={styles.links}
			>
				{t('Войти')}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Corrupti voluptas quos ab perspiciatis assumenda deserunt
				maiores tenetur, id quis dolorem, doloribus optio mollitia
				fuga! Quod facere vitae ducimus quisquam totam magnam impedit
				porro asperiores nihil, doloremque optio. Harum aperiam
				fugiat, facilis nulla neque eveniet nobis laborum est
				repudiandae ullam veniam laboriosam, error ex ab mollitia amet
				ipsam, a incidunt id cum minima suscipit commodi alias
				officiis! Fugiat consequatur voluptas optio consectetur alias
				repudiandae laborum doloremque voluptatem dolor aliquam
				accusamus obcaecati a quidem quod quisquam cumque, adipisci
				similique? Deserunt, aliquam ni hil? Officiis cupiditate eius,
				est sit itaque nam ullam nulla adipisci inventore numquam
				vitae aspernatur qui, sunt architecto id, debitis minus dolor
				dolorem in unde suscipit. Tempora, hic. Ut, deleniti dolores
				vel ab nobis modi soluta corrupti fugit architecto quo! Amet
				repudiandae aliquid molestiae ipsum aspernatur velit minus
				possimus quibusdam dicta dolor eaque, neque porro officiis
				architecto, placeat error, in provident nobis explicabo!
				Aliquam repellendus quo corporis voluptates aliquid accusamus
				quod quisquam incidunt ratione consequatur excepturi in harum
				quis perspiciatis, iste officiis, voluptatibus cupiditate
				adipisci temporibus perferendis sit. Quasi voluptatibus unde
				in ex numquam cumque deleniti, beatae velit itaque est dolores
				blanditiis obcaecati alias totam neque, facilis, soluta error
				atque tenetur.
			</Modal>
		</div>
	);
};
