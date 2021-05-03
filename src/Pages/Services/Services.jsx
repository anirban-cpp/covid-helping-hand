import React, { useEffect, useState } from 'react'

import { useHistory } from 'react-router';
import OptionBox from '../../Options/OptionBox';
import db from '../../Firebase';

import './Services.css';
import CircularIndeterminate from '../../Spinner/Spinner';

const Services = () => {

    const history = useHistory();

    const [Centers, setCenters] = useState([]);

    const [isloading, setloading] = useState(false);

    useEffect(() => {
        try {
            setloading(true);
            db.collection('Test_Center').get()
            .then(snapshot => {
                setCenters(snapshot.docs.map(doc => ({ data: doc.data() })))
            }).then(event => {
                setloading(false);
            })
        } catch (error) {
            alert(error.message);
        }
    },[])

    if(isloading) {
        return (
            <div className='spinner'>
                <CircularIndeterminate/>
            </div>
        );
    } else {
        return (
            <div className="services">
                <div className='heading__book'>
                    <h1>Vaccination</h1>
                    <button onClick={() => history.push('/cowin')}>Book your Vaccine</button>
                </div>
                <h1>Testing centers</h1>
                <div className='heading__test'>
                {
                    Centers?.map(center => (
                        <div>
                            <OptionBox
                            title={center.data.name}
                            subtitle={center.data.address}
                            contact={center.data.contact}
                            />
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Services
