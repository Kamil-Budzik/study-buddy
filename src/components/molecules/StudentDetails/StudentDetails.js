import { Title } from 'components/atoms/Title/Title';
import { StyledAverage } from 'components/molecules/StudentsListItem/StudentsListItem.styles';

import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
  color: ${({ theme }) => theme.colors.darkGrey};
  ul > li {
    list-style: none;
  }
  ul > li > header {
    font-weight: bold;
    font-size: 15px;
  }
`;
export const Grades = styled.ul`
  li {
    padding: 10px 0;
    display: flex;
    align-items: center;
    p {
      margin-right: 20px;
    }
  }
`;
export const Header = styled.header`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;
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
