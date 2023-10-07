export const ToDo = ({
  toggleEdit,
  id,
  title,
  description,
  completed,
  priority,
  color,
  toggleChecked,
  handleDelete,
}) => {
  const titleColorCompleted = completed
    ? { backgroundColor: "rgb(129, 209, 179)" }
    : { backgroundColor: "rgba(255,255,255" };
  const descriptionColorCompleted = completed
    ? { backgroundColor: "rgb(120, 180, 146)" }
    : { backgroundColor: "rgb(244, 241, 245)" };
  return (
    <>
      <div className="todo-card" key={id} style={titleColorCompleted}>
        <label className="todo-label">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => {
              toggleChecked(id, e.target.checked);
            }}
          ></input>
          <p className="todo-title">{title}</p>
          <button
            style={{ backgroundColor: color }}
            className="priorityBtn"
            type="button"
            value={priority}
          ></button>
          <button
            className="delete-btn"
            type="button"
            onClick={() => handleDelete(id)}
          >
            D
          </button>
          <button
            type="button"
            className="moreOptions"
            onClick={() => toggleEdit(id)}
          >
            ...
          </button>
        </label>
        <p className="todo-description" style={descriptionColorCompleted}>
          {description}
        </p>
      </div>
    </>
  );
};
