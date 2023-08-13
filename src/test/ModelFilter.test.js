import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ModelFilter } from '../components';
import rootReducer from '../store';

describe("filter with ModelFilter", () => {
    it("renders ModelFilter", () => {
        const store = configureStore({ reducer: rootReducer });
        const { container } = render(<Provider store={store}><BrowserRouter><ModelFilter /></BrowserRouter></Provider>);

        const typo = container.getElementsByTagName('span')[0];
        expect(typo).toBeInTheDocument();
    });
});