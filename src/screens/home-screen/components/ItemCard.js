/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import {
  ArrowForwardIcon,
  AspectRatio,
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
} from 'native-base';
import React from 'react';
import Dialog from './Dialog';

const ItemCard = ({ item, menu, onOpen, onClose, onAccept, visible }) => {
  return (
    <>
      <Box
        rounded="lg"
        overflow="hidden"
        style={{ marginBottom: 15 }}
        width="72"
        shadow={7}
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
          <Text fontWeight="400">{item.description}</Text>
          <Stack alignItems="center" justifyContent="space-between">
            <Button
              endIcon={<ArrowForwardIcon />}
              onPress={() => onOpen(item, menu)}
              small
              colorScheme="success"
            >
              <Text fontWeight="400" style={{ fontSize: 15 }} color="white">
                Pedir Plato
              </Text>
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Dialog onClose={onClose} visible={visible} onAccept={onAccept} />
    </>
  );
};

export default ItemCard;
