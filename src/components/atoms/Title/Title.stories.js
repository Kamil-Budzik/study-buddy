import { Title } from './Title';

export default {
  title: 'Components/Atoms/Title',
  component: Title,
};

const Template = (args) => <Title {...args}>I' am a TITLE</Title>;

export const Default = Template.bind({});
