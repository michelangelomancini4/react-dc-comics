// Header.jsx (con prop di app.jsx)

export default function Header({ links }) {


    return (<header>

        <div>
            <a href=""><img src="../src/assets/img/dc-logo.png" alt="" /></a>
        </div>
        <div>
            <nav>
                <ul className="lista-nav">
                    {links.map((link, index) => (

                        <li key={index}><a href={link.url}>{link.tag}</a></li>

                    ))}

                </ul>
            </nav>
        </div>
    </header>);
}

