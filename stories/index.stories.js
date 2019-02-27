import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CounterInput from '../src';

storiesOf('Counter Input', module)
  .add('default', () => <CounterInput/>);
