import atomicHabitsImg from '../assets/atomic-habits.jpeg';
import dareToLeadImg from '../assets/dare-to-lead.jpg';
import quietImg from '../assets/quiet.jpeg';
import classes from './BookList.module.css';

export default function BookList() {
  let pageTitle = 'Books To Read';

  return (
    <div>
      <h3>{pageTitle}</h3>
      <img src={atomicHabitsImg} alt="Dare to Lead" />
      <img src={dareToLeadImg} alt="Atomic Habits" />
      <img src={quietImg} alt="Quiet" />
    </div>
  );
}
