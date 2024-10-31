import React, { Component } from 'react'
import Addrecords from './Addrecords';
import Recordsdata from './Recordsdata';

export default class Multipleentry extends Component {
    constructor(props){
        super(props);
        this.state={
            entrydata:[]
        }
       this.addData=this.addData.bind(this)    
       this.DeleteData=this.DeleteData.bind(this)  
    }

    addData(data){
      const idgenerate=this.state.entrydata.length + 1;
      data.id=idgenerate;
      this.setState(prevdata =>({
        entrydata:prevdata.entrydata.concat(data)
      }),()=>{console.log('Received data:', this.state.entrydata);})
    };

    DeleteData(data){
     this.setState(prevState =>({
      entrydata : prevState.entrydata.filter((alldata) =>( alldata.id !== data.id))
     }))
    }
  render() {
    return (
      <div className='card'>
        <div className='card-body'>
        <Addrecords onReceiveData={this.addData} entrydata={this.state.entrydata} />
        <Recordsdata DeleteData={this.DeleteData} entrydata={this.state.entrydata}/>
      </div>
      </div>
    )
  }
}
