import PoseDetection from './PoseDetection';
import { render } from '@testing-library/react';

describe('PoseDetection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PoseDetection />);
    expect(baseElement).toBeTruthy();
  });
});
