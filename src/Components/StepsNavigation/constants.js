import { STEPS } from '@/constants';

export const NAVIGATION_STEPS = [
  {
    number: STEPS.floorPlan,
    label: 'Upload floor plan',
    description: 'Browse PDF or PNG file of your floor plan',
  },
  {
    number: STEPS.design,
    label: 'Upload Design',
    description: 'Upload design file for your project',
  },
  {
    number: STEPS.details,
    label: 'Add Details',
    description: 'Provide additional project information',
  },
];
