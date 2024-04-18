import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { getStatusFilter } from "../../redux/selectors";

const SearchBox = () => {
  const selectNameFilter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <div className={css.search}>
      <h3 className={css.searchHeader}>Find contacts by name</h3>
      <input
        className={css.searchInput}
        type="text"
        value={selectNameFilter}
        onChange={onChangeFilter}
      ></input>
    </div>
  );
};

export default SearchBox;
