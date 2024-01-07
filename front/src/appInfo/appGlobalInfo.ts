import { MenuItemProps } from '../components/MenuItem/MenuItem';

export type GlobalInfoType = {
  title: string;
  altTags: string[];
  baseUrl: string;
  menuMainItems: MenuItemProps[];
  menuAdditonalItems: MenuItemProps[];
  tel: string;
  email: string;
  aboutUsTexts: string[];
};

const menuAdditionalItems = [
  { title: 'Каталог', path: '/catalog' },
  { title: 'О магазине', path: '/about' },
  { title: 'Контакты', path: '/contacts' },
];

export const appGlobalInfo = {
  title: 'Bosa Noga',
  altTags: [],
  baseUrl: 'http://localhost:6006',
  menuMainItems: [{ title: 'Главная', path: '/' }, ...menuAdditionalItems],
  menuAdditonalItems: menuAdditionalItems,
  tel: '+7-495-790-35-03',
  email: 'office@bosanoga.ru',
  aboutUsTexts: [
    'Индивидуальный подход специалиста. Когда поступает новая коллекция обуви весна-лето или же коллекция обуви осень-зима – покупателям бывает трудно сориентироваться во всем многообразии новинок. Наш менеджер по телефону поможет вам определиться с товарами, подходящими именно вам.',
    'Мы периодически проводим распродажи как женских и мужских, так и детских моделей. Вы будете приятно удивлены ценами на аксессуары в магазине BosaNoga.',
    'У нас всегда есть из чего выбрать. Неважно, какую категорию вы просматриваете: осень-зима, или же весна-лето – вы всегда сможете найти варианты, подходящие вам по внешнему виду и цене.',
    'Мы несем ответственность за все товары.',
    'Молодые мамы будут рады обширному ассортименту детских моделей.',
  ],
};
