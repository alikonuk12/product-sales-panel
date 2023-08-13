import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrandFilter } from '../components';
import rootReducer from '../store';

describe("filter with BrandFilter", () => {
    it("renders BrandFilter", () => {
        const store = configureStore({ reducer: rootReducer });
        const { container } = render(<Provider store={store}><BrowserRouter><BrandFilter /></BrowserRouter></Provider>);

        const typo = container.getElementsByTagName('span')[0];
        expect(typo).toBeInTheDocument();
    });
});