import React from 'react';
import { render } from './testUtils';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
      <App />
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
