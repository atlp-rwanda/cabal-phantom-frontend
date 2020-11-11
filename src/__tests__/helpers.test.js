import IconButton from '../components/dashboard/helpers/IconButton';
import ContentHeader from '../components/dashboard/helpers/ContentHeader';
import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { GitHub } from '@material-ui/icons';


const TopBarComponent = () => {
	return render(
		<Provider store={store}>
				<Router>
					<IconButton />
				</Router>
		</Provider>
	);
};


describe('TopBar component', () => {
    afterEach(cleanup)

    it('Should render add user component properly', () => {
		const { asFragment } = TopBarComponent();
		expect(asFragment(<IconButton />)).toMatchSnapshot();
    });
    
})
