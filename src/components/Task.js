import React from 'react';
import classNames from 'classnames';

function Task({ item, onCheck }) {
  const handleChange = () => onCheck(item);

  return (
    <label className="panel-block">
      <input
        type="checkbox"
        checked={item.done}
        onChange={handleChange}
      />
      <span
        className={classNames({
          'has-text-grey-light': item.done
        })}
      >
        {item.text}
      </span>
    </label>
  );
}

export default Task;
