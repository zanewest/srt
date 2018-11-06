
import { Image } from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';

const Onboard = () => (
  <Onboarding
    pages={[
      {
        backgroundColor: '#9b0000',
        image: <Image source={require('../assets/velocity.png')} />,
        title: 'Velocity',
        subtitle: 'Welcome to Velocity: Speed Reading Trainer',
      },
      {
        backgroundColor: '#9b0000',
        image: <Image source={require('../assets/trainer.png')} />,
        title: 'Learn to Read Faster, Faster!',
        subtitle: 'Velocity\'s controls are intuitive and powerful ',
      },
      {
        backgroundColor: '#9b0000',
        image: <Image source={require('../assets/onboard3.png')} />,
        title: 'Discover Your Potential',
        subtitle: 'Challenge yourself and make progress today',
      },
    ]}
  />
);

export default Onboard;
