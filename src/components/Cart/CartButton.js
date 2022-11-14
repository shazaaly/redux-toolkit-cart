import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/uiCart-slice';


const CartButton = (props) => {
  const dispatch = useDispatch()
  const toggleHandler = ()=>{dispatch(uiActions.toggleCart())}
  const quantity = useSelector(state => state.cart.totalQuantity)
  
  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
