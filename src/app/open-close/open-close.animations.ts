/*******************************************************************************
* O probema desse tipo de animação é testá-la
* Optei por usar o formato usado em open-close.animation.ts
********************************************************************************/

import { animate, AnimationMetadata, style } from '@angular/animations';

const BLACK_RGB = 'rgba(0, 0, 0, 0)';
const YELLOW_RGB = 'rgb(255, 255, 0)';
const BLUE_RGB = 'rgb(0, 0, 255)';

export const closed: AnimationMetadata[] = [
  style({ opacity: 0.8, height: '100px', backgroundColor: BLUE_RGB }),
];

export const openToClosed: AnimationMetadata[] = [
  style({ opacity: 1, height: '200px', backgroundColor: YELLOW_RGB }),
  animate('1s', style({opacity: 0.8 ,height: '100px', backgroundColor: BLUE_RGB}))
];

export const closedToOpen: AnimationMetadata[] = [
  style({ opacity: 0.8, height: '100px', backgroundColor: BLUE_RGB }),
  animate('0.5s', style({opacity: 1 ,height: '200px', backgroundColor: YELLOW_RGB}))
];

export { YELLOW_RGB, BLUE_RGB, BLACK_RGB };