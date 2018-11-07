import React, { memo } from "react";
import styles from "../Todo/todo.module.css";

const ListComponent = memo(({ data, done }) => {
  return (
    <div
      role="button"
      style={{ textDecoration: data.status ? "line-through" : "" }}
      className={styles.listItem}
      onClick={() => done(data.id)}
    >
      {data.description}
    </div>
  );
});

export default ListComponent;
