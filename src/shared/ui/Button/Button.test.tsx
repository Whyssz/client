import { render, screen } from '@testing-library/react';
import { Button, ButtonStyle } from './Button';

describe('Button', () => {
	test('test render', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	test('test class', () => {
		render(<Button theme={ButtonStyle.CLEAR}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('clear');
		screen.debug();
	});
});
