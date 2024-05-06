import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img1 from '../images/passkey.svg';
import img2 from '../images/percent.svg';
import logo from '../images/swiglogo.png';
import Carosal from './Carosal';
import Resturent from './Resturent';

function Navbars() {

    const [search,setSearch] = useState('');
    

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt='logo' height={'40px'} width={'auto'}/>
                    </Navbar.Brand>
                    <div className='search bar mx-auto'>
                        <form>
                            <div className='row'>
                                <div className='col-lg-8'>
                                    <input value={search} onChange={(e)=>{setSearch(e.target.value)}} className='form-control w-100' placeholder='Search...' />
                                </div>
                                <div className='col'>
                                <button className='btn btn-primary'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">
                           <img src={img2} className='w-25' alt='password' /> Offers</Nav.Link>
                        <Nav.Link href="#pricing">
                           <img src={img1} className='w-25' alt='sing in'/> Sign in</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
         <Carosal />
         <Resturent data={search} />
        </div>
    )
}

export default Navbars