import { FilterItem } from "../components/FilterItem";
import { FilterForm } from "../components/FilterForm";
import { dataToArray } from "../components/dataToArray";
import style from "../style/form.module.css";
import { useRef, useState } from "react";

export const FilterContainer = ({
  setIsFiltering,
  setFilterToDos,
  toDo,
  filterToDos,
}) => {
  //search by text input, completed status, priority high to low, low to high
  const [filterPopUp, setFilterPopUp] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const filterInput = useRef("");

  const toggleCheckedItems = (isChecked, value) => {
    if (isChecked) {
      setCheckedItems((previousItems) => {
        return [...previousItems, { name: value }];
      });
    } else {
      setCheckedItems((previousItems) => {
        return previousItems.filter((items) => items.name != value);
      });
    }
  };

  const handleFiltering = () => {
    const text = filterInput.current.toLowerCase();
    const searchArray = dataToArray(text, checkedItems);
    if (searchArray.length === 0) return;

    const filterArray = filterToDos.filter((todo) => {
      for (let i = 0; i < searchArray.length; i++) {
        if (todo.title.toLowerCase().includes(searchArray[i])) return true;
        if (todo.description.toLowerCase().includes(searchArray[i]))
          return true;
        if (todo.priority === searchArray[i]) return true;
        if (todo.completed === searchArray[i]) return true;
        return false;
      }
    });
    if (filterArray.length === 0) {
      alert("There are no matches. Try again.");
      return;
    }
    setFilterToDos(filterArray);
    setFilterPopUp(false);
    setCheckedItems([]);
    filterInput.current = "";
  };
  const handleDeletingItem = (item) => {
    console.log(item);
  };
  const handleToggleFiltering = (bool) => {
    setFilterToDos(toDo);
    setIsFiltering(bool);
    setFilterPopUp(bool);
  };
  const handleCanceling = () => {
    setCheckedItems([]);
    handleToggleFiltering(false);
  };
  return (
    <>
      <div className={style.filterContainer}>
        {filterPopUp && (
          <FilterForm
            filterInput={filterInput}
            toggleCheckedItems={toggleCheckedItems}
            handleCanceling={handleCanceling}
            handleFiltering={handleFiltering}
          />
        )}
        <button type="button" onClick={() => handleToggleFiltering(true)}>
          Add filter
        </button>
        <button type="button" onClick={() => setIsFiltering(false)}>
          remove filter
        </button>
      </div>
    </>
  );
};
