import CategoriesItem, { CategoriesItemProps } from './Item/Item';

export type CategoriesProps = CategoriesItemProps[];

export default function CatalogCategories({ categories }: { categories: CategoriesProps }) {
  return (
    <>
      <ul className='catalog-categories nav justify-content-center'>
        {categories &&
          [{ title: 'Все', id: null }, ...categories].map((item, idx) => <CategoriesItem key={idx} {...item} />)}
      </ul>
    </>
  );
}
