/**
 * @author RockSAMA,Vai
 * @repo https://github.com/879479119/Bilibili-React-Native
 */

import { AppRegistry } from 'react-native'
import app from './app/main.js'

AppRegistry.registerComponent('bili', ()=> app);

if(module.hot){
	module.hot.accept()
}