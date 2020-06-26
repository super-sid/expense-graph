const GET_EXPENSE_REQUEST = "GET_EXPENSE_REQUEST";
const GET_EXPENSE_SUCCESS = "GET_EXPENSE_SUCCESS";
const GET_EXPENSE_ERROR = "GET_EXPENSE_ERROR";

const initialState = {
  fetching: true,
  spendingDates: [],
  cardBalance: 0,
  datasets: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPENSE_REQUEST:
      return { ...state, fetching: true, error: null };
    case GET_EXPENSE_SUCCESS:
      console.log(action);
      return {
        ...state,
        cardBalance: action.response.cardBalance,
        spendingDates: action.response.spending,
        datasets: action.response.data.datasets,
        fetching: false,
        error: null,
      };
    case GET_EXPENSE_ERROR:
      return {
        ...state,
        fetching: false,
        spendingDates: [],
        cardBalance: 0,
        datasets: [],
        error: action.error,
      };
    default:
      return state;
  }
};
export default reducer;
