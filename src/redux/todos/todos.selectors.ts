import { createSelector } from 'reselect';
import { AppState } from '../root.reducer';
import { Importance } from './todos.types';

const selectToDosState = (state: AppState, props: Importance) => state.toDos;
const selectImportance = (state: AppState, props: Importance) => props;

const selectAllToDos = createSelector(
	[selectToDosState],
	(state) => state.toDos
);

export const selectPropsToDos = () =>
	createSelector([selectAllToDos, selectImportance], (toDos, importance) =>
		toDos.filter((toDo) => toDo.importance === importance)
	);
