import { useState } from "react";
import { EditForm } from "../components/EditForm";

let color = "";
export const EditContainer = ({ setIsEdit, editToDo }) => {
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
    editToDo(title, description, priority, color);
    setIsEdit(false);
    resetInputs();
  };
  return (
    <>
      <EditForm
        setIsEdit={setIsEdit}
        handleSubmit={handleSubmit}
        handleDescriptionInput={handleDescriptionInput}
        handlePriorityInput={handlePriorityInput}
        handleTitleInput={handleTitleInput}
      />
    </>
  );
};
