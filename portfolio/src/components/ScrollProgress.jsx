import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  z-index: 1000;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: var(--pink-main);
  width: ${(props) => props.scroll}%;
  transition: width 0.1s ease-out;
`;

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ProgressBarContainer>
      <ProgressBar scroll={scroll} />
    </ProgressBarContainer>
  );
};

export default ScrollProgress;
