import React from 'react';
import Task from './Task';

function TaskList({ items, filter, onCheck }) {
  const displayItems = items.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.done;
    if (filter === 'DONE') return item.done;
    return false;
  });

  return (
    <>
      {displayItems.map(item => (
        <Task
          key={item.text}
          item={item}
          onCheck={onCheck}
        />
      ))}
      <div className="panel-block">
        {displayItems.length} item{displayItems.length > 1 ? 's' : ''}
      </div>
    </>
  );
}

export default TaskList;
