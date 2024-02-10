import { catalogActions } from '../../../../../store/slices/catalogSlice';
import { useAppDispatch, useAppSelector } from '../../../../../store/store';

export type CategoriesItemProps = {
	title: string;
	id: number | null;
};

const CategoriesItem = ({ title, id }: CategoriesItemProps) => {
	const { selected } = useAppSelector((store) => store.catalog);
	const dispatch = useAppDispatch();

	return (
		<li className='nav-item'>
			<a
				className={`nav-link${selected === id ? ' active' : ''}`}
				onClick={(e: React.PointerEvent<HTMLAnchorElement>) => {
					e.preventDefault();
					dispatch(catalogActions.selectCategory(id));
				}}>
				{title}
			</a>
		</li>
	);
};

export default CategoriesItem;
