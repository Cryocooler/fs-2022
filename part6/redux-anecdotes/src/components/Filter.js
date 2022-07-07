import { filterByString } from "../reducers/filterReducer";
import { useSelector, useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    event.preventDefault();
    const filter = event.target.value;
    console.log("filter", filter);
    dispatch(filterByString({ search: filter }));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
