import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { cleanup } from '@testing-library/react';
import { getUsersAction, getUsers } from '../redux/actions/getUsersAction';
import { GET_USER_SUCCESS, GET_USER_FAIL, GET_USER_REQUEST } from '../redux/types/getUsersType';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({
    getUsers: {},
});

describe("Get user action", () => {

    afterEach(cleanup);
    const payload = {
      status: 200,
      statusText:"OK",
    };

    it('should get all users successfully', async () => {
        mockAxios.get.mockResolvedValue({
          status: 200,
          items: { id: 123, email: 'email' },
          message: 'message',
        });
    
        const results = await store.dispatch(
          await getUsersAction()
        );
        const token =  localStorage.getItem('token')
        console.log(results)
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(
          mockAxios.get
        ).toHaveBeenCalledWith(
          'https://phantom-cabal-staging.herokuapp.com/api/v1/auth',
          {
            headers: {
                'Authorization': token
            }
        }
        );
        expect(results.type).toEqual(GET_USER_SUCCESS);
      });
    
      it('should fail to get user', async () => {
        mockAxios.get.mockRejectedValue({
          data: {
            status: 400,
            error: 'fail',
          },
        });
    
        const results = await store.dispatch(
          await getUsersAction()
        );
    
        expect(results.type).toEqual(GET_USER_FAIL);
      });
    
      it('should not get user successfully', async () => {
        mockAxios.get.mockRejectedValue({
          response: {
            data: {
              message: 'error',
            },
          },
        });
    
        const results = await store.dispatch(
          await getUsersAction()
        );
        expect(results.type).toEqual(GET_USER_FAIL);
      });
})
