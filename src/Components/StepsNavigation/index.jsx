import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CompleteIcon from '@/assets/icons/complete.svg';
import { NAVIGATION_STEPS } from './constants';

export const StepsNavigation = () => {
  const { currentStep, stepsCompleted } = useSelector(
    state => state.stepWizard
  );

  return (
    <div className="wizard-steps__container mb-8">
      <ul className="flex justify-between items-center gap-x-5">
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
          const linkClassName =
            !isCompleted && item.number > currentStep
              ? 'cursor-not-allowed opacity-60'
              : '';

          const stepIndicatorClasses = [
            'wizard-steps__item-step',
            stepClass,
            'flex items-center justify-center h-8 w-8 rounded-full border-2',
            item.number === currentStep
              ? 'bg-blue-500 text-white border-blue-500'
              : isCompleted
              ? 'bg-green-500 text-white border-green-500'
              : 'bg-white text-gray-500 border-gray-300',
          ].join(' ');

          return (
            <li key={item.number} className="wizard-steps__item flex-1">
              <Link to={linkTo} className={linkClassName}>
                <div className="wizard-steps__item-step-wrapper flex items-center">
                  <span className={stepIndicatorClasses}>
                    {isCompleted && item.number !== currentStep ? (
                      <img src={CompleteIcon} alt="Complete" />
                    ) : (
                      item.number
                    )}
                  </span>
                </div>
                <div className="flex flex-col items-start gap-y-2 mt-2">
                  <p
                    className={`font-medium ${
                      item.number === currentStep
                        ? 'text-blue-600'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
