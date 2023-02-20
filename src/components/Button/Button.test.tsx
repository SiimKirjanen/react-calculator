import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('<Button />', () => {
  let buttonClick: () => void;

  beforeEach(() => {
    buttonClick = jest.fn();
  });

  it('should mount the button', () => {
    render(<Button buttonClick={() => {}}>Button test text</Button>);
    
    screen.getByText('Button test text', { selector: 'button' })
  });

  it('should call buttonClick prop when button clicked', () => {
    render(<Button buttonClick={buttonClick}>Button test text</Button>);
    fireEvent.click(screen.getByRole('button'));
    
    expect(buttonClick).toHaveBeenCalledTimes(1);
  });

});