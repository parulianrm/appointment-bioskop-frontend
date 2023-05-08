import { createContext, useContext, useReducer } from 'react';

const OrderContex = createContext(null);

const OrderDispatchContext = createContext(null);

export function OrderProvider({ children }) {
  const [tasks, dispatch] = useReducer(orderReducer, intialOrder);

  return (
    <OrderContex.Provider value={tasks}>
      <OrderDispatchContext.Provider value={dispatch}>
        {children}
      </OrderDispatchContext.Provider>
    </OrderContex.Provider>
  );
}

export function useOrder() {
  return useContext(OrderContex);
}

export function useOrderDispatch() {
  return useContext(OrderDispatchContext);
}

function orderReducer(order, action) {
  switch (action.type) {
    case 'added-date': {
      return {
        seatData: order.seatData,
        studioData: order.studioData,
        id: order.id,
        totalTicket: order.totalTicket,
        dateData: action.data,
      };
    }
    case 'added-studio': {
      return {
        seatData: order.seatData,
        studioData: action.data,
        id: order.id,
        totalTicket: order.totalTicket,
        dateData: order.dateData,
      };
    }
    case 'added-total-ticket': {
      return {
        seatData: order.seatData,
        studioData: order.studioData,
        id: order.id,
        totalTicket: action.data,
        dateData: order.dateData,
      };
    }
    case 'delete-all-change': {
      return {
        seatData: {},
        studioData: {},
        id: 0,
        totalTicket: {},
        dateData: {},
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const intialOrder = {
  studioData: {},
  seatData: {},
  dateData: {},
  totalTicket: 0,
  id: 0,
};
