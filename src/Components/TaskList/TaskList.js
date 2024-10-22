import React, {  PureComponent } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaFilter } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import './TaskList.css'
const taklist=[
  {
    'id': 0,
    'taskname':'login screen',
    'Assigne':'Kishan',
    'status':'progress',
    'priorty':'Low',
    'Duedate':'21-10-2024'
  },
  {
    'id': 1,
    'taskname':'login screen',
    'Assigne':'Kishan',
    'status':'progress',
    'priorty':'Low',
    'Duedate':'21-10-2024'
  },
  {
    'id':2,
    'taskname':'login screen',
    'Assigne':'Kishan',
    'status':'complete',
    'priorty':'Medium',
    'Duedate':'21-10-2024'
  },
  {
     'id': 3,
    'taskname':'login screen',
    'Assigne':'Kishan',
    'status':'progress',
    'priorty':'High',
    'Duedate':'21-10-2024'
  }
]
export default class TaskList extends PureComponent {
  constructor(){
    super();
    console.log(taklist)
    this.state={
      datalist:taklist,
      popup:false,
      datepinaker:new Date(),
      statusfilter:''
    }
    this.addTask=this.addTask.bind(this);
    this.dateevent=this.dateevent.bind(this);
    this.statusfilter=this.statusfilter.bind(this);
    this.tablestatusupdate = this.tablestatusupdate.bind(this);
  }
  addTask(){
    this.setState((prevState) => ({popup:true}))
  }

