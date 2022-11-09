import styled from "styled-components";

const Container = styled.div`
  .navbar {
    display: flex;
    justify-content: space-between;
    padding-block: 0.5%;
    padding-inline: 3%;
    align-items: center;

    box-shadow: 6px 8px 9px -6px rgba(204, 197, 197, 0.75);
    -webkit-box-shadow: 6px 8px 9px -6px rgba(204, 197, 197, 0.75);
    -moz-box-shadow: 6px 8px 9px -6px rgba(204, 197, 197, 0.75);

    & > .header {
      display: flex;
      align-items: center;

      gap: 4%;

      & > .nav-links {
        display: flex;
        align-items: center;
        margin-left: 20px;
        gap: 30%;
        color: black;
        font-weight:500 ;
        & > .nav-link {
          color: black;

          &:hover {
            border-bottom: 1px solid black;
          }
        }
      }
    }

    & > .btn-submit {
      background-color: #2a85ff;
      color: white;
      width: 120px;
      border-radius: 10px;
      border: none;
      height: 50px;
      margin-right: 5%;
      font-weight: 500;
      font-size: 17px;
    }

    & > .hamburger {
      display: none;
    }
  }

  @media screen and (max-width: 700px) {
    .navbar {
      & > .btn-submit {
        display: none;
      }

      & > .header {
        & > .nav-links {
          display: none;
        }
      }

      & > .hamburger {
        display: flex;
        cursor: pointer;
      }
    }
  }
`;
export default Container;
