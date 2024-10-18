import { createContext, useContext, useReducer } from "react"

type State = {
    mark: string
}
const initialState: State = {mark: ''}

type MarkAction = {
    type: 'UPDATE-VALUE'
    mark: string
}

export const useMark = (state = initialState, action: MarkAction) => {
    switch (action.type) {
        case 'UPDATE-VALUE':
            return {...state,  mark: action.mark}

        default:
            return state
    }
}
export const addMark = (mark: string): MarkAction => {
    return {type: 'UPDATE-VALUE', mark}
}

export const MyContext = createContext<{
    mark: State;
    dispatch: React.Dispatch<MarkAction>;
} | undefined>(undefined);

export const MyContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mark, dispatch] = useReducer(useMark, initialState);
  
    return (
      <MyContext.Provider value={{ mark, dispatch }}>
        {children}
      </MyContext.Provider>
    );
  };

  export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
      throw new Error('error');
    }
    return context;
  };