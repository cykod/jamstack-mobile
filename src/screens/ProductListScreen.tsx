import React, { 
  useEffect, 
  useContext, 
  useCallback,
  useLayoutEffect
} from 'react';
import { 
  View, 
} from 'react-native';

import {
  Box,
  FlatList,
  Heading,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  Pressable
} from "native-base";


import { Context as ProductContext } from '../context/ProductContext';

const ProductListScreen = ({ navigation }) => {

  const { state, loadProducts } = useContext(ProductContext);

  const { products } = state

  useEffect(() => {
    loadProducts()
  }, [])

  const renderItem = useCallback((entry) => {
    return (
      <Box
        bg="white"
        borderBottomWidth="1"
        borderColor="gray.600"
       >
       <Pressable 
        pl="4"
        pr="5"
        py="6"
        onPress={() => 
          navigation.navigate(
             "Product", 
             { id: entry.item.id }
          )}
      ><VStack>
        <Text color="coolGray.800"
              bold>{entry.item.attributes.title}</Text>
        <Text color="coolGray.400">
          ${entry.item.attributes.cost}
        </Text>
      </VStack>
      </Pressable>
      </Box>
    )
  }, [])


  return (
    <FlatList
      data={products}
      keyExtractor={ prd => prd.id.toString() }
      renderItem={renderItem} 
     />

  );
}

export default ProductListScreen