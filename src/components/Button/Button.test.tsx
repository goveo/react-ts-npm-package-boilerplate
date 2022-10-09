import { render } from '@testing-library/react';
import React from 'react';

import { Button } from './Button';

describe('Button', () => {
  it('should render button with text', () => {
    const { getByText } = render(<Button text="test" />);

    expect(getByText('test')).toBeTruthy();
  });
});
