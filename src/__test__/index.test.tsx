/* eslint-disable jest/no-conditional-expect */
import TestRenderer from 'react-test-renderer';
import Only from '../';

describe('<Only />', () => {
  it('Not rendering children', () => {
    const component = TestRenderer.create(
      <Only when={false}>
        <span id="child" />
      </Only>,
    );

    let only = component.toJSON();
    expect(only).toBeNull();
  });

  it('Not touching the style or className', () => {
    const classNameToTest = 'test-className';
    const component = TestRenderer.create(
      <Only when={true}>
        <span id="child" style={{ color: 'green' }} className={classNameToTest} />
      </Only>,
    );

    let only = component.toJSON();
    if (only && !Array.isArray(only)) {
      expect(only.type).toEqual('span');
      expect(only.props.id).toEqual('child');
      expect(only.props.children).toBeUndefined();
      expect(only.props.className).toEqual(classNameToTest);
      expect(only.props.style).toEqual({ color: 'green' });
    }
  });

  it('Adding style visibility (without deleting other styles', () => {
    const component = TestRenderer.create(
      <Only when={false} hiddenMode="visibility">
        <span id="child" style={{ color: 'green' }} />
      </Only>,
    );

    let only = component.toJSON();
    if (only && !Array.isArray(only)) {
      expect(only.type).toEqual('span');
      expect(only.props.id).toEqual('child');
      expect(only.props.children).toBeUndefined();
      expect(only.props.style).toEqual({ color: 'green', visibility: 'hidden' });
    }
  });

  it('Adding style display (without deleting other styles)', () => {
    const component = TestRenderer.create(
      <Only when={false} hiddenMode="display">
        <span id="child" style={{ color: 'green' }} />
      </Only>,
    );

    let only = component.toJSON();
    if (only && !Array.isArray(only)) {
      expect(only.type).toEqual('span');
      expect(only.props.id).toEqual('child');
      expect(only.props.children).toBeUndefined();
      expect(only.props.style).toEqual({ color: 'green', display: 'none' });
    }
  });

  it('Joining className (default class)', () => {
    const testClassName = 'test-className';
    const component = TestRenderer.create(
      <Only when={false} hiddenMode="css">
        <span id="child" style={{ color: 'green' }} className={testClassName} />
      </Only>,
    );

    let only = component.toJSON();
    if (only && !Array.isArray(only)) {
      expect(only.type).toEqual('span');
      expect(only.props.id).toEqual('child');
      expect(only.props.children).toBeUndefined();
      expect(only.props.className).toEqual('test-className');
      expect(only.props.style).toEqual({ color: 'green' });
    }
  });

  it('Joining className (as prop)', () => {
    const testClassName = 'test-className';
    const component = TestRenderer.create(
      <Only when={false} hiddenMode="css" className="www">
        <span id="child" style={{ color: 'green' }} className={testClassName} />
      </Only>,
    );

    let only = component.toJSON();
    if (only && !Array.isArray(only)) {
      expect(only.type).toEqual('span');
      expect(only.props.id).toEqual('child');
      expect(only.props.children).toBeUndefined();
      expect(only.props.className).toEqual('test-className www');
      expect(only.props.style).toEqual({ color: 'green' });
    }
  });

  it('Joining className = undefined', () => {
    const component = TestRenderer.create(
      <Only when={false} hiddenMode="css">
        <span id="child" style={{ color: 'green' }} />
      </Only>,
    );

    let only = component.toJSON();
    if (only && !Array.isArray(only)) {
      expect(only.type).toEqual('span');
      expect(only.props.id).toEqual('child');
      expect(only.props.children).toBeUndefined();
      expect(only.props.className).toEqual('');
      expect(only.props.style).toEqual({ color: 'green' });
    }
  });
});
