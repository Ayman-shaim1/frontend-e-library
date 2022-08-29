import styled from "styled-components";
import { useLocation } from "react-router-dom";
const StyledFooter = styled.div`
  width: 100%;
  padding: 30px;
  border-top: 1px solid lightgray;
  display: flex;
  justify-content: center;
`;

const Footer = () => {
  // hooks :
  const location = useLocation();
  if (
    location.pathname.toLocaleLowerCase() === "/login" ||
    location.pathname.toLocaleLowerCase() === "/register"
  ) {
    return <></>;
  } else {
    return (
      <StyledFooter>
        <small>
          Copyright &copy; {new Date().getFullYear()} -&nbsp;
          <span className="text-main-color">
            <i className="fa-solid fa-book-open"></i>&nbsp;E-Library
          </span>
        </small>
      </StyledFooter>
    );
  }
};

export default Footer;
