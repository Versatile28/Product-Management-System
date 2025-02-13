import React, { useState } from 'react'
import { baseUrl } from '../utils/constant';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';


export default function ProductForm() {
    const [product, setProduct] = useState({ name: "", description: "", price: "", image: null});
    const navigate = useNavigate();

    const handleChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value });

    const handleFileChange = (e) =>{
        setProduct({...product, image: e.target.files[0]})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('image', product.image);

        try{
            const response = await axios.post(`${baseUrl}`, formData,
                {headers: {'Content-Type': 'multipart/form-data'}
            })
            console.log('Upload Success', response.data);
        } catch (error) {
            console.error('Upload error', error.response?.data || error.message);
        }
        alert('Product Added');
        navigate('/view');
    }
    


    return (
        <div style={{ width: "98.5vw", display: "flex", justifyContent: "center" }}>
            <Form onSubmit={handleSubmit} style={{ width: "60vw", border: "black 1px solid", padding: "15px", borderRadius: "10px" }}>
                    <Form.Group className="mb-3" controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" value={product.name} type="text" placeholder="Full Name" onChange={handleChange} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridPDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="description" value={product.description} type="text" placeholder="Description" onChange={handleChange} required/>
                    </Form.Group>

                <Form.Group className="mb-3" controlId="formGridPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name="price" value={product.price} type="number" placeholder="Enter Price" onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control name="image" type="file" onChange={handleFileChange} required/>
                </Form.Group>

                <Button style={{ width: "100%" }} variant="primary" type="submit">
                    Add Product
                </Button>
            </Form>
        </div>
    )
}
