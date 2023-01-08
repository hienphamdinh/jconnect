import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {screenWidth} from 'themes/Dimens';
import ImageFast from 'components/ImageFast';
import size from 'lodash/size';
import styles from './styles';

const banner = [
  'https://www.cogentholdingsltd.com/wp-content/uploads/2017/02/job-portal-banner.jpg',
  'https://www.tuvsud.com/-/media/global/images/careers/ss-1059775274-careers-banner.jpg?h=365&w=1280&la=en-GB&hash=3037B6F58C2D9438717EF4FBAECAC083',
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
