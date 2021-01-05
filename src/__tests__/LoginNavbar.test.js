import Navigation from '../components/Navigation';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';


const NavigationComponent = () => {
    return render(
        <Provider store={store}>
            <Router>
                <Navigation />
            </Router>
        </Provider>
    );
};

describe('Navigation component', () => {
    afterEach(cleanup)

    it('Should render navigation snapshot component properly', () => {
        const { asFragment } = NavigationComponent();
        expect(asFragment(<Navigation />)).toMatchSnapshot();
    });
})
