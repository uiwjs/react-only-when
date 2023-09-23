import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Switch, Case, Default } from '../core/src/switch';

it('<Switch />', () => {
  const component = renderer.create(
    <Switch></Switch>
  );
  const only = component.toJSON();
  expect(only).toBeNull();
});

it('<Default />', () => {
  const { container } = render(
    <Switch>
      <Default>you graduated</Default>
    </Switch>
  );
  expect(container.innerHTML).toEqual('you graduated');
});

it('<Case />', () => {
  const { container } = render(
    <Switch>
      <Case condition={true}>preschool</Case>
      <Default>you graduated</Default>
    </Switch>
  );
  expect(container.innerHTML).toEqual('preschool');
});

it('<Case />', () => {
  const { container } = render(
    <Switch>
      <Case condition={true}>preschool</Case>
      <Case condition={true}>primary school</Case>
      <Default>you graduated</Default>
    </Switch>
  );
  expect(container.innerHTML).toEqual('preschool');
});

it('<Case />', () => {
  const { container } = render(
    <Switch>
      <Case condition={false}>preschool</Case>
      <Case condition={false}>primary school</Case>
      <Default>you graduated</Default>
    </Switch>
  );
  expect(container.innerHTML).toEqual('you graduated');
});


it('<Case as="span" />', () => {
  render(
    <Switch>
      <Case as="span" data-testid="span" condition={true}>preschool</Case>
    </Switch>
  );
  const span = screen.getByTestId('span');
  expect(span.tagName).toEqual('SPAN');
  expect(span.innerHTML).toEqual('preschool');
});


it('<Default as="p" />', () => {
  render(
    <Switch>
      <Default as="p" title="test case" data-testid="elm">you graduated</Default>
    </Switch>
  );
  const elm = screen.getByTestId('elm');
  expect(elm.tagName).toEqual('P');
  expect(elm.innerHTML).toEqual('you graduated');
  expect(elm.title).toEqual('test case');
});
