
import styles from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <h2>Find contacts by name</h2>
      <input  
        className={styles.searchInput}
        type="text"
        onChange={handleChange} />
    </div>
  );
}
