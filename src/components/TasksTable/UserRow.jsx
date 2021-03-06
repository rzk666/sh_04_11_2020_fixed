import React from 'react';
// styles
import styles from './UserRow.module.scss';
// Utils
import classnames from 'classnames';
// Components
import { Checkbox } from 'semantic-ui-react';

// ----- Help Components ----- //
const User = ({ avatar, name }) => {
  const x = 5;
  return (
    <div className={styles.user}>
      <img
        alt={`${name}_avatar`}
        className={styles.avatar}
        src={avatar}
      />
      <p>{name}</p>
    </div>
  );
};

const Task = ({ task }) => {
  // This means we didn't fetch tasks for this user
  if (!Object.keys(task).length) {
    return <></>;
  }
  const { id, title, color } = task;
  return (
    <div style={{ backgroundColor: !id ? 'black' : color }} className={styles.task}>
      {!id
        ? '?'
        : title}
    </div>
  );
};

const Selected = ({ selected, toggleSelection }) => {
  const x = 5;
  return (
    <div className={styles.selected_container}>
      <Checkbox
        onClick={() => toggleSelection()}
        checked={selected}
        className={styles.selected_box}
      />
    </div>
  );
};

const UsersRow = ({ user, filterByEmployee, handleUserSelection }) => {
  const {
    task, name, avatar, selected, id, isLoading,
  } = user;
  return (
    <div className={classnames(styles.row_container, { [styles.loading]: isLoading })}>
      {filterByEmployee && (
      <Selected
        toggleSelection={() => handleUserSelection(selected, id)}
        selected={selected}
      />
      )}
      <User avatar={avatar} name={name} />
      <Task task={task} />
    </div>
  );
};

export default UsersRow;
