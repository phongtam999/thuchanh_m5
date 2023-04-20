import React, { useEffect, useState } from "react";
import ProductModel from "../models/ProductModel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Products(props) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductModel.getAll()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  const handleDelete = (id) => {
    ProductModel.delete(id)
      .then((res) => {
        // navigate("/");
		window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("da co loi xay ra ");
      });
  };
  return (
    <div>
    
      <button className='btn btn-info'> <Link to={"/products/create"}>Thêm</Link> </button> 
      <table border={1} width={"100%"}>
        <thead>
          <tr>
            <th> STT </th>
            <th> Tên Sản Phẩm </th>
            <th> Giá </th>
            <th> Tồn Kho </th>
            <th> Hành Động </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, key) => (
            <tr key={key}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <Link to={"/products/" + product.id}>Xem</Link>|
                <Link to={"/products/" + product.id + "/edit"}>Cập Nhật</Link>|
                <button id="button2" onClick={ () => handleDelete(product.id)}>Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
