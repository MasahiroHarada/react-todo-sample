import React from 'react';
import classNames from 'classnames';

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
};

function Filter({ value, onChange }) {
  const handleClick = (key, e) => {
    e.preventDefault();
    onChange(key);
  };

  return (
    <div className="panel-tabs">
      {['ALL', 'TODO', 'DONE'].map(key => (
        <a
          key={key}
          href={`#${key}`}
          onClick={handleClick.bind(null, key)}
          className={classNames({ 'is-active': value === key })}
        >
          {capitalize(key)}
        </a>
      ))}
    </div>
  );
}

export default Filter;
