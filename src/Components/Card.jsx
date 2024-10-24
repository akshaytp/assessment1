import React from 'react'

const Card = ({ card, isFlipped, onClick }) => {
    return (
        <div
            onClick={onClick}
        >
            {isFlipped ? card.value : 'Click to flip'}
        </div>
    );
};

export default Card