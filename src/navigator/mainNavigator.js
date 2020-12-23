import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen316125Navigator from '../features/BlankScreen316125/navigator';
import BlankScreen016124Navigator from '../features/BlankScreen016124/navigator';
import BlankScreen016123Navigator from '../features/BlankScreen016123/navigator';
import CopyOfBlankScreen216109Navigator from '../features/CopyOfBlankScreen216109/navigator';
import CopyOfBlankScreen216106Navigator from '../features/CopyOfBlankScreen216106/navigator';
import BlankScreen216102Navigator from '../features/BlankScreen216102/navigator';
import BlankScreen016099Navigator from '../features/BlankScreen016099/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen316125: { screen: BlankScreen316125Navigator },
BlankScreen016124: { screen: BlankScreen016124Navigator },
BlankScreen016123: { screen: BlankScreen016123Navigator },
CopyOfBlankScreen216109: { screen: CopyOfBlankScreen216109Navigator },
CopyOfBlankScreen216106: { screen: CopyOfBlankScreen216106Navigator },
BlankScreen216102: { screen: BlankScreen216102Navigator },
BlankScreen016099: { screen: BlankScreen016099Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
