import { useParams } from 'react-router';

const Shop = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Shop</h1>
            {id ? (
                <p>Viewing product with ID: {id}</p>
            ) : (
                <p>No product selected</p>
            )}
        </div>
    );
};

export default Shop;
