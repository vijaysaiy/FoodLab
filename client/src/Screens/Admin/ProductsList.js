import {React,useState,useEffect} from 'react'
import { Table ,Button} from "react-bootstrap";
import {getProducts} from '../../redux/APIcalls/products'
function ProductsList({category}) {
    const [products,setProducts] = useState([])
    
    useEffect(() => {
        const fetchAPIData = async () => {
            const data = await getProducts(category);           
            setProducts(data)
        }
        fetchAPIData();
    },[category]);
   
    return (
        <Table >
        <thead>
          <tr>
            <th>Name</th>           
            <th>Price</th>         
            <th>Category</th>
          </tr>
        </thead>
        <tbody>        
        {products.map((item) => {
            return (
              <tr key ={item.id}>
                <td>{item.name}</td>                
                <td>{item.price}</td>
                <td>{item.category}</td>
                <Button variant="outline-success" className="me-2 mx-2" style={{width:"50px"}}>Edit</Button>
                <Button variant="outline-danger" className="me-2 mx-2" style={{width:"70px"}}>Delete</Button>
              </tr>
            );
          })}
       
        </tbody>
      </Table>
    )
}

export default ProductsList
