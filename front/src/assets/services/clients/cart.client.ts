type CartItemProps = {
  title: string;
  id: number;
  size: string;
  count: number;
  price: number;
};

export const getCart = (): CartItemProps[] | undefined => {
  const cartJSON = window.localStorage.getItem('cart');

  return cartJSON ? JSON.parse(cartJSON) : undefined;
};

export const getReadyItems = (): CartItemProps[] => {
  const jsonItems: string | null = window.localStorage.getItem('cart');
  const items: Omit<CartItemProps, 'itemNumber'>[] = jsonItems
    ? JSON.parse(jsonItems)
    : [];
  return items.length
    ? items.map((item, idx) => {
        return {
          ...item,
          itemNumber: idx + 1,
        };
      })
    : [];
};

export function addToCart(product: CartItemProps) {
  const cartItems = getCart();
  const items: CartItemProps[] = cartItems || [];
  const dublicateItem = items.find(
    (item) => item.id === product.id && item.size === product.size
  );
  const newCart = dublicateItem
    ? [
        ...items.filter(
          (item) => item.id !== product.id && item.size !== product.size
        ),
        { ...dublicateItem, count: dublicateItem.count + product.count },
      ]
    : [...items, product];
  window.localStorage.setItem('cart', JSON.stringify(newCart));
}

export function removeFromCart(id: number) {
  const cartItems = getCart();

  if (!cartItems) {
    throw new Error('Ошибка, в хранилище отсуствует информация о товаре');
  }

  const newCart = cartItems.filter((item) => item.id !== id);

  window.localStorage.setItem('cart', JSON.stringify(newCart));
}

export const clearCart = () => {
  window.localStorage.setItem('cart', JSON.stringify([]));
};
