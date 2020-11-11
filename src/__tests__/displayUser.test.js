import DisplayUsers from '../components/dashboard/users/DisplayUsers';
import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const HomeComponent = () => {
	return render(
		<Provider store={store}>
				<Router>
					<DisplayUsers />
				</Router>
		</Provider>
	);
};

describe('Home component', () => {
    afterEach(cleanup)

    it('Should render home component properly', () => {
		const { asFragment } = HomeComponent();
		expect(asFragment(<DisplayUsers />)).toMatchSnapshot();
	});
})