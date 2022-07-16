import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          LogIn: {
            screens: {
              LogIn: 'first'
            }
          },
          Home: {
            screens: {
              Home: 'second',
            },
          },
        },
      },
      NotFound: '*',
      CreateTask: 'modal',
    },
  },
};

export default linking;