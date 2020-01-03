import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

describe('Add inventory testing', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
        div)
    ReactDOM.unmountComponentAtNode(div)
    });

    it('renders the user inventory', () => {
        const wrapper = shallow(<Header  />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
});