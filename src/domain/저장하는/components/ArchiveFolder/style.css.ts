import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';
import * as utils from '@styles/utils.css';

export const folder = style({
  minWidth: '200px',
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  gap: '4px',
  whiteSpace: 'nowrap',
});

export const userFolder = style([
  sprinkles({ typography: '16/Title/Bold' }),
  utils.flexAlignCenter,
  {
    gap: '5px',
    padding: '8px 20px',
    borderRadius: '8px',
    backgroundColor: COLORS['Grey/100'],
  },
]);

export const tag = style([
  sprinkles({ typography: '11/Caption/Medium' }),
  {
    padding: '6px',
    borderRadius: '100px',
    color: COLORS['Blue/Default'],
    backgroundColor: COLORS['Blue/Light'],
  },
]);

export const icon = style({
  fill: COLORS['Grey/250'],
});

export const createFolderButton = style([
  sprinkles({ typography: '16/Title/Medium' }),
  utils.flexAlignCenter,
  {
    width: '100%',
    gap: '4px',
    padding: '8px 20px',
    color: COLORS['Grey/400'],
  },
]);
