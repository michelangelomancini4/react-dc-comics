// ProductCard.jsx
import ProductList from "./ProductList";

export default function ProductCard({ title, thumb }) {
    return (
        <div >
            <img src={thumb} alt={title} />
            <h2>{title}</h2>

        </div>
    );
}
