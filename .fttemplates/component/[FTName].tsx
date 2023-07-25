import styles from './[FTName].module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface [FTName]Props {
	className?: string;
}

export const [FTName] = (props: [FTName]Props): React.ReactElement => {
	const { className} = props;
	return (
		<div className={classNames(styles.[FTName], {}, [className])}>

		</div>
	)
}