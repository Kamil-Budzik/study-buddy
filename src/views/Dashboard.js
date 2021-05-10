import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
//components
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { Title } from 'components/atoms/Title/Title';
import Modal from 'components/organisms/Modal/Modal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
//helpers
import useModal from 'hooks/useModal';
import { useStudents } from 'hooks/useStudents';
//styles
import { GroupWrapper, TitleWrapper, Wrapper } from 'views/Dashboard.styles';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState('');
  const { getGroups, getStudentById } = useStudents();
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        {isOpen ? (
          <Modal handleClose={handleCloseModal}>
            <StudentDetails student={currentStudent} />
          </Modal>
        ) : null}
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
