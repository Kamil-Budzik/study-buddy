import Modal from './Modal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';

export default {
  title: 'Components/Organism/Modal',
  component: Modal,
};

const mockedStudent = {
  id: '1',
  name: 'Adam Romański',
  attendance: '39%',
  average: '2.3',
  group: 'A',
  course: 'Business Philosophy',
  grades: [
    {
      subject: 'Business Philosophy',
      average: '3.3',
    },
    {
      subject: 'BMarketing',
      average: '4.5',
    },
  ],
};

const Template = (args) => (
  <Modal {...args}>
    <StudentDetails student={mockedStudent} />
  </Modal>
);

export const Default = Template.bind({});
