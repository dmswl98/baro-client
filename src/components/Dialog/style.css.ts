import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const dialogRoot = recipe({
  base: {
    borderRadius: '12px',
    boxShadow: '0px 8px 15px 0px rgba(28, 28, 28, 0.08);',
  },
  variants: {
    type: {
      small: {
        width: '100px',
        padding: '8px',
      },
      medium: {
        width: '228px',
        padding: '12px',
      },
    },
  },
});

export const dialogTitle = style({
  position: 'relative',
  padding: '6px 12px 10px',
  lineHeight: '40px',
});

export const line = style({
  height: '1px',
  width: '196px',
  backgroundColor: COLORS['Grey/150'],
  margin: '4px 0',
});

export const dialogButton = recipe({
  base: [
    sprinkles({
      typography: '15/Body/Regular',
    }),
    {
      color: COLORS['Grey/900'],
      borderRadius: '4px',
      display: 'block',
      ':hover': {
        backgroundColor: COLORS['Grey/100'],
      },
    },
  ],
  variants: {
    type: {
      small: {
        padding: '8px',
        width: '84px',
        selectors: {
          '& + &': {
            marginTop: '8px',
          },
        },
      },
      medium: {
        padding: '8px 12px',
        width: '204px',
        textAlign: 'left',
        selectors: {
          '& + &': {
            marginTop: '8px',
          },
        },
      },
    },
  },
});

export const badge = style([
  sprinkles({
    typography: '11/Caption/Medium',
  }),
  {
    marginLeft: '4px',
    backgroundColor: COLORS['Blue/Light'],
    color: COLORS['Blue/Default'],
    width: '32px',
    height: '20px',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginTop: '-2px',
    padding: '3px 6px',
    borderRadius: '100px',
  },
]);

export const iconTitleText = style([
  sprinkles({
    typography: '16/Title/Medium',
  }),
  {
    color: COLORS['Grey/900'],
    marginLeft: '48px',
  },
]);

export const iconMediumText = style([
  sprinkles({
    typography: '15/Body/Medium',
  }),
  {
    color: COLORS['Grey/400'],
    marginLeft: '28px',
  },
]);

export const iconRegularText = style([
  sprinkles({
    typography: '15/Body/Regular',
  }),
  {
    color: COLORS['Grey/800'],
    marginLeft: '28px',
  },
]);

export const addIcon = style({
  position: 'absolute',
});

export const circle = style({
  width: '40px',
  height: '40px',
  backgroundColor: COLORS['Grey/100'],
  position: 'absolute',
  top: '6px',
  borderRadius: '50%',
  zIndex: -1,
});

export const profileIcon = style({
  position: 'absolute',
  top: '13px',
  left: '20px',
});
