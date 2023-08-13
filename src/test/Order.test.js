import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { Order } from '../components';
import rootReducer from '../store';

describe("sort with Order", () => {
    it("renders Order", () => {
        const store = configureStore({ reducer: rootReducer });
        const { container } = render(<Provider store={store}><BrowserRouter><Order /></BrowserRouter></Provider>);

        const typo = container.getElementsByTagName('span')[0];
        expect(typo).toBeInTheDocument();
    });
});