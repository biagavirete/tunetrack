import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByAltText(/React logo/i);
    expect(linkElement).toBeDefined();
});
