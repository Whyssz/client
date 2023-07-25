const meta = {
	title: 'widgets/[FTName]',
	component: [FTName],
	tags: ['autodocs'],
	decorators: defaultDecorators,
} satisfies Meta<typeof [FTName]>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
