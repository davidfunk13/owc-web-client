import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from "../../../app/store"
import Drawer from '../Drawer';

describe('Drawer', () => {
  render(
    <Provider store={store}>
      <Drawer />
    </Provider>
  );

  const navigationText = screen.getByText(/navigation/i)

  expect(navigationText).toBeInTheDocument();
});
