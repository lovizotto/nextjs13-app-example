import React from 'react';
import {PRICE} from "@prisma/client";

function Price({price}: {price:PRICE}) {
    const renderPrice = () => {
        switch (price) {
            case PRICE.CHEAP:
                return <span className="text-green-500">$$</span>
            case PRICE.REGULAR:
                return <span className="text-yellow-500">$$$</span>
            case PRICE.EXPENSIVE:
                return <span className="text-red-500">$$$$</span>
            default:
                return <span className="text-green-500">$$</span>
        }
    }
    return (
        <p className='flex mr-3'>
            {renderPrice()}
        </p>
    );
}

export default Price;
