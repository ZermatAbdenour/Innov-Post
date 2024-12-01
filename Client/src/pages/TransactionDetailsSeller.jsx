import React, {useEffect, useState} from 'react';
import background from '../assets/background.svg';
import sell from '../assets/sell.svg';
import buy from '../assets/buy.svg';
import axios from "axios";


const TransactionDetailsSeller = ({ transactionId }) => {
    const [sellerDetails, setSellerDetails] = useState({
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
        const fetchSellerDetails = async () => {
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
                if (response.data.seller) {
                    const seller = response.data.seller;
                    setSellerDetails({
                        name: seller.fullName || "N/A",
                        email: response.data.transaction.sellerCardNum || "N/A",
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

        fetchSellerDetails();
    }, [transactionId]);

    if (loading) {
        return <p className="text-white">Loading seller details...</p>;
    }

    if (error) {
        return <p className="text-red-500">Error: {error}</p>;
    }
    return (
        // The page should have a background image
        <div className="bg-details-background bg-cover">
            <main className="flex flex-col md:h-screen h-full  w-full  pt-1 gap-10">
                {/* Adjusted the h1 tag for correct underline */}
                <h1 className="text-white font-semibold md:text-[50px] text-[30px] inline border-b-2 border-white max-w-max mx-28">
                    Transaction details
                </h1>
                <div className=' flex flex-col justify-between gap-5 px-16'>
                    <div className="flex md:flex-row flex-col  w-auto gap-10 items-center justify-center">
                        <div className="md:w-2/5 w-full bg-gradient-to-r from-white/40 to-white/10 md:h-full h-auto rounded-[38px] flex flex-col px-8 py-2 gap-2">
                            <div className=' flex flex-row items-center gap-2'>
                                <img src={sell} className='  ' />
                                <h2 className=' text-white md:text-[30px] text-[20px] font-semibold inline border-b-2 border-white max-w-max'>Seller details</h2>
                            </div>
                            <ul className=' list-none'>
                                {Object.values(sellerDetails).map((value, index) => (
                                    <div className=' flex flex-row gap-2 items-center'>
                                        <p className=' text-baridi-yellow opacity-65 md:text-[20px] text-[12px] '>{`${details[index]}:`}</p>
                                        <li key={index} className=' text-white md:text-[20px] text-[12px]'>{value}</li>
                                    </div>
                                ))}
                                {Object.values(sellerDetails).map((value, index) => (
                                    <div className=' flex flex-row gap-2 items-center'>
                                        <p className=' text-baridi-yellow opacity-65 md:text-[20px] text-[12px]'>{`${details[index]}:`}</p>
                                        <li key={index} className=' text-white md:text-[20px] text-[12px]'>{value}</li>
                                    </div>
                                ))}

                            </ul>
                        </div>
                        <div className="md:w-2/5 w-full bg-gradient-to-r from-white/40 to-white/10 md:h-full rounded-[38px] flex flex-col px-8 pt-2 pb-6 gap-2">
                            <div className=' flex flex-row items-center gap-2'>
                                <img src={buy} />
                                <h2 className=' text-white text-[30px] font-semibold inline border-b-2 border-white max-w-max'>Buyer details</h2>
                            </div>
                            <ul className=' list-none'>
                                {Object.values(sellerDetails).map((value, index) => (
                                    <div className=' flex flex-row gap-2 items-center'>
                                        <p className=' text-baridi-yellow opacity-65 md:text-[20px] text-[12px]'>{`${details[index]}:`}</p>
                                        <li key={index} className=' text-white text-[20px] md:text-[20px] text-[12px]'>{value}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className=' flex md:flex-row flex-col md:px-28 md:justify-between gap-4'>
                        <div className=' flex md:flex-row flex-col gap-4'>
                            <button className=' px-7 py-3 bg-baridi-yellow text-white rounded-lg hover:bg-yellow-600 duration-100 font-semibold'>Confirm</button>
                            <button className=' px-7 py-3 text-red-500 rounded-lg  duration-100 font-semibold border border-red-500'>Report transaction</button>
                        </div>
                        <button className=' px-7 py-3 bg-baridi-blue text-white rounded-lg   font-semibold'>View my transactions</button>
                    </div>

                </div>
                <p className=' md:mx-28 md:p-0 p-5 text-white'>NOTE: Confirm button will be enabled once the seller confirms the transaction and marks the item as delivered</p>
            </main>
        </div>
    );
};

export default TransactionDetailsSeller;
