import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {screenWidth} from 'themes/Dimens';
import ImageFast from 'components/ImageFast';
import size from 'lodash/size';
import styles from './styles';

const banner = [
  'https://www.cogentholdingsltd.com/wp-content/uploads/2017/02/job-portal-banner.jpg',
  'http://www.uvklink.com/job_portal/images/banner.jpg',
  'https://stellenticket.fu-berlin.de/p/header_fub.jpg',
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
    <View style={styles.container}>
      <Carousel
        ref={ref}
        itemWidth={screenWidth}
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
