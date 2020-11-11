import AddNewUser from '../components/dashboard/users/AddNewUser';
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
					<AddNewUser />
				</Router>
		</Provider>
	);
};

describe('Home component', () => {
    afterEach(cleanup)

    it('Should render add user component properly', () => {
		const { asFragment } = HomeComponent();
		expect(asFragment(<AddNewUser />)).toMatchSnapshot();
	});
})