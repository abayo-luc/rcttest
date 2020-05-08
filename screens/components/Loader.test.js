/**
 * @format
 */

import 'react-native';
import React from 'react';
import Loader from './Loader';
import renderer from 'react-test-renderer';
import * as user from '../../lib/user';

const props = {
  navigation: {
    navigate: jest.fn(),
  },
};

let wrapper;

describe('Component: Loader', () => {
  beforeAll(() => {
    // spay on use effect, you can even mock what it will return
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
  });
  describe('User is absent', () => {
    beforeEach(async () => {
      // await for component to mount, if you don't, wrapper will be created with
      /// userInformation() function pending, and
      // therefore navigation will not be reached
      wrapper = await renderer.create(<Loader {...props} />);
    });
    afterEach(() => {
      jest.resetAllMocks();
    });
    it('should match snapshot', () => {
      // span shot testing
      expect(wrapper).toMatchSnapshot();
    });
    it('redirects to config page when user is not logged in', async () => {
      expect(props.navigation.navigate).toHaveBeenCalledWith('Login');
    });
  });

  describe('User is present', () => {
    beforeEach(async () => {
      user.userInformation = jest
        .fn()
        .mockReturnValue({id: 'qwerty123', name: 'luc', role: 'admin'});
      wrapper = await renderer.create(<Loader {...props} />);
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should navigate to app if user is logged in', () => {
      expect(props.navigation.navigate).toHaveBeenCalledWith('App');
    });
  });
});
