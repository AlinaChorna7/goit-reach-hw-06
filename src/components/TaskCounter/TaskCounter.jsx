import css from './TaskCounter.module.css';
import { useSelector } from 'react-redux';

export const TaskCounter = () => {
  const tasks = useSelector((state)=> state.tasks.items );

  const count = tasks.reduce(
    (acc,task)=>{
      if(task.comleted){
        acc.comleted +=1;
      } else{
        acc.active +=1;
      }
      return acc;
    },
     {active: 0, complited: 0}
  );
  return (
    <div>
      <p className={css.text}>Active: {count.active} 0</p>
      <p className={css.text}>Completed: {count.completed} 0</p>
    </div>
  );
};
