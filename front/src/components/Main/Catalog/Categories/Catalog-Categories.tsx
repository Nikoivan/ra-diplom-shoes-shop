import CategoriesItem, { CategoriesItemProps } from './Item/Categories-Item';

export type CategoriesProps = CategoriesItemProps[];

export default function CatalogCategories({
  categories,
}: {
  categories: CategoriesProps;
}) {
  const onItemClick = (id?: number | null) => {
    console.log(id);
    // передать в глобальное состояние выбранную категорию
    // для последующей загрузки элементов по категории
  };

  return (
    <ul className='catalog-categories nav justify-content-center'>
      {[{ title: 'Все', selected: true }, ...categories].map((item, idx) => (
        <CategoriesItem onItemClick={onItemClick} key={idx} {...item} />
      ))}
    </ul>
  );
}
