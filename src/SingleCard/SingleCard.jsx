import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SingleCard.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleCard = (props) => {
    //console.log(props)
    const {_id, name, picture, years_of_experience, number_of_recipes, likes} = props.data
    return (
        <div className='w-100 mt-5'>
            <img className='w-100' style={{ height: '220px' }} src={picture} alt="" />
            <h3>Name:{name}</h3>
            <p>{years_of_experience} Years of Experience</p>
            <p>{number_of_recipes} Recipes</p>
            <p>Likes: {likes}</p>
            <br />
            <Link to={`/chef/${_id}`} variant="info">View Recipes</Link>
        </div>
    );
};

export default SingleCard;