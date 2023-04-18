import React from 'react';

const Card = ({ id, name, email }) => {
    
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robot" width='210px' height='210px' />
            <p className='f4 b'>{name}</p>
            <p>{email}</p>
        </div>
    );
}

export default Card;