import React, { useEffect, useState } from 'react'

import { useHistory } from 'react-router';
import OptionBox from '../../Options/OptionBox';
import db from '../../Firebase';
import SearchIcon from '@material-ui/icons/Search';
import './Services.css';
import CircularIndeterminate from '../../Spinner/Spinner';

const Services = () => {

    const history = useHistory();

    const [Centers, setCenters] = useState([]);
    const [searchItem, setsearchItem] = useState("");
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
                <div className='heading__input' onClick={()=>{}}>
                    <SearchIcon />
                    <input 
                        placeholder="Search by location" 
                        type="text"
                        onChange={ e => setsearchItem(e.target.value) }
                    />
                </div>
                <div className='heading__test'>
                    {
                        Centers?.filter( (item) => {
                            if (searchItem === "" ) {
                                return item;
                            }
                            else if (item.data.address.toLowerCase().includes(searchItem.toLowerCase())) {
                                return item;
                            }
                            else {
                                return null;
                            }
                        } ).map(center => (
                            center && center.data ? (
                                <div>
                                    <OptionBox
                                    title={center.data.name}
                                    subtitle={center.data.address}
                                    contact={center.data.contact}
                                    />
                                </div>
                            ) : (
                                <div className='hidden'>
                                    <h3 style={{ color: 'gray' }}>No results found !!</h3>
                                </div>
                            )
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Services
