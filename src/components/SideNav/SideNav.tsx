import classes from "./SideNav.module.scss";

const SideNav = () => {
  return (
    <>
      <aside className={classes.sidenav}>
        <nav className={classes.nav}></nav>
      </aside>
    </>
  );
};
export default SideNav;
