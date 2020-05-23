import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Menu, Checkbox } from 'antd'
import { connect } from 'react-redux'

const { SubMenu } = Menu

const getFilters = (categories, selectedCategory) => {
  var filtersList = []
  var filtersNames = []

  const filtersForSelectedCategory = categories.filter((e) => e.id === selectedCategory)
  const arrayFiltersList = filtersForSelectedCategory.map((e) => e.filtersList)

  arrayFiltersList.map((e) =>
    Object.keys(e).map((item) =>
      Object.values(e[item]).map(
        (filter) =>
          (filtersList = [...filtersList, { value: filter, label: filter, category: item }])
      )
    )
  )

  arrayFiltersList.map((e) =>
    Object.keys(e).map((item) => (filtersNames = [...filtersNames, item]))
  )

  return { filtersList, filtersNames }
}

const Products = ({ categories }) => {
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [activeFilters, setActiveFilters] = useState({})

  console.log(activeFilters)

  useEffect(() => {
    if (categories) {
      setLoading(false)
    }
  }, [categories])

  const addActiveFilters = (checkedValues, filterType) => {
    setActiveFilters({ ...activeFilters, ...activeFilters.filterType, [filterType]: checkedValues })
  }

  if (loading) {
    return <p>loading...</p>
  }

  const filters = getFilters(categories, selectedCategory)

  return (
    <Page>
      <SideFiltersContainer>
        <StyledMenu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1', 'sub2']}
          mode="inline"
          inlineCollapsed={false}
        >
          <StyledSubmenu key="sub1" title="Categorii">
            {categories.map((e) => (
              <StyledMenuItem key={e.id} onClick={(e) => setSelectedCategory(e.key)}>
                {e.name}
              </StyledMenuItem>
            ))}
          </StyledSubmenu>

          {filters.filtersNames.map((e) => (
            <StyledSubmenu key={e} title={e}>
              <div>
                <StyledCheckBoxGroup
                  options={filters.filtersList.filter((filter) => filter.category === e)}
                  onChange={(checkedValues) => addActiveFilters(checkedValues, e)}
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
  )
}

const mapStateToProps = (state) => ({
  categories: state.categories.list,
})

export default connect(mapStateToProps, null)(Products)

const Page = styled.div`
  padding-top: 30px;
  min-height: 100vh;
  display: flex;
  min-height: 100vh;
`

const SideFiltersContainer = styled.div`
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: blue;
  margin-left: 15px;
`

const TopFiltersContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: green;
`

const StyledMenu = styled(Menu)`
  border-right: 0px;
`

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
`

const StyledMenuItem = styled(Menu.Item)`
  border-radius: 25px;
`

const StyledCheckBoxGroup = styled(Checkbox.Group)`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`
