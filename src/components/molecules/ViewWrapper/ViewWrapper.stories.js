import { ViewWrapper } from './ViewWrapper';

export default {
  title: 'Components/Molecules/ViewWrapper',
  component: ViewWrapper,
};

const Template = (args) => (
  <ViewWrapper {...args}>
    <h1>I don't display anythink by default</h1>
    <h3>Just look at my beautiful border and box-shadow</h3>
    <ul>
      <li>I am</li>
      <li>Custom content</li>
      <li>Nice to</li>
      <li>Meet you</li>
    </ul>
  </ViewWrapper>
);

export const Default = Template.bind({});
