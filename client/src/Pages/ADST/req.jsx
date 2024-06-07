import React, { useContext } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import context from "../../Components/Context";
import { useLocation } from 'react-router-dom';

const RequestForm = () => {
    const { contract } = useContext(context);
    const location = useLocation();
    const x = location.state.userData;
    const account = location.state.account;

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    const add = async () => {
        const m2 = document.getElementById('n2').value;
        const m3 = document.getElementById('n3').value;
        const m4 = document.getElementById('date').value;
        const m5 = formattedDate;

        if (contract) {
            await contract.methods
                .push_element(x, m2, m3, m4, 'pending', 'pending', '' + currentDate.getTime())
                .send({ from: account })
                .then(function (result) {
                    document.getElementById('sucessful').innerHTML = `<b><p>Officer, your request has been added to the Blockchain. Other officers can now view and reply to your request.</p><p>You can view its status in get all request page</p></b>`;
                    axios.post("http://localhost:4000/SendTransactions", { Name: x, Date: m5, From: result.from, To: result.to, GasUsed: result.gasUsed, Transaction_Hash: result.transactionHash }, { withCredentials: true });
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                    toast.success('Transction Success', {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                })
                .catch(function (err) {
                    toast.error('Transction Failed', {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                });
        }
    };
    return (
        <><ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
            <br />
            <br />
            <br />
            <div className="container">
                <h6>Request Form</h6>
                <br />
                <div className="form">
                    <p>
                        Product :{' '}
                        <input type="text" id="n2" list="Lists" />
                        <datalist id="Lists">
                            <option value="Tanks" />
                            <option value="AR Guns" />
                            <option value="Shotgun" />
                            <option value="7mm ammo" />
                            <option value="5mm ammo" />
                            <option value="Granades" />
                            <option value="Smoke granades" />
                            <option value="First aid" />
                            <option value="Pain killers" />
                        </datalist>
                    </p>
                    <br />
                    <p>
                        Quantity : <input type="number" name="quantity" placeholder="quantity" id="n3" />
                    </p>
                    <br />
                    <p>
                        Last Date for contract : <input type="date" name="date" min={formattedDate} id="date" />
                    </p>
                    <br />
                    <button onClick={add} type="submit">
                        Submit
                    </button>
                    <br />
                    <br />
                    <div id="sucessful"></div>
                </div>
                <p id="sum"></p>
            </div>
        </>
    );
};

export default RequestForm;
