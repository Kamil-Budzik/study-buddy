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
