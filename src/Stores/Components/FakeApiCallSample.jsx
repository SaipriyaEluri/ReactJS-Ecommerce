import React from "react";

const FakeApiCallSample = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          // Replace 'https://jsonplaceholder.typicode.com/posts' with your fake API endpoint
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchProducts();
    }, []); // Empty dependency array means this effect runs once after the initial render
  
    return (
      <div>
        <h2>Product List</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>
    );
}
export default FakeApiCallSample;