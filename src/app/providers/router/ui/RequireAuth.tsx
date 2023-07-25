import { User } from 'entities/User/model/types/user.interface';
import { Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';

interface RequireAuthProps {
	children: JSX.Element;
	auth: User | undefined;
}

export function RequireAuth({ children, auth }: RequireAuthProps) {
	console.log(auth);
	if (!auth) {
		return (
			<Navigate
				to={RoutePath.main}
				state={{ from: location }}
				replace
			/>
		);
	}

	return children;
}
