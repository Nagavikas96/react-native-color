import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import GradientSlider from './GradientSlider';
import HueGradient from '../gradients/HueGradient';
import tinycolor from 'tinycolor2';

const HueSlider = ({ style, value, onValueChange, gradientSteps, width, height, borderRadius, onSlidingComplete }) => {
  return (
    <GradientSlider
      gradient={<HueGradient gradientSteps={gradientSteps} />}
      style={style}
      step={1}
      onSlidingComplete={onSlidingComplete}
      maximumValue={359}
      value={value}
      thumbTintColor={tinycolor({ s: 1, l: 0.5, h: value }).toHslString()}
      onValueChange={onValueChange}
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
};

export default HueSlider;

HueSlider.propTypes = {
  value: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired,
  gradientSteps: PropTypes.number.isRequired
};
