import styled from "styled-components";
import bg from "../../../assets/image/landing.png";
import ill from "../../../assets/image/illustration.png";

const Container = styled.div`
  background-image: url(${bg});
  height: 100vh;
  background-size: cover;

  & > .info {
    display: flex;
    padding-inline: 10%;

    margin-top: 15%;
    margin-inline: 3%;
    & > .left-container {
      width: 55%;
      display: flex;
      flex-direction: column;

      & > h1 {
        font-size: 44px;
        color: #1b1f2e;
        width: 70%;
      }

      & > p {
        font-size: 24px;
        color: #555555;
        width: 70%;
        margin-block: 5%;
      }
      & > .btn-container {
        display: flex;
        gap: 4%;
        width: 70%;

        & > .btn-started {
          width: 100%;
          background-color: #2a85ff;
          padding: 4%;
          border: none;
          color: white;
          border-radius: 10px;
          font-size: 22px;
          transition: 1s;
          cursor: pointer;
          &:hover {
            transform: translateY(-10px);
          }
        }

        & > .btn-works {
          border: 2px solid #2a85ff;
          color: #2a85ff;
          width: 100%;
          border-radius: 10px;
          font-size: 22px;
          background-color: white;
          cursor: pointer;
          transition: 1s;

          &:hover {
            transform: translateY(-10px);
          }
        }
      }
    }

    & > .right-container {
      width: 45%;
      background-image: url(${ill});
      background-size: contain;
      background-repeat: no-repeat;
    }

    & > .sidebar {
      display: none;
      position: relative;

      & > .nav-links {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 19%;
        width: 100%;
        padding-inline: 2%;

        & > .nav-link {
          color: black;
          font-size: 24px;
          padding: 2%;
          &:hover {
            border-bottom: 1.5px solid black;
            scale: 20px;
          }
        }
      }

      & > .social-icons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        padding: 4%;
        position: absolute;
        top: 8%;

        & > .circle {
          border-radius: 50px;

          width: 40px;
          display: flex;
          align-items: center;
          justify-content: center;

          height: 40px;
          border: 2px solid blue;
          color: blue;
          transition: 1s;
          cursor: pointer;

          &:hover {
            color: white;
            background-color: blue;
            transform: translateY(-5px);
          }
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .info {
      display: flex;
      flex-direction: column;
      padding-inline: 3%;
      gap: 30px;
      position: relative;
      margin-inline: 0%;

      & > .left-container {
        width: 100%;
      }

      & > .right-container {
        width: 100%;
        height: 200px;
      }

      & > .sidebar {
        position: fixed;
        top: 0;
        left: 0px;
        width: 300px;
        height: 100%;
        background-color: white;
        transition: 3s;
        &.active {
          display: flex;
          position: fixed;
          top: 0;
          left: 0px;

          transition: 3s;
        }

        & > .cross-icon {
          position: absolute;
          right: 5%;
          top: 5%;
          cursor: pointer;
        }
      }
    }
  }
`;
export default Container;
