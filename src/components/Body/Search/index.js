import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
// import { grey, blmLightGrey, blmGrey, darkGrey } from "../../utils/colors";
// import rem from "../../utils/rem";
// import { navbarHeight } from "../../utils/sizes";
// import { resetInput } from "../../utils/form";
// import { mobile } from "../../utils/media";

const StyledSearchIcon = styled(SearchIcon)``;

const INPUT_ID = "docs-search-input";

const Wrapper = styled.form`
  @media (max-width: 1000px) {
    display: block;
    padding: 0;
    span.algolia-autocomplete {
      display: block !important;
    }
    span.ds-dropdown-menu::before {
      display: none;
    }
  }

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 0 0 auto;
`;

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  appearance: none;
  flex: 0 0 auto;
  color: currentColor;
  ::placeholder {
    color: currentColor;
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }
  :focus {
    ::placeholder {
      opacity: 0.8;
    }
  }
  ${mobile(css`
    padding: ${rem(10)} ${rem(48)};
    display: block;
    width: 100%;
    background: ${blmGrey};
    color: white;
  `)};
`;

const Search = ({ isDocs, className }) => {
  return (
    <Wrapper className={className}>
      <Button>
        <StyledSearchIcon />
      </Button>
      <Input
        id={INPUT_ID}
        placeholder={isDocs ? `Search ...` : `Search docs ...`}
        ref={searchInput}
        type="search"
      />
    </Wrapper>
  );
};

Search.propTypes = {
  className: PropTypes.string
};

export default Search;
