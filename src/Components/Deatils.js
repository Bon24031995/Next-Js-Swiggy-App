import React, { useEffect, useState } from 'react'
import rating from '../images/rating.svg';

function Deatils() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(' http://localhost:3009/data2')
            .then(resp => resp.json())
            .then(json => {
                console.log(json);
                setData(json);
            })
    }, [])
    return (
        <div>
            <div className='heading mt-5 mb-5'>
                <div className='container'>
                    <div className='heading-text float-start' >
                        <h5>Wow Momos</h5>
                        <p>Hinjewadi Pune</p>
                    </div>
                    <div className='heading-star float-end'>
                        <img src={rating} alt='rating' />
                        <p>4.4</p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <hr />
                </div>
            </div>
            <br />
            <div className='data-fetch'>
                <div className='container'>
                    {
                        data.map((x) => (
                            <div key={x.id}>
                               <div className='card mt-3 mb-3 p-5'>
                                <div className='card-img'>
                                    <img src={x.image} alt='data-img' className='img-fluid float-end' style={{height:'75px',width:'95px'}} /> 
                                </div>
                                <div className='card-data float-start'>
                                    <h5>{x.title}</h5>
                                    <h5>{x.text}</h5>
                                    <br/>
                                    <h5>{x.price}</h5>
                                    </div>
                               </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Deatils