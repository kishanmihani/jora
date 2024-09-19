import React, { Component } from 'react'
import MonthlyearnBarChart from '../MonthlyearnBarChart/MonthlyearnBarChart'
import ResponsivePie from '../Dashboardgraph/ResponsivePie'
import { AiOutlineDollar } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { FaArrowUp ,FaArrowDown } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet ,MdOutlineSpeakerNotes } from "react-icons/md";

export default class DashboardIndex extends Component {
  render() {
    const cardItimes=[
        {"heading":"Earning","persentag":37.8,"rate":"$198k"},
        {"heading":"Order","persentag":-2,"rate":"$2.4k"},
        {"heading":"Balance","persentag":-2,"rate":"$2.4k"},
        {"heading":"Total Sales","persentag":38,"rate":"89k"}
      ]
    return (
      <React.Fragment>
        <section >
                  <section id="card-container-only" >
                  {/* first card*/}
                  {cardItimes.map((item, index) => (
                  <div id="card" key={index}>
                    <div id="card-image-container">
                    <div id="card-image"  className={`${
                      item.heading ==='Earning' ?'card-image-zero'
                      :item.heading ==='Order'?'card-image-first'
                      :item.heading ==='Balance'? 'card-image-Second'
                      :'card-image-third'
                   }`}>
                  
                  {
                   item.heading ==='Earning' ?< AiOutlineDollar />
                  :item.heading ==='Order'?<MdOutlineSpeakerNotes  />
                  :item.heading ==='Balance'? <MdOutlineAccountBalanceWallet />
                  :< BsHandbag />
                   }
                    </div>
                    </div>
                    <div id="card-text">
                    <p id="card-first-heading" className="mb-0 fs-sm">{item.heading}</p>
                     <h3 id="card-first-rate">{item.rate}</h3>
                     <p id="card-first-text" className=" mb-0 fs-sm"><span className={ item.persentag >=0 ?"profit" :"lose"}>{ item.persentag >=0 ?<FaArrowUp /> :<FaArrowDown />}{item.persentag}</span> <span>this month</span></p>
                    
                   </div>
                   </div>
                    ))}
                  </section>

                    {/*graph section*/}

                    <section id="graph">
                    <MonthlyearnBarChart></MonthlyearnBarChart>
                    
                    <ResponsivePie></ResponsivePie>
                    </section>
                    </section>
      </React.Fragment>
    )
  }
}
