import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import { createStackNavigator } from 'react-navigation-stack';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Hashery',
      headerTitleStyle: {
        alignSelf: 'center',
        fontSize: 22,
      },
    },
  }
);

export default createAppContainer(navigator);
