import * as actions from './index'
import * as types from './types';

it('should create action to do', () => {
    const action = "action";

    const expected = {"payload": {"data": "action"}, "type": "TYPE"};

    expect(actions.doSomething(action)).toEqual(expected)
});