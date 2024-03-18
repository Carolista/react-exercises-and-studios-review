import classes from './HobbyLinks.module.css';

export default function HobbyLinks() {
  const hobbyLinks = [
    "https://www.yarn.com",
    "https://www.brecks.com",
    "https://www.dickblick.com"
  ];

  return (
    <div className={classes.hobbyList}>
      <h3 className={classes.hobbyHeading}>Hobbies</h3>
      <a href={hobbyLinks[0]}>Knitting</a><br />
      <a href={hobbyLinks[1]}>Gardening</a><br />
      <a href={hobbyLinks[2]}>Painting</a>
    </div>
  );
}
