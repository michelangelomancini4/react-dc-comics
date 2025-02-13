export default function Navbar({ links }) {


    return (
        <nav>
            <ul className="lista-nav">
                {links.map((link, index) => (

                    <li key={index}><a href={link.url}>{link.tag}</a></li>

                ))}

            </ul>
        </nav>

    );
}