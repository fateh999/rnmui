import React from 'react';
import {ScrollView, StyleSheet, useWindowDimensions} from 'react-native';
import {
  Block,
  Typography,
  Picture,
  Container,
  Center,
  Touch,
  useMediaQuery,
} from 'rnmuilib';

function App() {
  const {mediaQuery, mediaQueryLogic} = useMediaQuery();
  const {width} = useWindowDimensions();

  return (
    <Container
      fullScreen={mediaQueryLogic([false, true])}
      backgroundColor={'#f2f2f2'}>
      <Block backgroundColor={'white'} elevation={5}>
        <Typography
          fontSize={mediaQuery([22, 44, 66])}
          color={'black'}
          fontWeight={'bold'}
          textAlign={'center'}
          marginVertical={20}>
          Kitchen Sink
        </Typography>
      </Block>
      {/* @ts-ignore */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Block
          flexDirection={mediaQueryLogic(['column', 'row'])}
          flexWrap={'wrap'}>
          <Block
            paddingHorizontal={20}
            width={mediaQuery([width, width / 2, width / 3])}>
            <Typography
              fontSize={16}
              color={'black'}
              fontWeight={'bold'}
              marginVertical={20}>
              1. Block
            </Typography>
            <Block
              backgroundColor={'orange'}
              height={100}
              width={100}
              elevation={10}
            />
          </Block>

          <Block
            paddingHorizontal={20}
            width={mediaQuery([width, width / 2, width / 3])}>
            <Typography
              fontSize={16}
              color={'black'}
              fontWeight={'bold'}
              marginVertical={20}>
              2. Typography
            </Typography>
            <Typography fontSize={48} fontWeight={'bold'} color={'red'}>
              RNMUI
            </Typography>
          </Block>

          <Block
            paddingHorizontal={20}
            width={mediaQuery([width, width / 2, width / 3])}>
            <Typography
              fontSize={16}
              color={'black'}
              fontWeight={'bold'}
              marginVertical={20}>
              3. Picture
            </Typography>
            <Picture
              height={100}
              width={100}
              source={{
                uri: 'https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg?cs=srgb&dl=pexels-scott-webb-305821.jpg&fm=jpg',
              }}
            />
          </Block>

          <Block
            paddingHorizontal={20}
            width={mediaQuery([width, width / 2, width / 3])}>
            <Typography
              fontSize={16}
              color={'black'}
              fontWeight={'bold'}
              marginVertical={20}>
              4. Touch
            </Typography>

            <Touch
              borderRadius={10}
              height={50}
              backgroundColor={'lightblue'}
              onPress={() => {}}>
              <Center flex={1}>
                <Typography color={'black'} fontWeight={'bold'}>
                  Click Me
                </Typography>
              </Center>
            </Touch>
          </Block>
        </Block>

        <Block height={50} />
      </ScrollView>
    </Container>
  );
}

export default App;

const styles = StyleSheet.create({
  scrollView: {flexGrow: 1},
});
