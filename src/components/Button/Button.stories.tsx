import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button text="Button" />;

export const Success = () => <Button text="Button" type="success" />;

export const Warning = () => <Button text="Button" type="warning" />;

export const Error = () => <Button text="Button" type="error" />;
