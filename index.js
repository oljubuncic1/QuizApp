import { AppRegistry } from 'react-native';
import App from './src/App';

// this line disables yellow box warnings on the emulator screen(warnings are still visible in the dev tools console)
console.disableYellowBox = true;

AppRegistry.registerComponent('QuizApp', () => App);
