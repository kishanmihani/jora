import React from 'react'
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer'
import { BarChart } from '@mui/x-charts/BarChart';

function MonthlyearnBarChart() {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490,2000,1500,2500,1900,2300];
const xLabels = ['Jan','FEB','MAR','APR','MAY','JUN','JULY','AUG','SEP','OCT','NOV','DEC'];
  return (
    <React.Fragment>
        <div id="graph-part-one">
               
               <div id="header-part">
                <h4 className='m-0'>Overview</h4>
                <p className='m-0'>Monthly Earning</p>
               </div>
               <div id="header-prat-two">
                 <select>
                       <option>Quaterly</option>
                 </select>
               </div>

               <div id="barchart-container" style={{'height':'38vh'}}>
                {/* <ResponsiveChartContainer> */}
                <BarChart
                 series={[
     
    { data: uData, label: 'uv', id: 'uvId', color: '#2a20c2' },
  ]}
                   xAxis={[{ data: xLabels, scaleType: 'band' },{stroke: 'none',ticks:{display:true}}]}
  
              />            
              {/* </ResponsiveChartContainer>    */}
               </div>
               </div>
    </React.Fragment>
  )
}

export default React.memo(MonthlyearnBarChart)