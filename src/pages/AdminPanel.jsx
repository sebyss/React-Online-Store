import React, { useState } from 'react'
import { Button, Input, Select } from 'antd'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { useEffect } from 'react'

const { Option } = Select

const getFilters = (categories, selectedCategory) => {
  var filtersList = []
  var filtersNames = []

  const filtersForSelectedCategory = categories.filter((e) => e.id === selectedCategory.id)
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

const AdminPanel = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (categories) {
      setLoading(false)
    }
  }, [categories])

  const changeCategory = (categoryId) => {
    const getSelectedCategory = categories.find((e) => e.id === categoryId)
    setSelectedCategory(getSelectedCategory)
  }

  const updateCategoryName = (e) => {
    const newCategory = { ...selectedCategory, name: e.target.value }
    setSelectedCategory(newCategory)
  }

  console.log(selectedCategory)

  const removeFilter = (filter, name) => {
    const updatedCategory = {
      ...selectedCategory,
      ...selectedCategory.filtersList[!name],
    }
    console.log(updatedCategory)
  }

  if (loading) {
    return <p>loading</p>
  }

  const filters = getFilters(categories, selectedCategory)

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
      <Input
        style={{ width: 120 }}
        value={selectedCategory.name}
        onChange={(e) => updateCategoryName(e)}
      ></Input>
      <p>Filters:</p>
      <div>
        {filters.filtersNames.map((e) => (
          <React.Fragment>
            <Input value={e} key={e}></Input>
            <>Add new filter:</>
            {filters.filtersList.map((filter) => {
              if (filter.category === e)
                return (
                  <div>
                    <p>{filter.label}</p>
                    <button onClick={() => removeFilter(filter.label, e)}>delete</button>
                  </div>
                )
            })}
          </React.Fragment>
        ))}
      </div>
    </Page>
  )
}

const mapStateToProps = (state) => ({
  categories: state.categories.list,
})

export default connect(mapStateToProps, null)(AdminPanel)

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
