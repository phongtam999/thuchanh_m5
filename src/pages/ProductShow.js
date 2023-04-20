import { useParams } from 'react-router-dom';
import ProductModel from '../models/ProductModel';
import { useEffect, useState } from 'react';

function ProductShow(props) {
  const {id} = useParams();
  const [product,setProducts] = useState({});

  useEffect( function(){
    ProductModel.find(id).then(res => {
        setProducts(res.data);
    })
    .catch(err => {
        throw err;
    });
},[] );
    return (
        <div>
          <h2>Xem Chi Tiết Sản Phẩm</h2>
            <table border={1} width={'100%'}>
                <tr>
                    <td>STT</td>
                    <td>{ product.id }</td>
                </tr>
                <tr>
                    <td>Tên</td>
                    <td>{ product.name }</td>
                </tr>
                <tr>
                    <td>Giá</td>
                    <td>{ product.price }</td>
                </tr>
                <tr>
                    <td>Tồn Kho</td>
                    <td>{ product.stock }</td>
                </tr>
                <tr>
                    <td>Mô Tả</td>
                    <td>{ product.description }</td>
                </tr>
            </table>
        </div>
    );
}

export default ProductShow;