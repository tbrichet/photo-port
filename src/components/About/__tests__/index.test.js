import React from 'react';

// render the component for testing then remove from the DOM
import { render, cleanup } from '@testing-library/react';

// import testing library
import '@testing-library/jest-dom/extend-expect';

// import the component we are testing
import About from '..';

// Ensure no leftover memory data exists after each test
afterEach(cleanup);

// Declare the component we are testing
describe('About component', () => {
    // First Test (baseline test)
    it('renders', () => {
        render(<About />);
    });

    // Second Test (compare snapshots of the DOM)
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        
        expect(asFragment()).toMatchSnapshot();
    });
});