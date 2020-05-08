import React, {useContext, useEffect} from 'react';
import {StatusBar, View, Text} from 'react-native';

import {LocalizationContext} from '../../localize';

import {userInformation} from '../../lib/user';

/*
From what I gather, this file gets loaded first somehow and
based on userInformation promise above redirects the user
to the login page or home page.

The LocalizationContext is a hook that is badly commented
and confusing on how it really works. Hoping it can be
mocked somehow since its effect/output dont matter for the tests

Tests wanted:

1. render (done)
2. ensure it redirects to Login page if userInformation resolves null
else go to the home page (failing)
*/

const Loader = ({navigation}) => {
  const {initializeAppLanguage} = useContext(LocalizationContext);

  initializeAppLanguage();

  useEffect(() => {
    (async () => {
      const userInfo = await userInformation();
      navigation.navigate(userInfo ? 'App' : 'Login'); // if there is no user, navigate to login.
    })();
  });

  return (
    <View>
      <StatusBar barStyle="default" />
      <Text>Loading...</Text>
    </View>
  );
};

export default Loader;
