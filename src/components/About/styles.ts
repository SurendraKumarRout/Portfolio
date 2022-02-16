import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
    margin: center;
  }
  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: brown;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    margin-bottom: 1rem;
    padding: 0.7rem;

    p {
      display: inline-block;
      /* position: absolute; */
      top: 50%;
      transform: translateY(-50%);
      margin-left: 1rem;
    }

    img {
      text-align: left;
      width: 3.4rem;
      display: inline-block;
    }
  }

  #frontEnd {
    /* text-align:center;
    margin:auto;
    justify-content:center; */
  }

  #backEnd {
  }

  #dataBase {
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    border-bottom: 0.2rem solid var(--blue);
    margin-top: 2rem;
    color: var(--green);
  }

  h3 {
    display: inline-block;
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: var(--white);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .about-image {
    text-align: center;
    display: inline-block;
    img {
      margin-top: 3rem;
      width: 50%;
      height: 100%;
      /* border-radius: 70% ; */
      filter: grayscale(1);
      transition: filter 0.5s;
      &:hover {
        filter: grayscale(0);
      }
    }
  }

  #head {
    font-size: 2.7rem;
    font-weight: 700;
    /* display: inline-block ; */
  }
  

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .about-image {
      display: flex;
    }
    .hard-skills {
      justify-content: center;
    }
  }
`;
