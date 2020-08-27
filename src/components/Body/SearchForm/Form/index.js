import { compose, setDisplayName } from "~lib";

const Form = compose.form(setDisplayName("SearchForm"))`
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

export default Form;
