import {BsFillArchiveFill, BsFillBellFill, BsFillGrid3X3GapFill, BsPeopleFill} from "react-icons/bs";
import React from "react";

function Sales() {

    return (
        <div className='w-fit shadow-md p-2 h-52 bg-white rounded-lg'>
            <h1 className='text-2xl'>Todays's Sales</h1>
            <p>sales summery</p>
            <div className='main-cards'>
                <div className='card'>
                    <BsFillArchiveFill className='card_icon'/>
                    <h1 className='font-bold'>$ 1k</h1>
                    <div className='card-inner'>
                        <h3>Total Sales</h3>
                    </div>
                    <p className='text-sky-600 text-xs'>+8% from yesterday</p>
                </div>
                <div className='card'>
                <BsFillArchiveFill className='card_icon'/>
                    <h1 className='font-bold'>300</h1>
                    <div className='card-inner'>
                        <h3>Total Order</h3>
                    </div>
                    <p className='text-sky-600 text-xs'>+5% from yesterday</p>
                </div>
                <div className='card'>
                <BsFillArchiveFill className='card_icon'/>
                    <h1 className='font-bold'>5</h1>
                    <div className='card-inner'>
                        <h3>Product Sold</h3>
                    </div>
                    <p className='text-sky-600 text-xs'>+1.2% from yesterday</p>
                </div>
                <div className='card'>
                    <BsFillArchiveFill className='card_icon'/>
                    <h1 className='font-bold'>8</h1>
                    <div className='card-inner'>
                        <h3>New Customers</h3>
                    </div>
                    <p className='text-sky-600 text-xs'>+0.5% from yesterday</p>
                </div>
            </div>
        </div>
    )
}

export default Sales