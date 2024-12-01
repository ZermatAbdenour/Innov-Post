import React from 'react'

const ReportTransaction = () => {
    return (
        <div className="bg-details-background bg-cover">
            <main className="flex flex-col md:h-screen h-full   w-full  py-5 gap-10 items-center justify-center">
                <div className=' md:w-2/4 w-full bg-gradient-to-r from-white/40 to-white/10 md:h-full rounded-[38px] flex flex-col px-8 pt-2 pb-6 gap-2'>
                    <div className=' flex flex-row items-center gap-2'>
                        <h2 className=' text-white text-[30px] font-semibold inline border-b-2 border-white max-w-max'>Report Transaction</h2>
                    </div>
                    <form className=' flex flex-col gap-2'>
                        <label className=' text-white text-[20px] font-light' htmlFor='transaction'>Transaction ID</label>
                        <input className=' h-12 w-full bg-white/40 rounded-lg text-white text-[20px] px-4 focus:outline-none' type='text' name='transaction' id='transaction' />
                        <label className=' text-white text-[20px] font-light' htmlFor='transaction'>Upload supporting documents (Optional)</label>
                        <input className=' h-12 w-full bg-white/40 rounded-lg text-white text-[20px] px-4 focus:outline-none file:none' type='file' name='document' id='document' />
                        <label className=' text-white text-[20px] font-light' htmlFor='transaction'>Problem Description</label>
                        <textarea className=' h-12 w-full bg-white/40 rounded-lg text-white text-[20px] px-4 focus:outline-none file:none' type='file' name='document' id='document' />
                    </form>
                </div>
            </main>
        </div>
    )
}

export default ReportTransaction