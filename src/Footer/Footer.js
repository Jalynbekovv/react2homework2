import classes from "./Footer.module.css";

function Footer () {
    return(
        <div className={classes.contact_information}>
            <ul>
                <li>г.Бишкек, ул.Каралаева 2/2.</li>
                <li>+996 551 909 000;<br/>
                    +996 704 909 000;</li>
                <li>office@ksms.kg</li>
            </ul>
        </div>
    )

}

export default Footer;