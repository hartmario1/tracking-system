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
          Intern: {
            screens: {
              Intern: 'second',
            },
          },
          Admin: {
            screens: {
              Admin: 'third'
            }
          }
        },
      },
      NotFound: '*',
      CreateTask: 'modal',
    },
  },
};

export default linking;