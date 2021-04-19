import MainTemplate from './MainTemplate';

export default {
  title: 'Components/Templates/MainTemplate',
  component: MainTemplate,
};

const Template = (args) => <MainTemplate {...args} />;

export const Default = Template.bind({});
