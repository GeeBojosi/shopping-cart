import './CartSummary.css';

export default function CartSummary(props) {
  console.log(props.itemInfo.items);
  const quantity = props.itemInfo.items.reduce((total, currentVal) => {
    return total + currentVal.qty;
  }, 0);

  const filtered = [];

  for (let item of props.itemInfo.items) {
    let results = item.qty * item.price;
    filtered.push(results);
  }

  const totalPrice = filtered.reduce((total, currentValue) => {
    return total + currentValue;
  });

  return (
    <div className='CartSummary'>
      <h1>Cart Summary</h1>
      <p>Price: {`R ${totalPrice.toFixed(2)}`}</p>
      <p>Total: ({quantity} items)</p>
      <button>Checkout</button>
    </div>
  );
}
