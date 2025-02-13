// Header.jsx
export default function Header() {

    const navLinks = [
        { tag: "CHARACTERS", url: "#", content: true },
        { tag: "COMICS", url: "#", content: true },
        { tag: "MOVIES", url: "#", content: true },
        { tag: "TV", url: "#", content: true },
        { tag: "GAMES", url: "#", content: true },
        { tag: "COLLECTIBLES", url: "#", content: true },
        { tag: "VIDEOS", url: "#", content: true },
        { tag: "FANS", url: "#", content: true },
        { tag: "NEWS", url: "#", content: true },
        { tag: "SHOP", url: "#", content: true },
    ];
    return (<header>

        <div>
            <a href=""><img src="../src/assets/img/dc-logo.png" alt="" /></a>
        </div>
        <div>
            <nav>
                <ul className="lista-nav">
                    {navLinks.map((link, index) => (

                        <li key={index}><a href={link.url}>{link.tag}</a></li>

                    ))}

                </ul>
            </nav>
        </div>
    </header>);
}

