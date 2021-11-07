/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import {
  AspectRatio,
  Box,
  Image,
  Center,
  Stack,
  Text,
  HStack,
  Heading,
  Button,
  Icon,
} from 'native-base';
import React from 'react';
import Dialog from './Dialog';

const ItemCard = ({ item, menu, onOpen, onClose, onAccept, visible }) => {
  console.log(item);
  return (
    <>
      <Box
        rounded="lg"
        overflow="hidden"
        width="72"
        shadow={1}
        _light={{ backgroundColor: 'gray.50' }}
        _dark={{ backgroundColor: 'gray.700' }}
      >
        <Box>
          <AspectRatio ratio={16 / 9}>
            <Image source={{ uri: item.image, method: 'POST' }} alt="image" />
          </AspectRatio>
          <Center
            bg="violet.500"
            _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
            position="absolute"
            bottom={0}
            px="3"
            py="1.5"
          >
            {item.category.name}
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {item.name}
            </Heading>
          </Stack>
          <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city
            is also known for its parks and nightlife.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <Button iconRight onPress={() => onOpen(item, menu)} light>
              <Text>Pedir Plato</Text>
              <Icon name="arrow-forward" />
            </Button>
          </HStack>
        </Stack>
      </Box>
      <Dialog onClose={onClose} visible={visible} onAccept={onAccept} />
    </>
  );
};

export default ItemCard;
