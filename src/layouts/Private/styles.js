import styled, { keyframes } from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
  gap: 1rem;
  padding: 1rem;
`;

export const Sidebar = styled.div`
  background: rgba(255, 255, 255, 0.09);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.1px);
  -webkit-backdrop-filter: blur(6.1px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 1rem;

  a {
    backdrop-filter: blur(25px) saturate(200%);
    -webkit-backdrop-filter: blur(25px) saturate(200%);
    background-color: rgba(17, 25, 40, 0.73);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);

    display: block;
    color: white;
    text-align: left;
    font-size: 1.25rem;
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.8rem;
    transition: 3s ease;

    :hover {
      background: #e1eec3; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to right,
        #f05053,
        #e1eec3
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to right,
        #f05053,
        #e1eec3
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
  }
`;

export const Logo = styled.a`
  font-size: 2rem !important;
  margin: 0 !important;
  margin-bottom: 1.5rem !important;
  font-weight: bold;
  background: transparent !important;
  border-radius: 0px  !important;
  text-align: center !important;

  background: #D38312 !important;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #A83279, #D38312) !important;  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #A83279, #D38312) !important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  -webkit-background-clip: text !important;
  color: transparent !important;

`

export const Main = styled.div``;

export const Header = styled.div`
  background: rgba(255, 255, 255, 0.09);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.1px);
  -webkit-backdrop-filter: blur(6.1px);

  width: 100%;
  height: 10vh;
  margin-bottom: 1rem;

  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:  center;
  padding: 1rem;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #001f3f;
`

export const Content = styled.div`
  background: rgba(255, 255, 255, 0.09);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.1px);
  -webkit-backdrop-filter: blur(6.1px);
  padding: 1.5rem;

  height: calc(100vh - 10vh - 3rem);
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;
