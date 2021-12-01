import {React,useState,useEffect} from 'react'
import { Table } from "react-bootstrap";
import { useSelector } from 'react-redux';
import {getReport} from "../../redux/APIcalls/purchaseReport"
function RecentOrders() {
  const user = useSelector(state=>state.user.currentUser)
   const [report,setReport] = useState([]);
   const [error, setError] = useState(false);
   useEffect(() => {
     const getReportAPI = async ()=>{       
        const data = await getReport(user.username);
        if (data === []) {
          setError(true);
        } else {
          setReport(data);
        }       
     }
     getReportAPI();
   },[user])

   if(error){
     return (<p>No Recent Orders</p>)
   } else{
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Products</th>
            <th>Purchase Date</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {report.map((item) => {
            return (
              <tr>
                <td>{item.products}</td>
                <td>{item.purchaseDate}</td>
                <td>₹{item.totalPrice}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    )
}
}

export default RecentOrders
