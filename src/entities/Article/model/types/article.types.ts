import { User } from 'entities/User/model/types/user.types';

export enum ArticleBlockType {
	CODE = 'CODE',
	IMAGE = 'IMAGE',
	TEXT = 'TEXT',
}

export enum ArticleView {
	BIG = 'BIG',
	SMALL = 'SMALL',
}

export interface ArticleBlockBase {
	id: string;
	type: ArticleBlockType;
}

export interface ArticleBlockCode extends ArticleBlockBase {
	type: ArticleBlockType.CODE;
	code: string;
}

export interface ArticleBlockImage extends ArticleBlockBase {
	type: ArticleBlockType.IMAGE;
	src: string;
	title: string;
}

export interface ArticleBlockText extends ArticleBlockBase {
	type: ArticleBlockType.TEXT;
	paragraphs: string[];
	title?: string;
}

export type ArticleBlock =
	| ArticleBlockCode
	| ArticleBlockImage
	| ArticleBlockText;

export enum ArticleType {
	IT = 'IT',
	SCIENCE = 'SCIENCE',
	ECONOMIC = 'ECONOMIC',
}

export interface Article {
	id: string;
	user: User;
	title: string;
	subtitle: string;
	img: string;
	views: number;
	createdAt: string;
	type: ArticleType[];
	blocks: ArticleBlock[];
}
