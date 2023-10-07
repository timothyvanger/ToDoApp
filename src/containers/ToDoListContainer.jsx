import { ToDo } from "../components/ToDo";

const body = document.querySelector("body");
export const ToDoListContainer = ({
  toggleEdit,
  toDo,
  toggleChecked,
  handleDelete,
  isFiltering,
  filterToDos,
}) => {
  if (isFiltering) {
    console.log(body);
    body.style.backgroundColor = "rgb(198, 224, 196)";
  } else {
    body.style.backgroundColor = "rgb(240, 233, 230)";
  }
  return (
    <>
      <div className="todo-list-container">
        {isFiltering
          ? filterToDos.map((todo) => {
              return (
                <ToDo
                  toggleEdit={toggleEdit}
                  {...todo}
                  key={todo.id}
                  toggleChecked={toggleChecked}
                  handleDelete={handleDelete}
                />
              );
            })
          : toDo.map((todo) => {
              return (
                <ToDo
                  toggleEdit={toggleEdit}
                  {...todo}
                  key={todo.id}
                  toggleChecked={toggleChecked}
                  handleDelete={handleDelete}
                />
              );
            })}
      </div>
    </>
  );
};
