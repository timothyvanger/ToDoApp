export const FilterItem = ({ searchItem, handleDeletingItem }) => {
  return (
    <>
      <div className="filterCard">
        <p>{searchItem}</p>
        <button type="button" onClick={() => handleDeletingItem(searchItem)}>
          x
        </button>
      </div>
    </>
  );
};
