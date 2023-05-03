import React from 'react';
import bg from '../../../../assets/chef2.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './LeftNav.css'
import { Container } from 'react-bootstrap';

const LeftNav = () => {
    return (
             <div className='mt-5'>
                <Container>
                    <figure className='position-relative'>
                        <img className='img-fluid' src={bg} alt="" />
                        <figcaption><h4>Try Our Best Food</h4></figcaption>
                    </figure>
                </Container>
             </div>
            );
          };

export default LeftNav;