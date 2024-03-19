

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <section>
                    <img src="junkbanklogo.png" alt="junkbank"/>
                    <h2>JunkBank</h2>
                </section>
                <section className="left-align-col">
                    <h3>Company</h3>
                    <ul>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Investors</li>
                    </ul>
                </section>
                <section className="left-align-col">
                    <h3>Useful links</h3>
                    <ul>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Investors</li>
                    </ul>
                </section>
                <section className="left-align-col">
                    <h3>Social</h3>
                    <ul>
                        <li>Facabook</li>
                        <li>Twetter</li>
                        <li>TikTak</li>
                    </ul>
                </section>
            </div>
        </footer>
    );
}

export default Footer;