import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux'
import { AsyncStorage } from 'react-native';

if (__DEV__) {
    const tron = Reactotron
        .setAsyncStorageHandler(AsyncStorage)
        .configure({
            name: "SGC Condômino"
        })
        .useReactNative()
        .use(reactotronRedux())
        .connect();

    tron.clear();

    console.tron = tron;
}
