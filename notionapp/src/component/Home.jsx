import React from 'react'
import Bargraph from './maps/Bargraph'
import Linegraph from './maps/Linegraph'
import Sales from './Sales'
import Lineupeer from './maps/Lineupeer'
import Stackmap from './maps/Stackmap'
import Areamap from './maps/Areamap'
import Mapchart from "./maps/Mapchart";


function Home() {

    return (
        <main className='main-container'>
            <div className='charts'>
                <Sales/>
                <div className='bargraphbg shadow-md mb-2 ml-2 mr-2'>
                    <Lineupeer/>
                </div>
            </div>
            <div className='charts-2'>
                <div className='bargraphbg shadow-md m-2'>
                    <Bargraph/>
                </div>
                <div className='bargraphbg shadow-md m-2'>
                    <Linegraph/>
                </div>
                <div className='bargraphbg shadow-md m-2'>
                    <Bargraph/>
                </div>
            </div>
            <div className='charts-2'>
                <div className='bargraphbg shadow-md m-2'>
                    <Areamap/>
                </div>
                <div className='bargraphbg shadow-md m-2'>
                    <Mapchart />
                </div>
                <div className='bargraphbg shadow-md m-2'>
                    <Stackmap/>
                </div>
            </div>
        </main>
    )
}

export default Home