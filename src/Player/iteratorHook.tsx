import React, { useState } from 'react';

interface Props {
  countOfComponents: number
}

export default function componentIterator(props: Props) {
  /*ITERATOR*/
  const [activeStep, setActiveStep] = useState(0);
  const totalComponentsCount = props.countOfComponents;

  const getNext = (): void => {
    if (hasMore()) {
      setActiveStep(activeStep + 1);
    }
  };

  const getPrev = (): void => {
    if (hasLess()) {
      setActiveStep(activeStep - 1);
    }
  };

  const hasLess = (): boolean => {
    if (activeStep > 0) {
      return true;
    }
    return false;
  };

  const hasMore = (): boolean => {
    if (activeStep >= 0 && activeStep < totalComponentsCount - 1) {
      return true;
    }

    return false;
  };

  return { activeStep, getNext, getPrev };
  /*ITERATOR*/
}

