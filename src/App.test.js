import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import App from './App';

test('renders learn react link', () => {
  render(<App />, {wrapper: MemoryRouter});
  const linkElement = screen.getByText(/Lingua App/i);
  expect(linkElement).toBeInTheDocument();
});
