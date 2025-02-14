import ProductList from "./products/ProductList";
// import ProductCard from "./products/ProductCard";


// Main.jsx
export default function Main() {
    return (<main>

        {/* <img src="../src/assets/img/jumbotron.png" alt="" /> */}
        <div className="jumbotron">
            <div>
                <h3><strong>CURRENT SERIES</strong></h3>
            </div>
        </div>
        < ProductList />

        <ul className="shop-list">
            <li><a href=""><img src="../src/assets/img/buy-comics-digital-comics.png" alt="" />DIGITAL COMICS</a></li>
            <li><a href=""><img src="../src/assets/img/buy-comics-merchandise.png" alt="" />DC MERCHANDISE</a></li>
            <li><a href=""><img src="../src/assets/img/buy-comics-subscriptions.png" alt="" />SUBSCRIPTION</a></li>
            <li><a href=""><img className="locatorimg" src="../src/assets/img/buy-comics-shop-locator.png" alt="" />COMIC SHOP LOCATOR</a></li>
            <li><a href=""><img className="visaimg" src="../src/assets/img/buy-dc-power-visa.png" alt="" />DC POWER VISA</a></li>
        </ul>

        <img src="../src/assets/img/" alt="" />
    </main>);
}