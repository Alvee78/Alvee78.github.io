import * as React from 'react';
import { Appbar } from 'react-native-paper';

const MyAppBar = () => (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title="My App" subtitle="Home" />
    <Appbar.Action icon="magnify" onPress={() => {}} />
    <Appbar.Action icon="dots-vertical" onPress={() => {}} />
  </Appbar.Header>
);

export default MyAppBar;
