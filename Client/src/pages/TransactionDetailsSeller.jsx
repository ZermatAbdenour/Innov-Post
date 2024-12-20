import React, { useEffect, useState } from 'react';
import background from '../assets/background.svg';
import sell from '../assets/sell.svg';
import buy from '../assets/buy.svg';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { localHostUrl } from '../utils';



const TransactionDetailsSeller = () => {
    const navigate = useNavigate();
    const transactionId = useParams().transactionId;
    const [sellerDetails, setSellerDetails] = useState({})
    const [buyerDetails, setBuyerDetails] = useState({})
    const [transaction, setTransaction] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchTransactionDetails = async () => {
            try {
                setIsLoading(true)
                console.log(isLoading)
                const token = localStorage.getItem("token");
                console.log(token)
                // if (!token) {
                //     navigate("/auth")
                // }

                const response = await axios.get(`${localHostUrl}/transactions/${transactionId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },

                })
                console.log('--------------')

                setSellerDetails(response.data.seller)
                setBuyerDetails(response.data.buyer)
                setTransaction(response.data.transaction)
                setIsLoading(false)
            } catch (e) {
                console.log(e)

            }
        }
        fetchTransactionDetails();
    }, [])

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

                                <div className=' flex flex-row gap-2 items-center'>
                                    <p className=' text-baridi-yellow opacity-65 md:text-[20px] text-[12px] '>Card Num</p>
                                    <li className=' text-white md:text-[20px] text-[12px]'>{sellerDetails.cardNum}</li>
                                </div>
                                <div className=' flex flex-row gap-2 items-center'>
                                    <p className=' text-baridi-yellow opacity-65 md:text-[20px] text-[12px] '>Name</p>
                                    <li className=' text-white md:text-[20px] text-[12px]'>{sellerDetails.fullName}</li>
                                </div>
                                <div className=' flex flex-row gap-2 items-center'>
                                    <p className=' text-baridi-yellow opacity-65 md:text-[20px] text-[12px] '>Address</p>
                                    <li className=' text-white md:text-[20px] text-[12px]'>Tebessa</li>
                                </div>
                            </ul>
                        </div>
                        <div className="md:w-2/5 w-full bg-gradient-to-r from-white/40 to-white/10 md:h-full rounded-[38px] flex flex-col px-8 pt-2 pb-6 gap-2">
                            <div className=' flex flex-row items-center gap-2'>
                                <img src={buy} />
                                <h2 className=' text-white text-[30px] font-semibold inline border-b-2 border-white max-w-max'>Buyer details</h2>
                            </div>
                            <ul className=' list-none'>

                                <div className=' flex flex-row gap-2 items-center'>
                                    <p className=' text-baridi-yellow opacity-65 md:text-[20px] text-[12px]'>Card Num</p>
                                    <li className=' text-white text-[20px] md:text-[20px] text-[12px]'>{buyerDetails.cardNum}</li>
                                </div>
                                <div className=' flex flex-row gap-2 items-center'>
                                    <p className=' text-baridi-yellow opacity-65 md:text-[20px] text-[12px]'>Name</p>
                                    <li className=' text-white text-[20px] md:text-[20px] text-[12px]'>{buyerDetails.fullName}</li>
                                </div>
                                <div className=' flex flex-row gap-2 items-center'>
                                    <p className=' text-baridi-yellow opacity-65 md:text-[20px] text-[12px] '>Address</p>
                                    <li className=' text-white md:text-[20px] text-[12px]'>Skikda</li>
                                </div>

                            </ul>
                        </div>
                    </div>
                    <div className=' flex md:flex-row flex-col md:px-28 md:justify-between gap-4'>
                        <div className=' flex md:flex-row flex-col gap-4'>
                            <button className=' px-7 py-3 bg-baridi-yellow text-white rounded-lg hover:bg-yellow-600 duration-100 font-semibold' onClick={async () => {
                                if (transaction.status === "buyerConfirmed") {
                                    await axios.post(`${localHostUrl}/transactions/buyerValidation`, {
                                        transactionId
                                    }, {
                                        headers: {
                                            Authorization: `Bearer ${localStorage.getItem("token")}`
                                        }
                                    })
                                }
                            }
                            }>Confirm</button>
                            <button className=' px-7 py-3 text-red-500 rounded-lg  duration-100 font-semibold border border-red-500'>Report transaction</button>
                        </div>
                        <button className=' px-7 py-3 bg-baridi-blue text-white rounded-lg   font-semibold'>View my transactions</button>
                    </div>

                </div>

            </main>
        </div>
    );
};

export default TransactionDetailsSeller;
