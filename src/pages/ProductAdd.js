import React, { useState } from 'react';
import { Formik, Form, Field } from "formik";
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import ProductModel from '../models/ProductModel';
// import axios from 'axios';
const rules = Yup.object().shape({
    name: Yup.string().required('Không được để trống').min(3, 'Tối thiểu 3 kí tự').max(255, 'Tối đa 255'),
    price: Yup.number().required('Không được để trống').min(3, 'Tối thiểu 3 kí tự'),
    stock: Yup.number().required('Không được để trống').min(3, 'Tối thiểu 3 số'),
    description: Yup.string().required('Không được để trống').min(3, 'Tối thiểu 3 kí tự')
});
function ProductAdd(props) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        stock: '',
        description: ''
    })
    const [products, setProducts] = useState([]);
    const [formErrors, setFormErrors] = useState([]);
    const handleSubmit = (values) => {
        console.log(values);
        const fd = new FormData();
        // Tạo data để gửi lên server
        fd.append("name", values.name);
        fd.append("price", values.price);
        fd.append("stock", values.stock);
        fd.append("description", values.description);
        ProductModel.store(values)
            .then((res) => {
                navigate("/");
            })
            .catch((err) => {
                throw err;
            });
    }
return (
    <div>
        <h1>Thêm Sản Phẩm </h1>
        {formData.name}
        {formData.price}
        {formData.stock}
        {formData.description} <br />
        <Formik
            initialValues={formData}
            validationSchema={rules}
            onSubmit={(values) => handleSubmit(values)}
        >
            {({ errors, touched }) => (
                <Form>
                    <strong>Tên sản phẩm:</strong><br />
                    <Field name="name" /> <br />
                    {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                    ) : null}
                    <strong> Giá :</strong><br />
                    {formData.price}
                    <Field name="price" />
                    {errors.price && touched.price ? (
                        <div>{errors.price}</div>
                    ) : null}<br />
                    <strong> Hàng Tồn Kho :</strong><br />
                    <Field name="stock" />
                    {errors.stock && touched.stock ? (
                        <div>{errors.stock}</div>
                    ) : null}
                    {formData.stock}<br/><br/>
                    <strong> Mô Tả:</strong><br />
                    <Field name="description" />
                    {errors.description && touched.description ? (
                        <div>{errors.description}</div>
                    ) : null}
                    {formData.description}<br/><br/>
                    <br/>
                    <button className='btn btn-primary' onClick={handleSubmit}><strong>Thêm</strong></button>
                </Form>
            )}
        </Formik>
    </div>
);
}
export default ProductAdd;