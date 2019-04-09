import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { dark } from "../styles/styleGuide";

const HeadlineStyle = styled.h1`
  color: ${dark};
  font-size: 2em;
`;

const Headline = ({ title }) => {
  return <HeadlineStyle>{title}</HeadlineStyle>;
};

Headline.propTypes = {
  title: PropTypes.string
};

export default Headline;
