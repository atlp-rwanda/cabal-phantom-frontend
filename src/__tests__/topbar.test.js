import TopBar from '../components/dashboard/Homepage/TopBar';
import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const TopBarComponent = () => {
	return render(
		<Provider store={store}>
				<Router>
					<TopBar />
				</Router>
		</Provider>
	);
};

describe('TopBar component', () => {
    afterEach(cleanup)

    it('Should render add user component properly', () => {
		const { asFragment } = TopBarComponent();
		expect(asFragment(<TopBar />)).toMatchSnapshot();
	});
})
