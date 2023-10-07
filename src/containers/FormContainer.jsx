import { useState } from "react";
import { Form } from "../components/Form";
import style from "../style/form.module.css";
import { FilterContainer } from "../containers/FilterContainer";

let color = "";
export const FormContainer = ({
  addToDo,
  toDo,
  isFiltering,
  setIsFiltering,
  setFilterToDos,
  filterToDos,
}) => {
  const [isAddTask, setIsAddTask] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionInput = (e) => {
    setDescription(e.target.value);
  };
  const handlePriorityInput = (e) => {
    setPriority(e.target.value);
  };
  const generateColor = (priority) => {
    switch (priority) {
      case "none":
        color = "transparent";
        break;
      case "low":
        color = "#73d7a4";
        break;
      case "medium":
        color = "#f1ef86";
        break;
      case "high":
        color = "#eb5959";
        break;
      default:
        color = "transparent";
        break;
    }
  };
  const resetInputs = () => {
    setTitle("");
    setDescription("");
    setPriority("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateColor(priority);
    addToDo(title, description, priority, color);
    resetInputs();
    setIsAddTask(false);
  };

  return (
    <>
      {isAddTask && (
        <Form
          setIsAddTask={setIsAddTask}
          handleSubmit={handleSubmit}
          handlePriorityInput={handlePriorityInput}
          handleTitleInput={handleTitleInput}
          handleDescriptionInput={handleDescriptionInput}
          priority={priority}
        />
      )}
      <div className={style.navContainer}>
        <button
          type="button"
          className={style.createBtn}
          onClick={() => setIsAddTask(true)}
        >
          Create New Task +
        </button>
        <FilterContainer
          toDo={toDo}
          isFiltering={isFiltering}
          setIsFiltering={setIsFiltering}
          setFilterToDos={setFilterToDos}
          filterToDos={filterToDos}
        />
      </div>
    </>
  );
};
