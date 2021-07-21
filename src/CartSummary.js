export default function CartSummary({ total }) {
  // console.log(props);
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
      <p>Total: {total} items</p>
      <button>Checkout</button>
    </div>
  );
}
