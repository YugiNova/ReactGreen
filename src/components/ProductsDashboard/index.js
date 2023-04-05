import { useEffect, useState } from "react";
import TableProducts from "./TableProducts";
import SearchBox from "../SearchBox";
import axios from "axios";
import { Button } from "antd";
import ModalFormProducts from "./ModalFormProducts";
import { ButtonCreate, Headbar} from "./TableProducts/styles";

const DEFAULT_USER = {id:"",name:"", code:"", price:"", description:"", thumbnail:""}

const ProductsDashboard = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState(DEFAULT_USER);
    const [open, setOpen] = useState(false);
    const [tableLoading, setTableLoading] = useState(false);
    const [formLoading, setFormLoading] = useState(false);

    const onCancel = () => {
        setOpen(false);
        setFormData(DEFAULT_USER);
    }

    const onCreate = () => {
        setOpen(true)
    }

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = () => {
        setTableLoading(true)
        axios.get("https://6401dc9d0a2a1afebef3c167.mockapi.io/products").then(res => {
            setProducts(res.data);
            setTableLoading(false);
        })
    }

    const onSubmit = (id,data) => {
        setFormLoading(true);
        if(id){
            axios.put(`https://6401dc9d0a2a1afebef3c167.mockapi.io/products/${id}`,data).then(res=>{
                fetchData();
                setFormData(DEFAULT_USER);
            })
        }
        else{
            axios.post("https://6401dc9d0a2a1afebef3c167.mockapi.io/products",data).then(res=>{
                fetchData();
            })
        }
        setOpen(false);
    }

    const onDelete = (id) => {
        axios.delete(`https://6401dc9d0a2a1afebef3c167.mockapi.io/products/${id}`).then(res => {
            fetchData();
        })
    }

    const onEdit = (id) => {
        setOpen(true);
        axios.get(`https://6401dc9d0a2a1afebef3c167.mockapi.io/products/${id}`).then(res=>{
            setFormData(res.data);
        })
    }


    return(
        <div>
            <Headbar>
                <ButtonCreate onClick={onCreate}>Create User</ButtonCreate>
                <SearchBox/>
                <ModalFormProducts open={open} onSubmit={onSubmit} onCancel={onCancel} formData={formData} loading={formLoading}/>
            </Headbar>
            <TableProducts products={products} onDelete={onDelete} onEdit={onEdit} loading={tableLoading}/>
        </div>
    )
}

export default ProductsDashboard;