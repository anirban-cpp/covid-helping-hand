import './App.css';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import Contact from './Pages/Contact/Contact';
import Services from './Pages/Services/Services';
import Doctor from './Pages/Doctor/Doctor';
import Beds from './Pages/Bed/Bed';
import Oxygen from './Pages/Oxygen/Oxygen';
import Plasma from './Pages/Plasma/Plasma';

function App() {

  return (
    <Router>
      <div className="App">
        {
          // Header
          // HomePage
          // Footer
        }
        <Header/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/consult_doctor' component={Doctor} />
            <Route exact path='/beds' component={Beds} />
            <Route exact path='/oxygen' component={Oxygen} />
            <Route exact path='/plasma' component={Plasma} />
            <Route path='/whatsapp' component={() =>  {
              window.location.href = 'https://chat.whatsapp.com/IO6NNhvWrhx1RP8tn6Hjuf'; 
              return null;
            }}/>
            <Route path='/cowin' component={() =>  {
              window.location.href = 'https://www.cowin.gov.in/home'; 
              return null;
            }}/>
            <Route path='/meals' component={() =>  {
              window.location.href = 'https://covidmealsforindia.com/'; 
              return null;
            }}/>
            <Route path='/tata' component={() =>  {
              window.location.href = 'https://www.tatahealth.com/online-Doctor-consultation/general-physician/'; 
              return null;
            }}/>
            <Route path='/andhra' component={() =>  {
              window.location.href = 'https://covidaps.com'; 
              return null;
            }}/>
            <Route path='/telangana' component={() =>  {
              window.location.href = 'https://covidtelangana.com'; 
              return null;
            }}/>
            <Route path='/gurgaon' component={() =>  {
              window.location.href = 'http://covidggn.com/'; 
              return null;
            }}/>
            <Route path='/delhi' component={() =>  {
              window.location.href = 'https://coviddelhi.com'; 
              return null;
            }}/>
            <Route path='/thane' component={() =>  {
              window.location.href = 'https://covidthane.org/availabiltyOfHospitalBeds.html'; 
              return null;
            }}/>
            <Route path='/bengaluru' component={() =>  {
              window.location.href = 'https://covidbengaluru.com/'; 
              return null;
            }}/>
            <Route path='/bengal' component={() =>  {
              window.location.href = 'https://covidwb.com'; 
              return null;
            }}/>
            <Route path='/bengaluru' component={() =>  {
              window.location.href = 'https://covidbengaluru.com/'; 
              return null;
            }}/>
            <Route path='/pune' component={() =>  {
              window.location.href = 'https://covidpune.com'; 
              return null;
            }}/>
            <Route path='/ahmedabad' component={() =>  {
              window.location.href = 'https://covidamd.com'; 
              return null;
            }}/>
            <Route path='/vadodara' component={() =>  {
              window.location.href = 'https://covidbaroda.com'; 
              return null;
            }}/>
            <Route path='/nagpur' component={() =>  {
              window.location.href = 'http://nsscdcl.org/covidbeds/AvailableHospitals.jsp'; 
              return null;
            }}/>
            <Route path='/nashik' component={() =>  {
              window.location.href = 'https://covidnashik.com'; 
              return null;
            }}/>
            <Route path='/madhya_pradesh' component={() =>  {
              window.location.href = 'https://covidmp.com'; 
              return null;
            }}/>
            <Route path='/uttar_pradesh' component={() =>  {
              window.location.href = 'http://dgmhup.gov.in/en/CovidReport'; 
              return null;
            }}/>
            <Route path='/rajasthan' component={() =>  {
              window.location.href = 'https://covidinfo.rajasthan.gov.in/COVID19HOSPITALBEDSSTATUSSTATE.as…'; 
              return null;
            }}/>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;