import React from 'react';
import background from '../assets/background.svg';
import sell from '../assets/sell.svg';
import buy from '../assets/buy.svg';
import {useState,useEffect} from 'react';
import axios from 'axios';



const TransactionDetailsBuyer = ({ transactionId }) => {
    const [buyerDetails, setBuyerDetails] = useState({
        name: "",
        email: "",
        website: "",
        price: "",
        deliveryDate: ""
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const details = ["Name", "Email", "Website", "Price", "Delivery Date"];

    useEffect(() => {
        const fetchBuyerDetails = async () => {
            try {
                setLoading(true);
                //const token = localStorage.getItem("token"); // Or get it from a secure source
                const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNzk5OTk5MDAwMDAwMDIwMDkxIiwiaXNTZWxsZXIiOmZhbHNlLCJpYXQiOjE3MzMwMDkyOTAsImV4cCI6MTczMzYxNDA5MH0.WsVZwbtjMOgXfS0Zd8MxjX_MiVdsLSc7C7VmrO6Qxhw" // Or get it from a secure source
                const response = await axios.get(
                    `http://localhost:3000/api/v1/transactions/${transactionId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                if (response.data.buyer) {
                    const buyer = response.data.buyer;
                    setBuyerDetails({
                        name: buyer.fullName || "N/A",
                        email: response.data.transaction.buyerCardNum || "N/A",
                        website: "" || "N/A",
                        price: response.data.transaction.price || "N/A",
                        deliveryDate: response.data.transaction.createdAt || "N/A"
                    });
                }
            } catch (err) {
                setError(err.message || "Failed to fetch seller details");
            } finally {
                setLoading(false);
            }
        };

        fetchBuyerDetails();
    }, [transactionId]);

    if (loading) {
        return <p className="text-white">Loading buyer details...</p>;
    }

    if (error) {
        return <p className="text-red-500">Error: {error}</p>;
    }

    return (
        <div className="bg-details-background bg-cover">
            <main className="flex flex-col md:h-screen h-full w-full pt-1 gap-10">
                <h1 className="text-white font-semibold md:text-[50px] text-[30px] inline border-b-2 border-white max-w-max mx-28">
                    Transaction details
                </h1>
                <div className="flex flex-col justify-between gap-5 px-16">
                    <div className="flex md:flex-row flex-col w-auto gap-10 items-center justify-center">
                        <div className="md:w-2/5 w-full bg-gradient-to-r from-white/40 to-white/10 md:h-full h-auto rounded-[38px] flex flex-col px-8 py-2 gap-2">
                            <div className="flex flex-row items-center gap-2">
                                <img src={sell} alt="Seller" />
                                <h2 className="text-white md:text-[30px] text-[20px] font-semibold inline border-b-2 border-white max-w-max">
                                    Seller details
                                </h2>
                            </div>
                            <ul className="list-none">
                                {Object.values(buyerDetails).map((value, index) => (
                                    <div className="flex flex-row gap-2 items-center" key={index}>
                                        <p className="text-baridi-yellow opacity-65 md:text-[20px] text-[12px]">
                                            {`${details[index]}:`}
                                        </p>
                                        <li className="text-white md:text-[20px] text-[12px]">{value}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="md:mx-28 md:p-0 p-5 text-white">
                    NOTE: Confirm button will be enabled once the seller confirms the transaction and marks the item as delivered
                </p>
            </main>
        </div>
    );
};

export default TransactionDetailsBuyer;
