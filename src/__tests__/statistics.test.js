import Content from '../components/dashboard/Homepage/Content';
import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const ContentComponent = () => {
	return render(
		<Provider store={store}>
				<Router>
					<Content />
				</Router>
		</Provider>
	);
};

describe('TopBar component', () => {
    afterEach(cleanup)

    it('Should render add user component properly', () => {
		const { asFragment } = ContentComponent();
		expect(asFragment(<Content />)).toMatchSnapshot();
	});
})