  dateevent(e){
  this.setState((prevSate) =>({
    datepinaker:e.target.value
  }))
  }
  statusfilter(e){
    this.setState((prevSate)=>({
      statusfilter:e.target.value
    }))
  }
tablestatusupdate(event, id) {
    const newStatus = event.target.value; // get selected value
    // Update the status of the task with the given ID
    this.setState((prevState) => ({
      datalist: prevState.datalist.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      ),
    }));
  }
  render() {
    
    return (
      <div className='card w-100 h-100 '>
          <div className='card-header '>
            <p className='text-danger fs-5 fw-bolder test-start bg-white'>Task List :- JORA</p>
          </div>
          <div className='card-body overflow-auto'>
            <div className='row col-12'>
                <div className='w-auto'><button type='button' onClick={this.addTask} className=' btn btn-primary'>Add Task</button></div>
                <div className="input-group w-auto ">
                    <select className="custom-select border border-primary rounded-start border-right-0 w-75" value={this.state.statusfilter} onChange={this.statusfilter}>
                        <option selected value='' >All</option>
                        <option value="progress">progress</option>
                        <option value="complete">complete</option>
                    </select>
                    <div className="input-group-append w-25">
                        <button  className="btn btn-primary rounded-0 rounded-end " type="button">
                        <FaFilter />
                        </button>
                    </div>
                    </div>
            </div>
            <div className='custom-scrollbar-css tasklisttable overflow-auto'>
           <table className='table'>
            <thead>
             <tr className='sticky-top z-2'>
                <th>S.N</th>
                <th>Task Name</th>
                <th>Assignee</th>
                <th>Priorty</th>
                <th>status</th>
                <th>Due date</th>
                <th>Delete</th>
             </tr>
            </thead>
            <tbody>
              {this.state.datalist.map((data,i)=>{
               
                return ( <tr key={i} className={`${data.status === this.state.statusfilter  ? '':this.state.statusfilter ===''?'': 'collapse' }`}>
                  <td className='fw-bolder'>{ i}</td>
                  <td>{data.taskname}</td>
                  <td>{data.Assigne}</td>
                  <td><select value={data.status}  onChange={(e) => this.tablestatusupdate(e, data.id)}>
                    <option  value='' >All</option>
                        <option value="progress">progress</option>
                        <option value="complete">complete</option>
                    </select></td>
                  <td>{data.priorty}</td>
                  <td>{data.Duedate}</td>
                  <td className='text-danger cursor-pointer' onClick={()=>this.setState((prevState)=>({ datalist: prevState.datalist.filter((a,ii) =>ii !== i)}))}><MdDeleteForever /></td>
                  </tr>
                  )
                
               
               })}
            </tbody>
           </table>
          </div>
          <div className={`${this.state.popup ?"card w-50 z-3  position-absolute top-50 start-50 translate-middle":"d-none"}`} >  
            <div className='card-header'>
              <p className='bg-white text-danger fs-6 fw-bolder'>Create Task Form</p>
            </div>
            <div className='card-body'>
            <Formik
      initialValues={{ taskname: "",Assigne: "", status:'',Duedate: "" ,priorty:''}} 
      validate={(values) => {
        const errors = {};
        if (!values.taskname) {
          errors.fullname = "Enter your name";
        }
        else if(!values.Duedate){
          errors.Duedate = "Enter Due date";
        }
        else if(!values.status){
          errors.Duedate = "Enter status";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // apifetch(values);
    //   const newId =
    //   this.state.datalist.length > 0
    //     ? Math.max(...this.state.datalist.map((task) => task.id)) + 1
    //     : 1;

    // const newTask = { ...values, id: newId };     
          this.setState((prevState) => ({
            datalist: prevState.datalist.concat(values),
            popup: false
           }))
        setSubmitting(false);
        
    }}
  >
    {({ isSubmitting }) => (
      <Form className='justify-content-center col-sm-12 col-md-12 col-xl-12 col-xxl-12  text-left d-flex flex-column'>
        <div className='form-group text-left w-100'>
              <label className='form-label label-left w-100'>Task name</label>
              <Field className="form-control" autoFocus={true} type="text"  name="taskname" placeholder="Enter your username" />
              <ErrorMessage name="taskname"  className="text-danger text-start" component="div" />
            </div>

            <div className='form-group '>
              <label className='form-label label-left w-100'>Assignes</label>
              <Field  className="form-control" type="text" name="Assigne" placeholder="Enter user name" />
              <ErrorMessage name="Assigne"  className="text-danger text-start" component="div" />
            </div>
            <div className='form-group '>
              <label className='form-label label-left w-100'>Status</label>
              <Field as="select" className="form-select" type="text" name="status" placeholder="Enter user name" >
                <option>Select status</option>
                <option value='progress'>progress</option>
                <option value='complete'>complete</option>
              </Field>
              <ErrorMessage name="status"  className="text-danger text-start" component="div" />
            </div>
            <div className='form-group '>
              <label className='form-label label-left w-100'>Priorty</label>
              <Field as="select" className="form-select" type="select"  name="priorty"  placeholder="Enter user name">
                <option>Select status</option>
                <option value='Low'>Low</option>
                <option value='Medium'>Medium</option>
                <option value='High'>High</option>
              </Field>
              <ErrorMessage name="priorty"  className="text-danger text-start" component="div" />
              
            </div>
            <div className='form-group '>
              <label className='form-label label-left w-100'>Due Date</label>
              <Field  className="form-control" type="date"  name="Duedate"  placeholder="Enter user name" />
              <ErrorMessage name="Duedate"  className="text-danger text-start" component="div" />
              
            </div>
            <div className='form-group '>
              <label className='form-label label-left w-100'>Description</label>
              <Field  className="form-control" type="text"  name="Description"  placeholder="Enter user name" />
              <ErrorMessage name="Description"  className="text-danger text-start" component="div" />
              
            </div>
            <div className='mt-3 text-end'>
                  <button className='btn btn-success me-2' type="submit" disabled={isSubmitting} >Save</button>
                  <button className='btn  btn-danger' onClick={()=>this.setState((prevState) => ({popup: false}))}>Cancel</button>
                </div>
      </Form>
    )}</Formik>
      
            </div>
          </div>
          </div>
      </div>
    )
  }
}