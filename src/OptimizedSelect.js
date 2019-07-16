import React, { Fragment, useState, useEffect } from "react";

import useDebounce from "./useDebounce";
import taxonomies from "./googleProductTaxonomies";

import { Select } from "antd";
const { Option } = Select;

const UnoptimizedSelect = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedTaxonomy, selectTaxonomy] = useState(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const filteredList = taxonomies.filter(
        taxonomy =>
          taxonomy.toLowerCase().indexOf(debouncedSearchTerm.toLowerCase()) !==
          -1
      );
      setOptions(filteredList);
    } else {
      setOptions([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <Fragment>
      <Select
        showSearch
        style={{ width: 800 }}
        onChange={value => selectTaxonomy(value)}
        onSearch={value => setSearchTerm(value)}
      >
        {options.map(taxonomy => (
          <Option key={taxonomy} value={taxonomy}>
            {taxonomy}
          </Option>
        ))}
      </Select>
      {selectedTaxonomy && selectedTaxonomy}
    </Fragment>
  );
};

export default UnoptimizedSelect;
