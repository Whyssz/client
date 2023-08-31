export type { ScrollSchema } from './ScrollSave/model/types/scrollSave.types';

export {
	getScroll,
	getScrollByPath,
} from './ScrollSave/model/selectors/scrollSelector';

export { scrollReducer, scrollActions } from './ScrollSave/model/slice/scrollSlice';

export { Page } from './ui/Page';
