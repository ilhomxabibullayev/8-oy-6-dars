import { useParams } from 'react-router';

const Shop = () => {
    const { id } = useParams();

    return (
        <div className="w-[300px] h-[10px]">
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
