import createReducer from "./utils/createReducer";
import { CategoriesEndpoints } from "../../api";

const types = {
  GET_CATEGORIES_REQUEST: "[categories] GET_CATEGORIES_REQUEST",
  GET_CATEGORIES_SUCCESS: "[categories] GET_CATEGORIES_SUCCESS",
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
};

export { types as categoriesTypes };
export { thunks as categoriesThunks };
export default reducer;
