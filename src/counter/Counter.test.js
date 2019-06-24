import React from 'react'
import { Counter } from './Counter'
import { shallow } from 'enzyme'
// shallow rendering is where instead of rendering a JSX element to the DOM we render the JSON representation of it instead.

describe('Counter component', () => {
    it('starts with a count of 0', () => {
        const wrapper = shallow(<Counter />)
        const text = wrapper.find('p').text()
        expect(text).toEqual('Current count: 0')
    })
})