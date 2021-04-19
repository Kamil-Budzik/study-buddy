import StudentListItem from './StudentsListItem';

export default {
  title: 'Components/Molecules/StudentListItem',
  component: StudentListItem,
};

const Template = (args) => <StudentListItem {...args} />;

export const BadGrades = Template.bind({});
BadGrades.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '55%',
    average: '2.0',
  },
};

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '55%',
    average: '3.5',
  },
};

export const GoodGrades = Template.bind({});
GoodGrades.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '55%',
    average: '5.0',
  },
};

export const NoAverage = Template.bind({});
NoAverage.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '55%',
    average: null,
  },
};
