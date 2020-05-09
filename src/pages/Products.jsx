import React from "react";
import styled from "styled-components";
import { Menu, Checkbox } from "antd";

const { SubMenu } = Menu;

const Products = () => {
  const options = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange" },
  ];

  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  return (
    <Page>
      <SideFiltersContainer>
        <StyledMenu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1", "sub2"]}
          mode="inline"
          inlineCollapsed={false}
        >
          {/* <StyledSubmenu key="sub1" title="Categorii">
            <StyledMenuItem key="1">Categoria 1</StyledMenuItem>
            <StyledMenuItem key="2">Categoria 2</StyledMenuItem>
            <StyledMenuItem key="3">Categoria 3</StyledMenuItem>
            <StyledMenuItem key="5">Categoria 4</StyledMenuItem>
          </StyledSubmenu> */}

          {/* <StyledSubmenu key="sub2" title="Sebitza">
            <StyledCheckBoxGroup
              options={[...options, ...options, ...options]}
              defaultValue={["Apple"]}
              onChange={onChange}
            />
          </StyledSubmenu> */}
        </StyledMenu>
      </SideFiltersContainer>
      <ContentContainer>
        <TopFiltersContainer />
      </ContentContainer>
    </Page>
  );
};

export default Products;

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
