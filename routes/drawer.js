import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

// Stack Navigators that hold respective screens //
import AboutStack from './aboutStack'
import HomeStack from './homeStack'

// Top level(root) Navigator holding the stack navigators and other pages //
const rootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack,
    }
})

export default createAppContainer(rootDrawerNavigator)