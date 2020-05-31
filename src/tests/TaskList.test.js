import React from 'react';
import { render } from '@testing-library/react';
import TaskList from '../components/TaskList';

it(`renders done items only when filter is 'DONE'`, () => {
  const items = [
    { id: '1', text: 'test 1', done: true },
    { id: '2', text: 'test 2', done: false },
    { id: '3', text: 'test 3', done: true },
  ];

  const { getByText } = render(
    <TaskList items={items} filter="DONE" onCheck={() => {}} />
  );

  expect(getByText('2 items')).toBeTruthy();
});

it(`renders undone items only when filter is 'TODO'`, () => {
  const items = [
    { id: '1', text: 'test 1', done: true },
    { id: '2', text: 'test 2', done: false },
    { id: '3', text: 'test 3', done: true },
  ];

  const { getByText } = render(
    <TaskList items={items} filter="TODO" onCheck={() => {}} />
  );

  expect(getByText('1 item')).toBeTruthy();
});
