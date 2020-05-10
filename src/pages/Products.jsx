import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Menu, Checkbox } from "antd";
import { connect } from "react-redux";

const { SubMenu } = Menu;

const Products = ({ categories }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categories) {
      setLoading(false);
    }
  }, [categories]);

  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  if (loading) {
    return <p>loading...</p>;
  }

  var filtersList = [];
  var filtersNames = [];

  const arrayFiltersList = categories.map((e) => e.filtersList);

  arrayFiltersList.map((e) =>
    Object.keys(e).map((item) =>
      Object.values(e[item]).map((filter) => {
        filtersList = [
          ...filtersList,
          { value: filter, label: filter, category: item },
        ];
      })
    )
  );

  arrayFiltersList.map((e) =>
    Object.keys(e).map((item) => (filtersNames = [...filtersNames, item]))
  );

  return (
    <Page>
      <SideFiltersContainer>
        <StyledMenu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1", "sub2"]}
          mode="inline"
          inlineCollapsed={false}
        >
          <StyledSubmenu key="sub1" title="Categorii">
            {categories.map((e, id) => (
              <StyledMenuItem key={id}>{e.name}</StyledMenuItem>
            ))}
          </StyledSubmenu>

          {filtersNames.map((e) => (
            <StyledSubmenu key={e} title={e}>
              <div>
                <StyledCheckBoxGroup
                  options={filtersList.filter((i) => i.category === e)}
                  onChange={onChange}
                />
              </div>
            </StyledSubmenu>
          ))}
        </StyledMenu>
      </SideFiltersContainer>
      <ContentContainer>
        <TopFiltersContainer />
      </ContentContainer>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.list,
});

export default connect(mapStateToProps, null)(Products);

const Page = styled.div`
  padding-top: 30px;
  min-height: 100vh;
  display: flex;
  min-height: 100vh;
`;

const SideFiltersContainer = styled.div`
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: blue;
  margin-left: 15px;
`;

const TopFiltersContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: green;
`;

const StyledMenu = styled(Menu)`
  border-right: 0px;
`;

const StyledSubmenu = styled(SubMenu)`
  border-radius: 25px;
  box-shadow: 0 0 5px black;
  margin-bottom: 20px;

  .ant-menu-inline {
    border-radius: 25px;
    border-right: none !important;
  }
  .ant-menu-submenu-title {
    border-radius: 25px;
    &:focus {
      border-radius: 25px;
    }
  }
  &:focus {
    border-radius: 25px;
  }
`;

const StyledMenuItem = styled(Menu.Item)`
  border-radius: 25px;
`;

const StyledCheckBoxGroup = styled(Checkbox.Group)`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;
