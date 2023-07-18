export type { Profile, ProfileSchema } from './model/types/profile';
export { ProfilePageAsync as ProfilePage } from './ui/ProfilePageAsync';

export {
	profileActions,
	profileSlice,
} from './model/slice/profileSlice';
