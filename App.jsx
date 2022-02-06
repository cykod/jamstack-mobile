
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';


import { NativeBaseProvider } from 'native-base';

import ProductListScreen from "./src/screens/ProductListScreen"
import ProductScreen from "./src/screens/ProductScreen"

import { Provider as ProductProvider } from './src/context/ProductContext';


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={ProductListScreen} options={{ title:"NFTs For Sale" }} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default () => {
  return (
    <NativeBaseProvider>
        <SafeAreaProvider>
          <ProductProvider>
            <App/>
          </ProductProvider>
        </SafeAreaProvider>
    </NativeBaseProvider>
   );
}




