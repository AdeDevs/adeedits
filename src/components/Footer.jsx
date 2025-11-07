import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <section className="head">
                <div className="footer-info">
                    <h1>SUBSCRIBE</h1>
                    <p>Sign up with your email address to receive news and updates.</p>
                    <form action="">
                        <input type="email" placeholder="Email Address"/>
                        <button>sign up</button>
                    </form>
                    <p>We respect your privacy</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li className="first">sitemap</li>
                        {/* <li><a href="#">SERVICES</a></li> */}
                        <li><NavLink to="/gallery">GALLERY</NavLink></li>
                        <li><NavLink to="/information">INFORMATION</NavLink></li>
                        {/* <li><a href="#">SCHEDULE A SHOOT</a></li> */}
                    </ul>
                    <ul>
                        <li className="first">follow</li>
                        <li><a href="https://www.instagram.com/the_adeedits.jpeg/" target="_blank">INSTAGRAM</a></li>
                        <li><a href="#">LINKEDIN</a></li>
                        <li><a href="https://x.com/adedevs" target="_blank">TWITTER</a></li>
                    </ul>
                </div>
            </section>
            <h6>adedevs</h6>
        </footer>
    )
}