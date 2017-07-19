process.env.NODE_ENV = 'test'

/* eslint-env mocha */
import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import Drawer from '../src/Drawer'
import {spy} from 'sinon';
import InfiniteSurface from '../src/Drawer/Drawer';

describe('<Drawre />', () => {
    describe('state', () => {
        const wrapper = shallow(
            <Drawer onTouchTap={() => {
            }}>Label</Drawer>
        );

        it('renders with initial state properly', () => {
            assert.strictEqual(wrapper.state('width'), 300);
        });
    });
});