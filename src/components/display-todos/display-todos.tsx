import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ToDo } from '../../redux/todos/todos.types';
import { AppState } from '../../redux/root.reducer';
import { selectPropsToDos } from '../../redux/todos/todos.selectors';

interface OwnProps extends Pick<ToDo, 'importance'> {}
type Props = OwnProps;

const DisplayToDos: React.FC<Props> = ({ importance }) => {
	const memoizedSelector = useMemo(selectPropsToDos, []);
	const toDos = useSelector<AppState, ToDo[]>((state) =>
		memoizedSelector(state, importance)
	);

	console.log(`${importance}: rendering`);

	return (
		<div className='display-todos'>
			<h3>{importance}</h3>
			<ul className='list'>
				{toDos.map((toDo) => (
					<li className='list-item' key={toDo.title}>
						{toDo.title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default DisplayToDos;
