import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ProductCard } from '../components';
import rootReducer from '../store';

describe("Display ProductCard", () => {
    it("renders ProdcutCard", () => {
        const store = configureStore({ reducer: rootReducer });

        const { getByRole } = render(<Provider store={store}><BrowserRouter><ProductCard /></BrowserRouter></Provider>);

        const addToCartButton = getByRole('button');

        expect(addToCartButton.textContent).toBe("Add To Cart");
        expect(addToCartButton.click).toBeDefined();
    });
});