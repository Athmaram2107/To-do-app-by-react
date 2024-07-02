import styles from "../css/todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  //for deleting we use below function
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  //for line through we use below function
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const linethrough = item.done ? styles.completed : "";
  return (
    <div className={styles.items}>
      <div className={styles.itemname}>
        <span className={linethrough} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button onClick={() => handleDelete(item)} className={styles.button}>
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
