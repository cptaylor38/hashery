import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const navigator = createSwitchNavigator(
  {
    Search: SearchScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Hashery',
    },
  }
);

export default createAppContainer(navigator);
