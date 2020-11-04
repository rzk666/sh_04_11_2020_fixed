// Initial state
import { INITIAL_STATE } from '../../../common/app-const';
// Types
import {
  USERS_HAS_ERROR,
  USERS_IS_LOADING,
  USERS_GET_DATA,
  HIDE_DEPARTMENT,
} from './usersTypes';

// This is temp and will change soon
const users = (state = INITIAL_STATE.users, action) => {
  switch (action.type) {
    case USERS_IS_LOADING: {
      return { ...state, isLoading: action.isLoading };
    }
    case USERS_GET_DATA: {
      const { data } = state;
      return {
        ...state,
        data: [...data, ...action.data],
        hasError: false,
        errorCode: -1,
      };
    }
    case HIDE_DEPARTMENT: {
      const { data } = state;
      const { id } = action;
      const filteredUsers = [...data].filter((user) => user.department_id !== id);
      return {
        ...state,
        data: filteredUsers,
        hasError: false,
        errorCode: -1,
      };
    }
    case USERS_HAS_ERROR: {
      if (!action.data) {
        return {
          ...state,
          hasError: action.data,
          errorCode: -1,
          isLoading: false,
        };
      }
      return {
        ...state,
        hasError: true,
        errorCode: `e${action.data}`,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default users;