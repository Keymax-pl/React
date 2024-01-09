import styles from "./NavBar.module.scss";

const NavBar = () => {
    return (
        <section className={styles.navbar}>
            <div className={styles.icon}>
                <a href="/">
                    <span className="fa fa-tasks"></span>
                </a>
            </div>
            <div className={styles.list}>
                <ul>
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="/favorite">FAVORITE</a>
                    </li>
                    <li>
                        <a href="/about">ABOUT</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default NavBar;