import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
//import { Order } from './Order'
import DatePicker from 'react-date-picker';
import Datetime from 'react-datetime';
import styles from '../components/layout/pages/Carts/OrderConfirm.module.css'
import axios from 'axios'
export const ConfirmOrder = () => {
    // const [odate,setOdate] =useState("");
    const navigate = useNavigate()
    const loc = useLocation()
    const id = loc.state.id;
    const name = loc.state.name;
    const price = loc.state.price;
    const quantity1 = +loc.state.quantity1;
    const amount = loc.state.amount;


    const [Odate, setOdate] = useState("2022-12-28")
    console.log(Odate)
    const [OrderForm, setOrderForm] = useState({
        name: "",
        Amount: loc.state.amount,
        daddress: "",
        contactNo: "",
        price: loc.state.price,
        quantity: loc.state.quantity1,
        id: loc.state.id,

    })

    const getDate = () => {
        var date = OrderForm.Odate.getDate().toLocaleString();
        // setOrderForm({...OrderForm,Odate:date})
        setOdate(date)

    }

    const HandleSubmit = (e) => {
        // e.preventDefault();

        console.log(Odate);
        //console.log("form order summitte",OrderForm,Odate.toLocaleString())
        const formData = new FormData();
        //formData.append('id', user.id);
        formData.append('name', OrderForm.name)
        formData.append('amount', OrderForm.Amount);
        formData.append('quantity', OrderForm.quantity);
        formData.append('pid', OrderForm.id);
        formData.append('odate', Odate);
        formData.append('address', OrderForm.daddress);
        formData.append('contactNo', OrderForm.contactNo);
        // let url = "http://localhost/Server.php"
        let url = "http://localhost/ReactApps/food-web/AddOrder.php"
        axios.post(url, formData, {
        })
            .then(res => {
                console.log(res.data);
            })
        //alert(`form is submittes ${OrderForm}`);
        navigate("/listtransactionsnew")
      // alert("order submitted successfully")
    }
    const HandleChange = (e) => {
        setOrderForm({ ...OrderForm, [e.target.name]: e.target.value })
    }
    const handleDateChange = (date) => {
        // handleChange(date) {  
        setOdate(date)

    }


    return (
        <div>

            {/* <h3>Amount:{OrderForm.Amount}</h3>
             <h3>Product Id: {OrderForm.id}</h3>
             <h3>Quantity: {OrderForm.quantity}</h3>
             <h4>Date order: {Odate.toLocaleString()}</h4> */}
            <div className={styles.main}>
                <h4 style={{ textAlign: "center" }}>Order Particulars</h4>
                <form onSubmit={(e) => HandleSubmit(e)}>
                    <table align='center' className={styles.table}>
                        <tr>
                            <td>
                                <label htmlFor='name'>
                                    Customer Name
                                </label>
                            </td>
                            <td>
                                <input type="text" id="name" style={{ width: "90%" }}
                                    className="form-control"
                                    value={OrderForm.name} name="name" onChange={HandleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='address'>
                                    Customer Address
                                </label>
                            </td>
                            <td>
                                <input type="text" id="address" style={{ width: "90%" }}
                                    className="form-control"
                                    value={OrderForm.daddress} name="daddress" onChange={HandleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='cell'>
                                    Customer Cell No
                                </label>

                            </td>
                            <td>
                                <input type="text" id="cell" style={{ width: "90%" }}
                                    className="form-control"
                                    value={OrderForm.contactNo} name="contactNo" onChange={HandleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='ItemId'>
                                    Item Id:
                                </label>

                            </td>
                            <td>
                                <input type="number" id="ItemId" style={{ width: "90%" }}
                                    className="form-control"
                                    value={OrderForm.id} name="id"  />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='price'>
                                    Item Price:
                                </label>

                            </td>
                            <td>
                                <input type="number" id="price" style={{ width: "90%" }}
                                    className="form-control"
                                    value={OrderForm.price} name="price"  />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='quantity'>
                                    Item Quantity:
                                </label>

                            </td>
                            <td>
                                <input type="number" id="quantity" style={{ width: "90%" }}
                                    className="form-control"
                                    value={OrderForm.quantity} name="quantity"  />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='amount'>
                                    Order Amount:
                                </label>

                            </td>
                            <td>
                                <input type="number" id="amount" style={{ width: "90%" }}
                                    className="form-control"
                                    amount value={OrderForm.Amount} name="Amount"  />
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                                <label htmlFor='date'>
                                    order Date
                                </label>

                            </td>
                            <td>
                                <input type="date" value={Odate} id="date" className="form-control"
                                    style={{ width: "90%" }}
                                    onChange={(e) => setOdate(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit" className='btn btn-md btn-success'  >save</button>
                                <button onClick={() => navigate("/shopping1")} className='btn btn-md btn-danger' >
                                    Cancel
                                </button>
                            </td>
                            <td>

                            </td>
                        </tr>
                    </table>



                </form>



            </div>

        </div>
    )
}
