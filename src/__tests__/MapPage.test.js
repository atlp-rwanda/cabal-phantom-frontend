import MapPage from '../pages/MapPage';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';


const MapPageComponent = () => {
    return render(
        <Provider store={store}>
            <Router>
                <MapPage />
            </Router>
        </Provider>
    );
};

describe('Map Page component', () => {
    afterEach(cleanup)

    it('Should render map page snapshot properly', () => {
        const { asFragment } = MapPageComponent();
        expect(asFragment(<MapPage />)).toMatchSnapshot();
    });
})
