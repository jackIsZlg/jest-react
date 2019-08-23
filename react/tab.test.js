import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });
import Tab from './tab';

describe("A suite", function() {
    test("contains spec with an expectation", function() {
        expect(shallow(<Tab />).find('.foo').exists());
    });

    test("props传递是否正确", function() {
        let wrapper = mount(<Tab showTopScreenNum={5} />);
        expect(wrapper.props().showTopScreenNum).toBe(5);
        wrapper.setProps({ showTopScreenNum: 6 });
        expect(wrapper.prop('showTopScreenNum')).toBe(6);
    });

    test("state设置是否正确", function() {
        let wrapper = mount(<Tab />);
        expect(wrapper.find('.show')).toEqual({});
        wrapper.setState({ showTop: true });
        expect(wrapper.find('.show').exists());
    });

    test('测试 shallow 500次', () => {
        for (let i = 0; i < 500; i++) {
            const nav = shallow(<Tab />)
            expect(nav.find('a').text()).toBe("首页");
        }
    })

    test('测试render500次', () => {
        for (let i = 0; i < 500; i++) {
            const nav = render(<Tab />)
            expect(nav.find('a').text()).toBe("首页");
        }
    })

    test('测试mount500次', () => {
        for (let i = 0; i < 500; i++) {
            const nav = mount(<Tab />)
            expect(nav.find('a').text()).toBe("首页");
        }
    })
});
