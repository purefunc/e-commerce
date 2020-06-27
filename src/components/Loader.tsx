import React from "react"
import styled, { css } from "styled-components"

export const LoadingSpinner = ({
  isInButton = false,
}: {
  isInButton?: boolean
}) => (
  <Spinner isInButton={isInButton}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </Spinner>
)

const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    display: block;
    position: absolute;

    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid var(--primaryColor);
    border-color: #cef transparent transparent transparent;
    border-radius: 50%;
    animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  ${({ isInButton }) =>
    isInButton &&
    css`
      width: var(--largeFontSize);
      height: var(--largeFontSize);
      div {
        width: var(--baseFontSize);
        height: var(--baseFontSize);
        margin: 4px 4px 4px 2rem;
        border: 4px solid var(--white);
        border-color: var(--white) transparent transparent transparent;
      }
    `};
`
