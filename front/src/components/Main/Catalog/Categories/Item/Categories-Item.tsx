export type CategoriesItemProps = {
  title: string;
  id?: number;
  selected?: boolean;
  onItemClick(id?: number | null): void;
};

const CategoriesItem = ({
  title,
  id,
  selected,
  onItemClick,
}: CategoriesItemProps) => (
  <li className='nav-item'>
    <a
      className={`nav-link${selected ? ' active' : ''}`}
      onClick={(e: React.PointerEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onItemClick(id || null);
      }}
    >
      {title}
    </a>
  </li>
);

export default CategoriesItem;
