import { Button } from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import css from './StatusFilter.module.css';
import { setStatusFilter } from '../../redux/actions';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state=>state.filters.status)

  const handleStatusFilter =filter =>dispatch(setStatusFilter(filter))
 
  return (
    <div className={css.wrapper}>
    <Button onClick={()=> handleStatusFilter("all")}>All</Button>
    <Button onClick={()=> handleStatusFilter("active")}>Active</Button>
    <Button onClick={()=> handleStatusFilter("comleted")}>Completed</Button>
  </div>
  );
};

