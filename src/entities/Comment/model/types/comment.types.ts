import { User } from 'entities/User/model/types/user.types';

export interface Comment {
	id: string;
	user: User;
	text: string;
}
