// styled.ts

import styled from 'styled-components';

export const PageContainer = styled.section`
  background-color: #f9f9f9;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.a`
  display: flex;
  items: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  img {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
  }
`;

export const AuthCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 100%;
  max-width: 500px;
`;

export const AuthButton = styled.button`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-weight: bold;
  text-decoration: none;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #555;
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;

// Define more styled components as needed
