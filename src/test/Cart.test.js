import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { Cart } from '../components';
import rootReducer from '../store';

describe("display Cart", () => {
    it("renders Cart", () => {
        const store = configureStore({ reducer: rootReducer });
        const { getByRole } = render(<Provider store={store}><BrowserRouter><Cart /></BrowserRouter></Provider>);

        const button = getByRole('button');

        expect(button.textContent).toBe('Checkout');
        expect(button.click).toBeDefined();
    });
});