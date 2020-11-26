import './ProductsTable.css'
import products from "../../data/products"
export default function ProductsTable(props) {
    return (
        <table className="products">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product, i) => <tr key={i} className={(i % 2 !== 0) ? 'odd' : ''}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>R$ {product.price}</td>
                    </tr>)
                }
            </tbody>
        </table>
    )
}