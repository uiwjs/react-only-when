/* eslint-disable jest/no-conditional-expect */
import renderer from 'react-test-renderer';
import { Switch, Case, Default } from '../core/src/switch';


it('<Switch />', () => {
  const component = renderer.create(
    <Switch></Switch>
  );
  const only = component.toJSON();
  expect(only).toBeNull();
});

it('<Default />', () => {
  const component = renderer.create(
    <Switch>
      <Default>you graduated</Default>
    </Switch>
  );
  const only = component.toJSON();
  expect(only).toEqual('you graduated');
});

it('<Case />', () => {
  const component = renderer.create(
    <Switch>
      <Case condition={true}>preschool</Case>
      <Default>you graduated</Default>
    </Switch>
  );
  const only = component.toJSON();
  expect(only).toEqual('preschool');
});

it('<Case /> condition=true', () => {
  const component = renderer.create(
    <Switch>
      <Case condition={true}>preschool</Case>
      <Case condition={true}>primary school</Case>
      <Default>you graduated</Default>
    </Switch>
  );
  const only = component.toJSON();
  expect(only).toEqual('preschool');
});

it('<Case /> condition=false', () => {
  const component = renderer.create(
    <Switch>
      <Case condition={false}>preschool</Case>
      <Case condition={false}>primary school</Case>
      <Default>you graduated</Default>
    </Switch>
  );
  const only = component.toJSON();
  expect(only).toEqual('you graduated');
});
