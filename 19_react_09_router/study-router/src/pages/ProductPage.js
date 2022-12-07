import ProductList from "./ProductList";

const ProductPage = (props) => {
  console.log(props);

  const { products } = props;

  return (
    <main className="ProductPage">
      <div>여기는 상품목록</div>

      <ProductList products={products} />

      {/* {products.map((p) => {
        return (
          <div>
            <ul>
              <li>id - {p.id}</li>
              <li>body - {p.body}</li>
            </ul>
          </div>
        );
      })} */}
    </main>
  );
};
export default ProductPage;
