import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { deleteProduct, getAllProducts, updateProduct,} from "../../APIcalls/products";
import ErrorCompnonent from "../ErrorCompnonent";

function ProductsList({ setScreen, setItem }) {

  const [products, setProducts] = useState([]);
  const [change,setChange] = useState(false);  

  function handleEdit(item) {
    setItem(item);
    setScreen("edit");
  }
  function handleDelete(id) {
    deleteProduct(id);
    setChange(!change)
    alert("Item deleted Successfully");
  }
  function handleDisable(item) {
    updateProduct({ ...item, enabled: false });
    setChange(!change);
    alert("Item disabled");
  }

  function handleEnable(item) {
    updateProduct({ ...item, enabled: true });
    setChange(!change);
    alert("Item enabled");
  }

  useEffect(() => {
    const fetchAPIData = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchAPIData();
  },[change]);

  if(!products){
    return (<ErrorCompnonent />)
  }
  return (
    <>
      <h2>Manage Products</h2>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>IsEnabled</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.enabled.toString()}</td>
                <td>
                <button className="btn btn-outline-warning fw-bold me-2 mx-2 my-2" onClick={() => handleEdit(item)}>
                  Edit
                </button>
                <button className="btn btn-outline-danger me-2 mx-2 my-2" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
                <button className="btn btn-outline-primary me-2 mx-2 my-2" onClick={() => handleDisable(item)}
                  disabled={!item.enabled}>
                  Disable
                </button>
                <button className="btn btn-outline-success me-2 mx-2 my-2" onClick={() => handleEnable(item)}
                  disabled={item.enabled}>
                  Enable
                </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default ProductsList;
