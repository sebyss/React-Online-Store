import React, { useState } from "react";
import { Button, Input, Select } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";
import { useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { bindActionCreators } from "redux";
import { categoriesThunks } from "../state/ducks/categoriesDucks";
const { Option } = Select;

const AdminPanel = ({ categories, categoriesThunks }) => {
  const [selectedCategory, setSelectedCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState([]);

  console.log(selectedCategory);
  useEffect(() => {
    if (categories.length) {
      setLoading(false);
      setSelectedCategory({ ...categories[0] });
    }
  }, [categories]);

  const changeCategory = (categoryId) => {
    const getSelectedCategory = categories.find((e) => e.id === categoryId);
    setSelectedCategory(getSelectedCategory);
  };

  const updateCategoryName = (e) => {
    const newCategory = { ...selectedCategory, name: e.target.value };
    setSelectedCategory(newCategory);
  };

  const removeFilter = (filter, name) => {
    const updatedCategory = {
      ...selectedCategory,
      filtersList: {
        ...selectedCategory.filtersList,
        [name]: [
          ...selectedCategory.filtersList[name].filter((e) => e !== filter),
        ],
      },
    };

    setSelectedCategory(updatedCategory);
  };

  const handleInputChange = (index, value) => {
    const newInputValue = { ...inputValue, [index]: [value] };
    setInputValue(newInputValue);
  };

  const addNewFilter = (filter) => {
    const updatedCategory = {
      ...selectedCategory,
      filtersList: {
        ...selectedCategory.filtersList,
        [filter]: [
          ...selectedCategory.filtersList[filter],
          ...inputValue[filter],
        ],
      },
    };
    setSelectedCategory(updatedCategory);
  };

  const updateFilterName = (filterName, value) => {
    const updatedCategory = {
      ...selectedCategory,
      filtersList: {
        ...selectedCategory.filtersList,
        [value]: [...selectedCategory.filtersList[filterName]],
      },
    };

    delete updatedCategory.filtersList[filterName];
    setSelectedCategory(updatedCategory);
  };

  if (loading) {
    return <p>loading</p>;
  }

  return (
    <Page>
      <>Category</>
      <Select style={{ width: 120 }} onChange={(e) => changeCategory(e)}>
        {categories.map((category) => (
          <Option value={category.id} key={category.id}>
            {category.name}
          </Option>
        ))}
      </Select>

      <>Name:</>
      <StyledInput
        style={{ width: 120 }}
        value={selectedCategory.name}
        onChange={(e) => updateCategoryName(e)}
      ></StyledInput>

      <p>Filters:</p>
      <div>
        {Object.keys(selectedCategory.filtersList).map((e) => (
          <React.Fragment>
            <StyledInput
              value={e}
              key={e}
              onChange={(event) => updateFilterName(e, event.target.value)}
            ></StyledInput>

            <>Add new filter option:</>

            <StyledInput
              onChange={(input) => handleInputChange(e, input.target.value)}
            ></StyledInput>
            <Button onClick={() => addNewFilter(e)}>Add Filter</Button>

            {selectedCategory.filtersList[e].map((filter) => (
              <FilterContainer>
                <FilterProperty>{filter}</FilterProperty>
                <StyledButton
                  type="danger"
                  icon={<DeleteOutlined style={{ fontSize: 15 }} />}
                  onClick={() => removeFilter(filter, e)}
                ></StyledButton>
              </FilterContainer>
            ))}
          </React.Fragment>
        ))}
      </div>
      <Button
        onClick={() => categoriesThunks.updateCategoies(selectedCategory)}
      >
        Apply Changes
      </Button>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.list,
});

const mapDispatch = (dispatch) => ({
  categoriesThunks: bindActionCreators(categoriesThunks, dispatch),
});

export default connect(mapStateToProps, mapDispatch)(AdminPanel);

const Page = styled.div`
  padding-top: 30px;
  min-height: 100vh;
  display: flex;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const FilterContainer = styled.div`
  width: 300px;
  display: flex;
`;

const StyledButton = styled(Button)`
  height: 20px;
  width: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const FilterProperty = styled.p`
  padding-right: 10px;
`;

const StyledInput = styled(Input)`
  width: 300px;
`;
