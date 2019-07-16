import React from "react";
import taxonomies from "./googleProductTaxonomies";

import { Select } from "antd";
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const UnoptimizedSelect = () => (
  <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
    {taxonomies.map(taxonomy => (
      <Option key={taxonomy} value={taxonomy}>
        {taxonomy}
      </Option>
    ))}
  </Select>
);

export default UnoptimizedSelect;
