// ProductCard.jsx
import ProductList from "./ProductList";

export default function ProductCard({ title, thumb }) {
    return (
        <div >
            <img className="comicimg" src={thumb} alt={title} />
            <h4>{title}</h4>

        </div>
    );
}
