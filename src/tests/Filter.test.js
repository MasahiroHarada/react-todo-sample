import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Filter from '../components/Filter';

it(`renders three tabs`, () => {
  const handleChange = () => {};
  const value = 'ALL';

  const { getAllByRole } = render(
    <Filter onChange={handleChange} value={value} />
  );

  const tabs = getAllByRole('link');
  expect(tabs).toHaveLength(3);
});

it(`renders one active tab`, () => {
  const handleChange = () => {};
  const value = 'DONE';
  
  const { getByText } = render(
    <Filter onChange={handleChange} value={value} />
  );

  const doneTab = getByText('Done');
  expect(doneTab).toHaveClass('is-active');

  const allTab = getByText('All');
  expect(allTab).not.toHaveClass('is-active');

  const todoTab = getByText('Todo');
  expect(todoTab).not.toHaveClass('is-active');
});

it(`sends clicked tab value`, () => {
  const handleChange = val => {
    expect(val).toBe('TODO');
  };
  const value = 'ALL';

  const { getByText } = render(
    <Filter onChange={handleChange} value={value} />
  );

  fireEvent.click(getByText('Todo'));
});
