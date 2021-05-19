import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../store';

// Use throughout the app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const selectTodos = (state: RootState) => state.todo.items;
