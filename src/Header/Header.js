import classes from "./Header.module.css";

function Header() {
    return(
        <div>
            <header className={classes.header}>
                <div className={classes.header_content}>
                    <div className={classes.container}>
                        <div className={classes.header_content_inner}>
                            <nav className={classes.menu}>
                                <ul>
                                    <li>Главная</li>
                                    <li>О нас</li>
                                    <li>Наши проекты</li>
                                    <li>Олимпиады</li>
                                    <li>Поступление в школу</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className={classes.about_school}>
                    <ul>
                        <li>Главная</li>
                        <li>Поступление в школу</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

 export default Header;
