import React, { Component } from 'react'

export default class Recordsdata extends Component {
  constructor(props){
    super(props);
    this.state={
      // tableinfo:props.entrydata
    }
  }
  render() {
    return (
      <div className={`card rounded-0 border-0 `}>
        <div className='card-body'>
        <table  className='table text-start '>
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Name</th>
              <th>Email Id</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.entrydata.map(data=> {
              return (<tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td><button onClick={()=> {this.props.DeleteData(data)}} className='btn btn-danger'>Delete</button></td>
              </tr>)
            })}
            
          </tbody>
        </table>
      </div>
      </div>
    )
  }
}
