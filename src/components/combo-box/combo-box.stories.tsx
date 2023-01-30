import React from 'react';
import { ComboBox } from './combo-box';
import { data } from './combo-box.constants';

export default {
  title: 'ComboBox',
  component: ComboBox,
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    textColor: { control: 'color' },
    listBgColor: { control: 'color' },
    listTextColor: { control: 'color' },
    highlightColor: { control: 'color' },
    placeholderColor: { control: 'color' },
    isDisable: { control: 'boolean' },
    onChange: {
      description:
        '\t\n' +
        'Callback fired when the value changes.\n' +
        '\n' +
        'Signature:\n' +
        'function(event: React.SyntheticEvent, value: T | Array<T>, reason: string, details?: string) => void'
    },
    onBlur: { description: 'onBlur' },
    onFocus: { description: 'onFocus' },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large']
    }
  }
};

const Template = (args) => {
  return <ComboBox options={data} {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  placeholder: 'type text...',
  size: 'medium',
  isDisable: false,
  highlightColor: 'red'
};
