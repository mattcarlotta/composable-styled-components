import * as React from "react";
import { FaSearch } from "react-icons/fa";
import Button from "~components/Body/Button";
import FlexEnd from "~components/Body/FlexEnd";
import SearchBox from "~components/Body/SearchBox";
import Form from "./Form";

const SearchForm = () => {
  const searchFormRef = React.useRef(null);
  const [isVisible, setVisible] = React.useState(false);

  const openModal = React.useCallback(() => setVisible(true), []);
  const closeModal = React.useCallback(() => setVisible(false), []);

  const handleClickOutside = React.useCallback(
    ({ target }) => {
      if (isVisible && this.wrapperRef && !this.wrapperRef.contains(target))
        closeModal();
    },
    [isVisible, closeModal]
  );

  React.useEffect(() => {
    // if (process.env.NODE_ENV !== "test") {
    //   import("docsearch.js").then(mdl => {
    //     mdl.default({
    //       apiKey: "",
    //       indexName: "composable-styled-components",
    //       inputSelector: '[class^="doc-search"]',
    //       debug: true, // Set debug to true if you want to inspect the dropdown
    //       handleSelected: (input, event, suggestion) => {
    //         // original handleselect
    //         requestModalClose();
    //         input.setVal("");
    //         window.location.assign(suggestion.url);
    //       }
    //     });
    //   });
    // }
  }, []);

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    if (searchFormRef.current) searchFormRef.current.focus();
  }, [searchFormRef.current]);

  return (
    <FlexEnd>
      <div ref={searchFormRef}>
        <Form>
          <Button margin="0 8px 0" padding="0px 4px" htmlFor="search-docs">
            <FaSearch style={{ fontSize: 15 }} />
          </Button>
          <SearchBox className="doc-search" />
        </Form>
      </div>
    </FlexEnd>
  );
};

export default SearchForm;
