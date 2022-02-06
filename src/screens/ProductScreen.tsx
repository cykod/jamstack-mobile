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
  Image,
  Center,
  Pressable,
  AspectRatio,
} from "native-base";

import { find } from "lodash"


import { Context as ProductContext } from '../context/ProductContext';

const ProductScreen = ({ route, navigation }) => {

  const { state } = useContext(ProductContext);

  const { products } = state

  const productID = route.params.id

  const product = find(products, (prd) => prd.id == productID)

  useEffect( () => { 
   navigation.setOptions({
      title: product.attributes.title
    });
  }, [ product ])

  return (
     <Box
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="2"
      p="5"
      bg="white"
      mx="5"
      my="2">
      <VStack>
        <AspectRatio w="100%" ratio={1}>
          <Image
            alt={product.attributes.title}
            source={{
              uri: product.attributes.picture.data.attributes.formats.thumbnail.url
            }}
            />
        </AspectRatio>
        <Text
            fontSize="md"
            fontWeight="500"
            mt="2"
          >{product.attributes.description}</Text>
        <HStack justifyContent="space-between" pt="4">
          <HStack>
            <Text>Cost ${product.attributes.cost}</Text>
          </HStack>
        </HStack>
      </VStack>
  </Box>
  );
}

export default ProductScreen
