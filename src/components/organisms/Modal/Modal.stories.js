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
};

const Template = (args) => (
  <Modal {...args}>
    <StudentDetails student={mockedStudent} />
  </Modal>
);

export const Default = Template.bind({});
