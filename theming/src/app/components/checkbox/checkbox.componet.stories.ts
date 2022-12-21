// YourComponent.stories.ts

import { Meta, Story } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
const checkbox = {
  title: 'Hola',
  done: false,
};
storiesOf('checkbox', module)
  .addDecorator(
    moduleMetadata({
      imports:[MatButtonModule],
      declarations: [CheckboxComponent],
    })
  )
  .add('Checkbox small ', () => {
    return {
      template: '<app-checkbox></app-checkbox>',
      props: checkbox,
    };
  });

// //👇 This default export determines where your story goes in the story list
// export default {
//   /* 👇 The title prop is optional.
//   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
//   * to learn how to generate automatic titles
//   */
//   title: 'YourComponent',
//   imports:[MatCheckboxModule],
//   component: CheckboxComponent,
// } as Meta;

// //👇 We create a “template” of how args map to rendering
// const Template: Story = (args) => ({
//   props: args,
// });

// // 👇 Each story then reuses that template
// export const Primary= Template.bind({});
// Primary.args = {
//   label: 'Button',
//   backgroundColor: '#ff0',
// };


// export const Secondary= Template.bind({});
// Secondary.args = {
//   args: {
//     ...Primary.args,
//     label: '😄👍😍💯',
//   },
// };


// export const Tertiary= Template.bind({});
// Tertiary.args={
//   ...Primary.args,
//   label: '📚📕📈🤓',
// };

