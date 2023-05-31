import { render, screen } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

test('renders LoadingSpinner component', () => {
  render(<LoadingSpinner />);

  const loadingSpinnerElement = screen.getByRole('status');
  expect(loadingSpinnerElement).toBeInTheDocument();
});
