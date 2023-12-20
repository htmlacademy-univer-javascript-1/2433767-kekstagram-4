export const slider = document.querySelector('.effect-level__slider');
export const effectList = document.querySelector('.effects__list');

const MAX_BLUR_VALUE = 3;
const MAX_BRIGHTNESS_VALUE = 3;
const MIN_BRIGHTNESS_VALUE = 1;
const MAX_VALUE_EFFECT= 100;
const MIN_VALUE_EFFECT = 0;
const MAX_GRAYSCALE_EFFECT = 1;
const MAX_SEPIA_EFFECT = 1;
const EFFECTS_STEP = 0.1;

const Slider = {
  MIN: 0,
  MAX: 100,
  STEP: 0.1
};

export const Effect = {
  CHROME: {
    filter: 'grayscale',
    units: '',

    options: {
      range: {
        min: MIN_VALUE_EFFECT,
        max: MAX_GRAYSCALE_EFFECT,
      },
      start: MAX_GRAYSCALE_EFFECT,
      step: EFFECTS_STEP,
    }
  },
  SEPIA: {
    filter: 'sepia',
    units: '',

    options: {
      range: {
        min: MIN_VALUE_EFFECT,
        max: MAX_SEPIA_EFFECT,
      },
      start: MAX_SEPIA_EFFECT,
      step: EFFECTS_STEP,
    }
  },
  MARVIN: {
    filter: 'invert',
    units: '%',

    options: {
      range: {
        min: MIN_VALUE_EFFECT,
        max: MAX_VALUE_EFFECT,
      },
      start: MAX_VALUE_EFFECT,
      step: EFFECTS_STEP,
    }
  },
  PHOBOS: {
    filter: 'blur',
    units: 'px',

    options: {
      range: {
        min: MIN_VALUE_EFFECT,
        max: MAX_BLUR_VALUE,
      },
      start: MAX_BLUR_VALUE,
      step: EFFECTS_STEP,
    }
  },
  HEAT: {
    filter: 'brightness',
    units: '',

    options: {
      range: {
        min: MIN_BRIGHTNESS_VALUE,
        max: MAX_BRIGHTNESS_VALUE ,
      },
      start: MAX_BRIGHTNESS_VALUE ,
      step: EFFECTS_STEP,
    }
  }
};

export const initEffects = () => {
  const sliderConfig = {
    start: Slider.MAX,
    step: Slider.STEP,

    range: {
      min: Slider.MIN,
      max: Slider.MAX
    },

    connect: 'lower',

    format: {
      to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
      from: (value) => parseFloat(value)
    }
  };

  noUiSlider.create(slider, sliderConfig);
};
