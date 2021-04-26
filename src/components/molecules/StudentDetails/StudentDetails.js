import { Title } from 'components/atoms/Title/Title';
import { StyledAverage } from 'components/molecules/StudentsListItem/StudentsListItem.styles';
import { Wrapper, Header, Grades } from './StudentDetails.styles';

const StudentDetails = ({ student }) => {
  return (
    <Wrapper>
      <Header>
        <StyledAverage value={student.average} isBig>
          {student.average}
        </StyledAverage>

        <Title>{student.name}</Title>
        <small>Icons</small>
      </Header>
      <ul>
        <li>
          <header>Course:</header>
        </li>
        <li>Economy and finances</li>
      </ul>
      <Grades>
        <li>
          <header>Average grades:</header>
        </li>
        <li>
          <p>Modern Economy</p>
          <StyledAverage value={3.4}>3.4</StyledAverage>
        </li>
        <li>
          <p>Trade and Logistics</p>
          <StyledAverage value={4.1}>4.1</StyledAverage>
        </li>
      </Grades>
    </Wrapper>
  );
};

export default StudentDetails;
