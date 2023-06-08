/* eslint-disable jest/no-conditional-expect */
import TestRenderer from 'react-test-renderer';
import { If } from '../';

describe('<If />', () => {

  it('Not rendering children', () => {
    const component = TestRenderer.create(
      <If condition={false}>
        <span id="child" />
      </If>,
    );
    let only = component.toJSON();
    expect(only).toBeNull();
  });

  it('rendering children', () => {
    const component = TestRenderer.create(
      <If condition={true}>
        <span id="child" />
      </If>,
    );
    let only = component.toJSON();

    if (only && !Array.isArray(only)) {
      expect(only.type).toEqual('span');
      expect(only.props.id).toEqual('child');
    }
  });

  it('render props', () => {
    const component = TestRenderer.create(
      <If condition={true} render={() => <span id="child" />} />,
    );
    let only = component.toJSON();

    if (only && !Array.isArray(only)) {
      expect(only.type).toEqual('span');
      expect(only.props.id).toEqual('child');
    }
  });

})
