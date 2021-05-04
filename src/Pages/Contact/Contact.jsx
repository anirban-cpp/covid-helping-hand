import React, { useEffect, useState } from 'react'

import './Contact.css';
import db from '../../Firebase';
import CircularIndeterminate from '../../Spinner/Spinner';
import BasicTable from '../../Table/Table';
import { Divider } from '@material-ui/core';
import { useHistory } from 'react-router';

const Contact = () => {

    const [Volunteers, setvolunteers] = useState([]);

    const [loading, setloading] = useState(false);

    const history = useHistory();

    useEffect(() => {
        try {
            setloading(true);
            db.collection('Volunteers').orderBy('name').get()
            .then(snapshot => {
                setvolunteers(snapshot.docs.map( doc => ({ data: doc.data() }) ))
            }).then(event => {
                setloading(false);
            })
        } catch(error) {
            alert(error.message);
            setloading(false);
        }
    },[])

    if(loading) {
        return (
            <div className='spinner'>
                <CircularIndeterminate/>
            </div>
        );
    } else {
        return (
            <div className='contact'>
                <div className='whatsapp'>
                    <h3>Reach out to us by joining our Whatsapp group. </h3>
                    <div onClick={() => { history.push('/whatsapp') }}>
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png"
                            alt=""
                        />
                    </div>
                </div>
                <h1>Bengal Red Volunteers</h1>
                <Divider/>
                <div>
                    <BasicTable
                        rows={Volunteers}
                    />
                </div>
            </div>
        );
    }
}

export default Contact