import React, {  PureComponent } from 'react'
import TestFooter from '../TestFooter/TestFooter'
import '../TestIndex.css'
import testLogo from '../../../../Assests/Images/Group 3.svg'
import Testcarsole from './Testcarsole'

import { withRouter } from '../../../Dashboard/withRouter';
import axios from 'axios'
import { GlobalContext } from '../../../../globalstore';
 class TestDashboard extends PureComponent {
  static contextType = GlobalContext;
  constructor(props) {
    super(props);
    this.state = {
      userdata: [],
      name: "",
      photograpgh:[]
    };
    this.fetchdata = this.fetchdata.bind(this);
    this.searchdata = this.searchdata.bind(this);
    // this.fetchAritcaldata=this.fetchdata.bind(this);
  }

  componentDidMount() {
    this.fetchdata();
    // this.fetchAritcaldata()
    
  }

  
  fetchdata() {
    let myArray;
    let username;
    const { state, updateGlobalState } = this.context;
    const  {user } = state;
    
    
    axios
      .get('https://untitled-twkmuar27a-uc.a.run.app/api/customer-list/', {
        headers: { "Authorization": `Token ${user.token}` }
      })
      .then((response) => {
        myArray = response.data;
        for (let i = 0; i < myArray.length; i++) {
          if (myArray[i].id == user.user_id) {
            username = myArray[i].customer_name;
            this.searchdata(username);
          }
        }
      })
      .catch((error) => {
        console.log(error);
        
      });
  }

  searchdata(username) {
    this.setState({ name: username });
  }


  render() {
    return (
      <React.Fragment >
        <div className='blackcolor card  w-100 border-0 rounded-0'>
          <div className='card-body p-5 pb-0 text-white text-start'>
          <div className='col-12 d-flex flex-column col-lg-5 col-md-6 col-sm-12'>
          <img src={testLogo} alt='testLogo' className='testlogo' loading="lazy"/>
          <p className='fs-3 fw-bolder mt-4'>Welcome <span className='border-bottom'>{this.state.name}</span></p>
          <p className='fs-6 fw-bolder'>Hope you having a good day!</p>
          </div>
          
          <div>
            <p className='fs-3 fw-normal mt-4 mb-0'>Photograhy</p>
          <Testcarsole artical="Photography"></Testcarsole>
          </div>

          <div>
            <p className='fs-3 fw-normal mt-4 mb-0'>Learning</p>
          <Testcarsole artical="Learning"></Testcarsole>
          </div>
          </div>

        </div>
      </React.Fragment>
    )
  }
}
export default React.memo(withRouter(TestDashboard))