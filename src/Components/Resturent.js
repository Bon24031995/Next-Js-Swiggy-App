import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Resturent(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3007/data')
            .then(resp => resp.json())
            .then(json => {
                setData(json);
            })
    }, []);


    return (
        <div>
            <div className='resturent-details mt-5'>
                <div className='container'>
                    <div className='resturent-heading'>
                        <h3 className='fw-bold'>Top restaurant chains in Pune</h3>
                    </div>
                    <div className='fetching-deatils'>
                        <Row lg={4}>
                            {
                                data.filter((item) => {
                                    if (props.data == '') {
                                        return true;
                                    }
                                    else {
                                        return props.data.toLocaleLowerCase() === '' ? data : item.title.toLocaleLowerCase().includes(props.data);
                                    }
                                }).map((x) => (
                                    <div key={x.id}>
                                        <Col className='mt-3 mb-3'>
                                            <Link to={'/Wowmomo'} style={{textDecoration:'none'}}>
                                                <Card style={{ width: '12rem', border: 'none' }}>
                                                    <Card.Img variant="top" src={x.images} className='img-fluid w-100' style={{ width: '12rem', height: '182px' }} />
                                                    <Card.Body>
                                                        <Card.Title>{x.title}</Card.Title>
                                                        <Card.Text>
                                                            <h6>Timing :{x.time}</h6>
                                                            <h6>Rating : {x.ratings}</h6>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Link>
                                        </Col>
                                    </div>
                                ))
                            }
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resturent