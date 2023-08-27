export interface SidebarItemProps {
	item?: SidebarItemType;
	collapsed: boolean;
}

export interface SidebarItemType {
	path: string;
	text: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
	authOnly?: boolean;
}
