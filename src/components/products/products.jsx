import "./product.css";

const Products = () => {
    const categories = [
        {
            title: "FURNITURE",
            products: [
                {
                    id: 5,
                    title: "Table Lamp",
                    description: "Stylish table lamp for any room.",
                    price: "$49.99",
                    image: "https://i0.wp.com/coversun.in/wp-content/uploads/2020/11/InteriorStylingwwm1.jpg?fit=800%2C500&ssl=1"
                },
                {
                    id: 6,
                    title: "Chandelier",
                    description: "Elegant chandelier to brighten your space.",
                    price: "$299.99",
                    image: "https://i0.wp.com/coversun.in/wp-content/uploads/2020/11/InteriorStylingwwm1.jpg?fit=800%2C500&ssl=1"
                },
                {
                    id: 5,
                    title: "Table Lamp",
                    description: "Stylish table lamp for any room.",
                    price: "$49.99",
                    image: "https://i0.wp.com/coversun.in/wp-content/uploads/2020/11/InteriorStylingwwm1.jpg?fit=800%2C500&ssl=1"
                },
                {
                    id: 6,
                    title: "Chandelier",
                    description: "Elegant chandelier to brighten your space.",
                    price: "$299.99",
                    image: "https://i0.wp.com/coversun.in/wp-content/uploads/2020/11/InteriorStylingwwm1.jpg?fit=800%2C500&ssl=1"
                },
            ]
        },
        {
            title: "KITCHEN",
            products: [
                {
                    id: 5,
                    title: "Table Lamp",
                    description: "Stylish table lamp for any room.",
                    price: "$49.99",
                    image: "https://i0.wp.com/coversun.in/wp-content/uploads/2020/11/InteriorStylingwwm1.jpg?fit=800%2C500&ssl=1"
                },
                {
                    id: 6,
                    title: "Chandelier",
                    description: "Elegant chandelier to brighten your space.",
                    price: "$299.99",
                    image: "https://i0.wp.com/coversun.in/wp-content/uploads/2020/11/InteriorStylingwwm1.jpg?fit=800%2C500&ssl=1"
                },
                {
                    id: 5,
                    title: "Table Lamp",
                    description: "Stylish table lamp for any room.",
                    price: "$49.99",
                    image: "https://i0.wp.com/coversun.in/wp-content/uploads/2020/11/InteriorStylingwwm1.jpg?fit=800%2C500&ssl=1"
                },
                {
                    id: 6,
                    title: "Chandelier",
                    description: "Elegant chandelier to brighten your space.",
                    price: "$299.99",
                    image: "https://i0.wp.com/coversun.in/wp-content/uploads/2020/11/InteriorStylingwwm1.jpg?fit=800%2C500&ssl=1"
                },
            ]
        },
        {
            title: "LIGHTING",
            products: [
                {
                    id: 5,
                    title: "Table Lamp",
                    description: "Stylish table lamp for any room.",
                    price: "$49.99",
                    image: "https://i0.wp.com/coversun.in/wp-content/uploads/2020/11/InteriorStylingwwm1.jpg?fit=800%2C500&ssl=1"
                },
                {
                    id: 6,
                    title: "Chandelier",
                    description: "Elegant chandelier to brighten your space.",
                    price: "$299.99",
                    image: "https://i0.wp.com/coversun.in/wp-content/uploads/2020/11/InteriorStylingwwm1.jpg?fit=800%2C500&ssl=1"
                },
                {
                    id: 5,
                    title: "Table Lamp",
                    description: "Stylish table lamp for any room.",
                    price: "$49.99",
                    image: "https://i0.wp.com/coversun.in/wp-content/uploads/2020/11/InteriorStylingwwm1.jpg?fit=800%2C500&ssl=1"
                },
                {
                    id: 6,
                    title: "Chandelier",
                    description: "Elegant chandelier to brighten your space.",
                    price: "$299.99",
                    image: "https://i0.wp.com/coversun.in/wp-content/uploads/2020/11/InteriorStylingwwm1.jpg?fit=800%2C500&ssl=1"
                },
            ]
        },
    ];

    return (
        <>
            <div className="Product">
                <h1>PRODUCT</h1>
            </div>

            {categories.map(category => (
                <div key={category.title}>
                    <div className="heading">
                        <h1 align="center">{category.title}</h1>
                    </div>
                    <div className="mainDiv">
                        {category.products.map(product => (
                            <div className="product-card" key={product.id}>
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="product-info">
                                    <h2 className="product-title">{product.title}</h2>
                                    <p className="product-description">{product.description}</p>
                                    <div className="product-price">{product.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Products;
