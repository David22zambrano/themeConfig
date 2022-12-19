import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CheckboxComponent, Checkbox } from './checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
const checkbox: Checkbox = {
  title: 'Hola',
  done: false,
};
storiesOf('checkbox', module)
  .addDecorator(
    moduleMetadata({
      declarations: [CheckboxComponent],
    })
  )
  .add('Checkbox small ', () => {
    return {
      template: '<app-checkbox></app-checkbox>',
      props: checkbox,
    };
  });
