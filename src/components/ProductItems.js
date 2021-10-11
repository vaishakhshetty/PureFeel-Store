function ProductItems(props) {
  const { product, onAdd } = props;
  return (
    <div class="row text-center">
      <div class="thumbnail">
        <img src={product.image} alt={product.name}></img>
        <div class="caption">
          <h3>{product.name}</h3>
          <div>Rs{product.price}</div>
          <button onClick={() => onAdd(product)} class="add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItems;
