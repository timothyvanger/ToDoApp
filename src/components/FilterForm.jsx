import style from "../style/filterForm.module.css";

export const FilterForm = ({
  filterInput,
  toggleCheckedItems,
  handleCanceling,
  handleFiltering,
}) => {
  return (
    <>
      <div className={style.filterContainer}>
        <form id={style.filterForm}>
          <p className={style.filterTitle}>Filter or Sort by tags!</p>
          <div className={style.inputContainers}>
            <label>
              <input
                type="checkbox"
                value="completed"
                onChange={(e) =>
                  toggleCheckedItems(e.target.checked, e.target.value)
                }
              />
              <p>Completed</p>
            </label>
          </div>
          <div className={style.inputSearch}>
            <p>Or Sort by searching item!</p>
            <input
              type="text"
              placeholder="Enter a search item"
              onChange={(e) => (filterInput.current = e.target.value)}
            ></input>
          </div>
          <div className={style.btnContainer}>
            <button
              type="button"
              className={style.filterBtn}
              onClick={() => handleFiltering()}
            >
              Filter
            </button>

            <button
              type="button"
              className={style.cancelBtn}
              onClick={() => handleCanceling()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
