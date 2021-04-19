import NewsSection from './NewsSection';

export default {
  title: 'Components/Templates/NewsSection',
  component: NewsSection,
};

const Template = (args) => <NewsSection {...args} />;

export const Default = Template.bind({});
