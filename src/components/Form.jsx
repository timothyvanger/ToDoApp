import style from "../style/form.module.css";

export const Form = ({
  setIsAddTask,
  handleSubmit,
  handlePriorityInput,
  handleTitleInput,
  handleDescriptionInput,
  priority,
}) => {
  return (
    <>
      <div id={style.formContainers}>
        <form id={style.taskForm} onSubmit={handleSubmit}>
          <input
            className={style.title}
            type="text"
            placeholder="Add Title"
            onChange={handleTitleInput}
          />
          <textarea
            className={style.description}
            placeholder="Add a description"
            cols={25}
            rows={5}
            onChange={handleDescriptionInput}
          ></textarea>
          <label htmlFor="tags">
            <p>Add a priority: </p>
            <select
              name="tags"
              id="tags"
              value={priority}
              onChange={handlePriorityInput}
            >
              <option value="none">None</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <div className={style.btnContainer}>
            <button
              className={style.cancelTaskBtn}
              type="button"
              onClick={() => setIsAddTask(false)}
            >
              Cancel
            </button>
            <button className={style.addTaskBtn} type="submit">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
