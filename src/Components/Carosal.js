import React, { useRef } from 'react';
import right from '../images/right.svg';
import left from '../images/left.svg';
import biryani from '../images/biryani.jpg';
import rolls from '../images/rolls.webp';
import burger from '../images/burger.jpg';
import pizza from '../images/pizza.jpg';
import chainese from '../images/chinese.webp';

function Carosal() {

    const ContinerRef = useRef(null);


    return (
        <div>
            <div className='heading mt-5'>
                <div className='container'>
                    <div className='heading-title float-start mt-2'>
                        <h3>Top Selling Product</h3>
                    </div>
                    <div className='heading-button float-end mt-2'>
                        <button className='btn btn-primary me-3' onClick={()=>{ContinerRef.current.scrollBy({
                            left:-200,
                            behavior:'smooth'
                        })}}><img src={left} alt='right' /></button>
                        <button className='btn btn-primary' onClick={()=>{ContinerRef.current.scrollBy({
                            left:200,
                            behavior:'smooth'
                        })}}><img src={right} alt='left' /></button>
                    </div>
                </div>
            </div>
            <br />
            <div className='menu-items mt-5 mb-5'>
                <div className='container' ref={ContinerRef} style={{ display: 'flex', overflowX: 'hidden', alignItems:'center'}}>
                    <div className='item1'>
                        <div className='card me-3' style={{ width: '12rem', border: 'none' }}>
                            <img src={biryani} alt='biryani' />
                            <div className='card-body'>
                                <h3 className='text-center text-danger'>Biryani</h3>
                            </div>
                        </div>
                    </div>
                    <div className='item2'>
                        <div className='card me-3' style={{ width: '12rem', border: 'none' }}>
                            <img src={rolls} alt='rolls' className='img-fluid w-100' style={{ width: '12rem', height: '185px' }} />
                            <div className='card-body'>
                                <h3 className='text-center text-danger'>rolls</h3>
                            </div>
                        </div>
                    </div>
                    <div className='item3'>
                        <div className='card me-3' style={{ width: '12rem', border: 'none' }}>
                            <img src={pizza} alt='pizza' className='img-fluid w-100' style={{ width: '12rem', height: '185px' }} />
                            <div className='card-body'>
                                <h3 className='text-center text-danger'>pizza</h3>
                            </div>
                        </div>
                    </div>
                    <div className='item4'>
                        <div className='card me-3' style={{ width: '12rem', border: 'none' }}>
                            <img src={burger} alt='burger' className='img-fluid w-100' style={{ width: '12rem', height: '185px' }} />
                            <div className='card-body'>
                                <h3 className='text-center text-danger'>Burger</h3>
                            </div>
                        </div>
                    </div>
                    <div className='item5'>
                        <div className='card me-3' style={{ width: '12rem', border: 'none' }}>
                            <img src={chainese} alt='Chainese' className='img-fluid w-100' style={{ width: '12rem', height: '185px' }} />
                            <div className='card-body'>
                                <h3 className='text-center text-danger'>Chainese</h3>
                            </div>
                        </div>
                    </div>
                    <div className='item6'>
                        <div className='card me-3' style={{ width: '12rem', border: 'none' }}>
                            <img src={biryani} alt='biryani' />
                            <div className='card-body'>
                                <h3 className='text-center text-danger'>Biryani</h3>
                            </div>
                        </div>
                    </div>
                    <div className='item7'>
                        <div className='card me-3' style={{ width: '12rem', border: 'none' }}>
                            <img src={rolls} alt='rolls' className='img-fluid w-100' style={{ width: '12rem', height: '185px' }} />
                            <div className='card-body'>
                                <h3 className='text-center text-danger'>rolls</h3>
                            </div>
                        </div>
                    </div>
                    <div className='item8'>
                        <div className='card me-3' style={{ width: '12rem', border: 'none' }}>
                            <img src={pizza} alt='pizza' className='img-fluid w-100' style={{ width: '12rem', height: '185px' }} />
                            <div className='card-body'>
                                <h3 className='text-center text-danger'>pizza</h3>
                            </div>
                        </div>
                    </div>
                    <div className='item9'>
                        <div className='card me-3' style={{ width: '12rem', border: 'none' }}>
                            <img src={burger} alt='burger' className='img-fluid w-100' style={{ width: '12rem', height: '185px' }} />
                            <div className='card-body'>
                                <h3 className='text-center text-danger'>Burger</h3>
                            </div>
                        </div>
                    </div>
                    <div className='item10'>
                        <div className='card me-3' style={{ width: '12rem', border: 'none' }}>
                            <img src={chainese} alt='Chainese' className='img-fluid w-100' style={{ width: '12rem', height: '185px' }} />
                            <div className='card-body'>
                                <h3 className='text-center text-danger'>Chainese</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carosal