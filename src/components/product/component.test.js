import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import { Product } from './component'
import {increment, decrement, amount} from '../../hooks/use-value'

    const testProduct = {
        name: 'chicken tikka masala',
        ingredients: ['rice', 'bread', 'chicken'],
        price: 12
    }

    const testData = {
        product: testProduct,
        amount: 0,
        increment: increment,
        decrement: decrement
    }

it('test product name is on page', () => {
    const pr = render (<Product {...testData}  />);
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

it('test initial amount', () => {
    
    render (<Product  {...testData} />);

    const counter = screen.getByTestId('counter')
    expect(counter.innerHTML).toBe('0');
});


it('test click plus button', () => {
    const mockCallback = jest.fn();
    
    render (<Product  {...testData} increment={mockCallback}/>);
    const plusBtn = screen.getByText('+')

    fireEvent(plusBtn, new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
    }));

    expect(mockCallback).toHaveBeenCalledTimes(1);
});

it('test click minus button', () => {
    const mockCallback = jest.fn();
    
    render (<Product  {...testData} decrement={mockCallback}/>);
    const minusBtn = screen.getByText('-')

    fireEvent(minusBtn, new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
    }));

    expect(mockCallback).toHaveBeenCalledTimes(1);
});