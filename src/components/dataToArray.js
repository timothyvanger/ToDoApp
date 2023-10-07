export const dataToArray = (filterText, checkedArray) => {
  let newArray = [];
  if (filterText) newArray = [filterText];
  checkedArray.map((object) => {
    if (object.name === "completed") {
      newArray = [...newArray, true];
      return;
    }
    newArray = [...newArray, object.name];
  });
  return newArray;
};
