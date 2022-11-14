import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: 'shoes',
    price: 120,
    quantity: 2,
    description: 'First Item'
  },
  {
    id: 2,
    title: 'T-Shirts',
    price: 320,
    quantity: 4,
    description: 'Seconed Item'

  },
  {
    id: 3,
    title: 'Skirts',
    price: 540,
    quantity: 6,
    description: 'Third Item'

  },
  {
    id: 4,
    title: 'Sweet-Shirt',
    price: 620,
    quantity: 10,
    description: 'Forth Item'

  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map(item =>
            <ProductItem
              id={item.id}
              key={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              description={item.description}
            />)
        }

      </ul>
    </section>
  );
};

export default Products;
