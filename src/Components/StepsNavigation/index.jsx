import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { NAVIGATION_STEPS } from './constants';

export const StepsNavigation = () => {
  const { currentStep, stepsCompleted } = useSelector(
    state => state.stepWizard
  );

  return (
    <div className="wizard-steps__container mb-12">
      <ul className="lg:flex lg:justify-between lg:items-baseline grid grid-cols-3 lg:gap-x-5 gap-x-2">
        {NAVIGATION_STEPS.map(item => {
          const isCompleted = stepsCompleted[item.number];

          let stepClass = '';
          if (item.number === currentStep) {
            stepClass = 'active';
          } else if (item.number < currentStep) {
            stepClass = isCompleted ? 'completed' : 'visited';
          }

          const linkTo =
            isCompleted || item.number <= currentStep
              ? `/steps/step/${item.number}`
              : '#';
          const linkClassName = !isCompleted && item.number > currentStep ? 'cursor-not-allowed opacity-60' : '';

          const stepIndicatorClasses = [
            'wizard-steps__item-step',
            stepClass,
            'inline-flex items-center lg:justify-center justify-start lg:h-8 lg:w-8 w-full h-1 lg:rounded-full border-2',
            item.number === currentStep
              ? 'active'
              : isCompleted
              ? 'filled'
              : 'bg-white text-gray-500 border-gray-300',
          ].join(' ');

          return (
            <li key={item.number} className="wizard-steps__item flex-1">
              <Link to={linkTo} className={linkClassName + ' block w-full'}>
                <div className="wizard-steps__item-step-wrapper flex items-center">
                  <span className={stepIndicatorClasses}>
                      <span className={"lg:inline-block hidden"}>{item.number}</span>
                      <span className={"wizard-steps__item-mobile lg:hidden inline-block"}></span>
                  </span>
                </div>
                <div className="flex flex-col items-start gap-y-2 mt-2">
                  <p className={"lg:text-base lg:leading-[19px] text-sm leading-[17px]"}>
                    {item.label}
                  </p>
                    {
                        item.number === currentStep ? <p className="lg:block hidden text-sm text-gray-label min-h-[20px]">{item.description}</p> : null
                    }
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
