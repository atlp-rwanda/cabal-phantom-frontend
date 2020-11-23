import React from 'react'
import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import counterReducer from '../redux/reducers/testReducer';
import { increment, decrement } from '../redux/actions/testAction';
import Counter from '../components/Counter';
import { Provider } from 'react-redux'
import store from '../redux/store'
import userEvent from '@testing-library/user-event'

const AppComponent = () => {
    return render(
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}

describe('Test Counter', () => {
    it('Capturing Snapshot of Counter', () => {
        const renderedValue = AppComponent()
        expect(renderedValue).toMatchSnapshot();
    });

    it("should test testAction", () => {
        expect(increment()).toHaveProperty('type')
        expect(decrement()).toHaveProperty('type')
    })

    it('should increment in testReducer', () => {
        let state = { value: 0 }
        state = counterReducer(state, { type: "INCREMENT" })
        expect(state).toEqual({ value: 1 })
    });

    it('should decrement in testReducer', () => {
        let state = { value: 0 }
        state = counterReducer(state, { type: "DECREMENT" })
        expect(state).toEqual({ value: -1 })
    });

    it('should return state in testReducer', () => {
        let state = { value: 0 }
        state = counterReducer(state, { type: "" })
        expect(state).toEqual(state)
    });

    it("should increment", () => {
        const { getByLabelText } = AppComponent();
        const incrementButton = getByLabelText("incr")
        const value = getByLabelText("value")
        const num = parseInt(value.innerHTML);
        userEvent.click(incrementButton)
        expect(parseInt(value.innerHTML)).toBe(num + 1)
    })

    it("shoulddecrement", () => {
        const { getByLabelText } = AppComponent();
        const decrementButton = getByLabelText("decr")
        const value = getByLabelText("value")
        const val = parseInt(value.innerHTML);
        userEvent.click(decrementButton)
        expect(parseInt(value.innerHTML)).toBe(val - 1)
    })

});
