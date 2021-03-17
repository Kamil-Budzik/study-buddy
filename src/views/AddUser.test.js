import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

describe('Form Field', () => {
  it('Renders the component', () => {
    const utils = renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(utils.getByTestId('Name'), { target: { value: 'Grażyna' } });
    fireEvent.change(utils.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(utils.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(utils.getByText('Add'));
    utils.getByText('Grażyna');
  });
});
