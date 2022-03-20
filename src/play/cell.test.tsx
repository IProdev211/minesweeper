import React from 'react';
import { render } from '@testing-library/react';
import Cell from './cell';

describe('<Cell />', () => {
  it('Cell should be rendered correctly with □', () => {
    const { container } = render(
      <Cell
        testId={`cell-0-0`}
        text={'□'}
        disabled={false}
        isFlag={false}
        onClick={() => {}}
        onSetFlag={() => {}}
      />
    );

    expect(container.firstChild).toBeEmptyDOMElement();
  });
  it('Cell should be rendered correctly with *', () => {
    const { container } = render(
      <Cell
        testId={`cell-0-0`}
        text={'*'}
        disabled={false}
        isFlag={false}
        onClick={() => {}}
        onSetFlag={() => {}}
      />
    );

    expect(container.firstChild).toHaveTextContent('💣');
  });
  it('Cell should be rendered correctly with number', () => {
    const { container } = render(
      <Cell
        testId={`cell-0-0`}
        text={'1'}
        disabled={false}
        isFlag={false}
        onClick={() => {}}
        onSetFlag={() => {}}
      />
    );

    expect(container.firstChild).toHaveTextContent('1');
  });
  it('Cell should be rendered correctly with flag', () => {
    const { container } = render(
      <Cell
        testId={`cell-0-0`}
        text={'□'}
        disabled={false}
        isFlag={true}
        onClick={() => {}}
        onSetFlag={() => {}}
      />
    );

    expect(container.firstChild).toHaveTextContent('🚩');
  });
  it('Cell should not be clickable when it is disabled', () => {
    const { container } = render(
      <Cell
        testId={`cell-0-0`}
        text={'□'}
        disabled={true}
        isFlag={true}
        onClick={() => {}}
        onSetFlag={() => {}}
      />
    );

    expect(container.firstChild).toHaveStyle('opacity: 0.4');
  });
});
