import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import { Product } from './component'

const testData = {
    product: {
        name: 'chicken tikka masala',
        ingredients: ['rice', 'bread', 'chicken'],
        price: 12
    },
    decrement: () => console.log('decrement'),
    increment: () => console.log('increment')
}
it('test product name is on page', () => {
    const pr = render (<Product  {...testData}/>);
    console.log('Product: ' + pr);
    expect(screen.getByText(testData.product.name)).toBeInTheDocument();
});

it('test product ingredients is on page', () => {
    render (<Product  {...testData}/>);
    expect(screen.getByText('rice, bread, chicken')).toBeInTheDocument();
});

it('test product price and dollar sign are on page', () => {
    render (<Product  {...testData}/>);
    expect(screen.getByText(testData.product.price + ' $')).toBeInTheDocument();
});

it('test initial amount on page', () => {
    render (<Product  {...testData}/>);
    expect(screen.getByText(testData.product.price + ' $')).toBeInTheDocument();
});

// it('test increment function', () => {
//     const increment = jest.fn();

//     render(<Header effect={mockEffect} />);
//     render (<Product  {...testData, increment }/>);


//     expect(increment).toHaveBeenCalledTimes(1);
// });

// it('our third test', () => {
//     const mockCallback = jest.fn();
//     const mockEffect = jest.fn();

//     render(<Header effect={mockEffect} callback={mockCallback} />);

//     fireEvent(screen.getByText('click me'), new MouseEvent('click', {
//         bubbles: true,
//         cancelable: true,
//     }));

//     expect(mockCallback).toHaveBeenCalled();
// });