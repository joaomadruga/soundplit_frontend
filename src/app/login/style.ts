import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  > form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;

    > :nth-child(2) {
      padding-bottom: 16px;
    }
  }
`;

export const Record = styled.div`
  height: 240px;
  width: 73px;
  border-radius: 0 0 8px 8px;
  background-color: #eaecf0;
  position: absolute;
  bottom: 24px;
  left: 0;
  margin-top: auto;
`;
