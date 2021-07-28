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
    <div
      style={{
        border: '1px solid red',
        height: '145px',
        width: '70%',
        marginTop: '2rem',
        marginLeft: '2rem',
        position: 'static',
      }}>
      <h1>Cart Summary</h1>
      <p>Total: ({quantity} items)</p>
      <p>Price: {`R ${totalPrice.toFixed(2)}`}</p>
      <button>Checkout</button>
    </div>
  );
}
