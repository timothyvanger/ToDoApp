import style from "../style/editContainer.module.css";

export const EditForm = ({
  setIsEdit,
  handleSubmit,
  handleTitleInput,
  handleDescriptionInput,
  handlePriorityInput,
}) => {
  return (
    <div className={style.editContainer}>
      <form className={style.editForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new title"
          onChange={handleTitleInput}
        ></input>
        <textarea
          placeholder="Enter new description"
          cols={25}
          rows={5}
          onChange={handleDescriptionInput}
        ></textarea>
        <label htmlFor="tags">Change priority: </label>
        <select name="tags" id="tags" onChange={handlePriorityInput}>
          <option value="none">None</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <div className={style.editBtnContainer}>
          <button className={style.saveBtn} type="submit">
            Save
          </button>
          <button
            className={style.cancelBtn}
            type="button"
            onClick={() => setIsEdit(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
