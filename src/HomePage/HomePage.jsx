import { Card, CardContent } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import InfoBox from '../InfoBox/InfoBox';
import LineGraph from '../Line graph/LineGraph';
import OptionBox from '../Options/OptionBox';

import './HomePage.css';

const HomePage = () => {

    const [countryInfo, setcountryInfo] = React.useState({});

    const history = useHistory();

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
        .then(response => response.json())
        .then(data => setcountryInfo(data));
    },[])

    return (
        <div className='homepage' style={{ backgroundImage: `url("https://img.freepik.com/free-photo/doctor-holding-stethoscope-hospital-blur-blue-background_103324-537.jpg?size=626&ext=jpg")` }}> 
            <div className='homepage__left'>
                <div onClick={() => history.push('/services')}>
                    <OptionBox
                        title='Vaccine/Covid Test'
                        subtitle='Book your vaccine/test'
                        image="https://image.flaticon.com/icons/png/512/1256/1256512.png"
                    />
                </div>
                <div onClick={() => history.push('/beds')}>
                    <OptionBox
                    title='Bed'
                    subtitle='Check bed availability'
                    image="https://cdn.linak.com/-/media/images/applications/main/hospital-beds-application.jpg?bc=white&as=1&h=750&iar=0&w=750&rev=ead8e399-0c5f-4ebd-b2dd-7bdfa24a76dd&quality=75&hash=87485047912D9D994EBBCD5428189895"
                    />
                </div>
                <div onClick={() => history.push('/plasma')}>
                    <OptionBox
                        title='Plasma'
                        subtitle='Plasma/Blood Donation'
                        image="https://media.istockphoto.com/vectors/-vector-id1030773064?k=6&m=1030773064&s=612x612&w=0&h=xtVjOVa8FRk9XaL9sVWZsLv2v8X_JPD3tHSe9ewOYvA=" 
                    />
                </div>
                <div onClick={() => history.push('/oxygen')}>
                    <OptionBox
                        title='Oxygen'
                        subtitle='See oxygen suppliers'
                        image="https://assets.thehansindia.com/h-upload/2020/07/16/984200-gas.webp"
                    />
                </div>
            </div>
            <div className="homepage__right">
                <div className='homepage__graph'>
                    <Card>
                        <CardContent>
                            <LineGraph/>
                        </CardContent>
                    </Card>
                </div>
                <div className='homepage__cases'>
                    <div>
                        <InfoBox
                            title='Total Cases'
                            cases={countryInfo.todayCases}
                            total={countryInfo.cases} 
                        />
                    </div>
                    <div>
                        <InfoBox
                            title='Recovered'
                            cases={countryInfo.todayRecovered}
                            total={countryInfo.recovered} 
                        />
                    </div>
                    <div>
                        <InfoBox
                            title='Deaths'
                            cases={countryInfo.todayDeaths}
                            total={countryInfo.deaths} 
                        />
                    </div>
                </div>
                <div className='homepage__button'>
                    <button onClick={() => {history.push('/meals')}}>Covid Meals for India</button>
                    <button onClick={() => {history.push('/consult_doctor')}}>Consut a doctor</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
