import classes from './ChoresList.module.css';

export default function ChoresList () {
  const chores = ['Sweep, vacuum & mop floors', "Empty dishwasher"];
  return (
    <div className={classes.choresList}>
      <h3 className={classes.choresHeading}>Chores To Do</h3>
      <ol>
        <li className={classes.choresText}>{chores[0]}</li>
        <li className={classes.choresText}>{chores[1]}</li>
      </ol>
    </div>
  );
}
