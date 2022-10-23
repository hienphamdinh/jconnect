import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {screenWidth} from 'themes/Dimens';
import ImageFast from 'components/ImageFast';
import size from 'lodash/size';
import styles from './styles';

const banner = [
  'https://www.nhm.ac.uk/content/dam/nhmwww/discover/ring-necked-parakeet-uk/ring-necked-parakeet-in-flight-full-width.jpg.thumb.1160.1160.jpg',
  'https://www.nhm.ac.uk/content/dam/nhmwww/discover/ring-necked-parakeet-uk/ring-necked-parakeet-in-flight-full-width.jpg.thumb.1160.1160.jpg',
  'https://www.nhm.ac.uk/content/dam/nhmwww/discover/ring-necked-parakeet-uk/ring-necked-parakeet-in-flight-full-width.jpg.thumb.1160.1160.jpg',
];
export default function HomeBanner() {
  const ref = useRef();
  const [activeSlide, setActiveSlide] = useState(0);
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <ImageFast
          source={{uri: item}}
          imageStyle={styles.img}
          style={styles.imgWrapper}
        />
      </View>
    );
  };

  return (
    <View>
      <Carousel
        ref={ref}
        itemWidth={screenWidth - 32}
        sliderWidth={screenWidth}
        data={banner}
        renderItem={renderItem}
        style={styles.list}
        onSnapToItem={index => setActiveSlide(index)}
        autoplay
        loop
      />
      <Pagination
        dotsLength={size(banner)}
        activeDotIndex={activeSlide}
        containerStyle={styles.containerDotStyle}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
      />
    </View>
  );
}
