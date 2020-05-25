import createReducer from "./utils/createReducer";
import { CategoriesEndpoints } from "../../api";

const types = {
  GET_CATEGORIES_REQUEST: "[categories] GET_CATEGORIES_REQUEST",
  GET_CATEGORIES_SUCCESS: "[categories] GET_CATEGORIES_SUCCESS",

  UPDATE_CATEGORIES_REQUEST: "[categories] UPDATE_CATEGORIES_REQUEST",
  UPDATE_CATEGORIES_SUCCESS: "[categories] UPDATE_CATEGORIES_SUCCESS",
};

const initialState = {
  list: [],
  count: 0,
};

const reducer = createReducer(initialState)({
  [types.GET_CATEGORIES_SUCCESS]: (state, { payload: { categories } }) => ({
    ...state,
    list: categories,
    count: categories.length,
  }),
  [types.UPDATE_CATEGORIES_SUCCESS]: (state, { payload: { newCategory } }) => ({
    ...state,
    list: { ...state.categories, newCategory },
    count: state.categories.length,
  }),
});

const thunks = {
  getCategories: () => async (dispatch) => {
    try {
      dispatch({ type: types.GET_CATEGORIES_REQUEST });
      const categories = await CategoriesEndpoints.getCategories();
      dispatch({ type: types.GET_CATEGORIES_SUCCESS, payload: { categories } });
      return categories;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  updateCategoies: (newCategory) => async (dispatch) => {
    console.log(newCategory);
    try {
      dispatch({ type: types.UPDATE_CATEGORIES_REQUEST });
      await CategoriesEndpoints.updateCategory(newCategory);
      dispatch({
        type: types.UPDATE_CATEGORIES_SUCCESS,
        payload: { newCategory },
      });
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export { types as categoriesTypes };
export { thunks as categoriesThunks };
export default reducer;
