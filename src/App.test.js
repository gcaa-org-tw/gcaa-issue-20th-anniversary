import { render, screen } from '@testing-library/react';
import App from './App';

test('renders link on landing page', () => {
  render(<App />);
  const linkElement = screen.getByText(/綠盟二十週年特刊/i);
  expect(linkElement).toBeInTheDocument();
});
