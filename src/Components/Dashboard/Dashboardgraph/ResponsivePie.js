import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import './ResponsivePie.css'
import { ResponsiveChartContainer } from '@mui/x-charts';
function ResponsivePie() {
  return (
    <React.Fragment>
         <div id="graph-part-two" >
                    <div id="Customers-container">
                    <h4 className='m-0'>Customers</h4>
                    <p className='m-0'>Customers that buy products</p>
                    </div>
                    <div className='ResponsivePiechart'>
                     {/* <ResponsiveChartContainer> */}
                      <PieChart   colors={['red', 'blue', 'green']} 
                      slotProps={{ legend: { hidden:true } }}
                    series={[
                    {
                      data:[
        { id: 0, value: 10, label: 'series A' },
        { id: 2, value: 20, label: 'series C' },
      ],
                      // innerRadius: 60 ,
                      // outerRadius: 90,
                      paddingAngle: 0,
                      cornerRadius: 0,
                      startAngle: 0,
                                          }]}
                    />
{/* </ResponsiveChartContainer>  */}
</div>
                    <div id="Customer-pertsentage" className='rounded-circle p-3'>
                       <h3 className='m-0 fs-6'>65%</h3>
                       <p className='m-0 fs-sm'>Total New<br/>Customers</p>
                    </div>
                    </div>
    </React.Fragment>
  )
}

export default React.memo(ResponsivePie)