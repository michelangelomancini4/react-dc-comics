// Footer.jsx
export default function Footer() {
    return (<footer>
        <div className="linkutili-footer">
            <div>
                <h3>DC COMICS</h3>
                <ul>
                    <li><a href="">Characters</a></li>
                    <li><a href="">Comics</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">TV</a></li>
                    <li><a href="">Games</a></li>
                    <li><a href="">Videos</a></li>
                    <li><a href="">News</a></li>
                </ul>
            </div>
            <div>
                <h3>SHOP</h3>
                <ul>
                    <li><a href="">Shop DC</a></li>
                    <li><a href="">Shop DC Collectibles</a></li>
                </ul>
            </div>
            <div>
                <h3>DC</h3>
                <ul>
                    <li><a href="">Terms Of Use</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Ad Choices</a></li>
                    <li><a href="">Advertising</a></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">Subscriptions</a></li>
                </ul>
            </div>
            <div>
                <h3>SITES</h3>
                <ul>
                    <li><a href="">DC</a></li>
                    <li><a href="">MAD Magazine</a></li>
                    <li><a href="">DC Kids</a></li>
                    <li><a href="">DC Universe</a></li>
                    <li><a href="">DC Power Visa</a></li>
                </ul>
            </div>
        </div>
        {/* regole barra signup-social link del footer */}
        <div className="linkSocial">
            <div>
                <button className="registrationbutton">SIGN-UP NOW!</button>
            </div>

            {/* sezione destra sezione linksocial footer */}
            <div className="follow-us-section">
                <h2>FOLLOW US</h2>


                <a href="https://x.com/discord"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.instagram.com/discord/"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/discord"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.youtube.com/discord"><i class="fa-brands fa-youtube"></i></a>


            </div>

        </div>

    </footer>);
}