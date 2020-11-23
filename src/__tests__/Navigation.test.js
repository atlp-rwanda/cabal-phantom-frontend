import React from 'react'
import { animateScroll as scroll , Link} from 'react-scroll'
import { act } from 'react-dom/test-utils';
import enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navigation from '../components/LandingPage/Navigation'

enzyme.configure({ adapter: new Adapter() });
const defaultProps = {
  history: { push: jest.fn() },
  user: {},
};
const wrapper = shallow(<Navigation {...defaultProps} />);


describe("Navigation Component Test", () => {
     it('should scroll to Top',()=>{
        const button = wrapper.find('.logo');
        act(() => {
          button.simulate('click', { target: { value: scroll.scrollToTop() } });
        });
    })
    it('should click on icon',()=>{
        const button = wrapper.find('.menu-icon');
        act(() => {
          button.simulate('click', { target: { value: 'nav ul .showing'} });
        });
    })

    it('should scroll down/up',()=>{
        const button = wrapper.find('.wrapper');
        // const button =  window.scrollTo(0, 100);      
        act(() => {
          button.simulate('scroll', { target: { value: 'nav.black ul' } });
        });
        //expect(act()).toBe('.showing')

    })

 
})
