// Header.jsx (con prop di app.jsx)
// importo la navbar
import Navbar from "./Navbar";

export default function Header({ links }) {


    return (<header>

        <div>
            <a href=""><img src="../src/assets/img/dc-logo.png" alt="" /></a>
        </div>
        <div>
            <Navbar links={links} />
        </div>
    </header>);
}

