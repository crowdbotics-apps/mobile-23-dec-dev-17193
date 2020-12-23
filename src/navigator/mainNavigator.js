import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen216106Navigator from '../features/CopyOfBlankScreen216106/navigator';
import BlankScreen216102Navigator from '../features/BlankScreen216102/navigator';
import BlankScreen016099Navigator from '../features/BlankScreen016099/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
