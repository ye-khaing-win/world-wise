import { useMemo } from 'react';

export type NavGroupProps = {
  id: string;
  icon?: string;
  title: string;
  type: 'title' | 'item' | 'collapse';
  children?: NavGroupProps[];
};

const useNavGroups = () => {
  const data: NavGroupProps[] = useMemo(
    () => [
      {
        id: 'overview',
        title: 'Overview',
        type: 'title',
      },
      {
        id: 'users',
        icon: 'solar:bell-bing-bold-duotone',
        title: 'Users',
        type: 'collapse',
        children: [
          {
            id: 'users_list',
            icon: 'solar:clipboard-list-bold-duotone',
            title: 'List',
            type: 'item',
            path: 'users/list',
          },
          {
            id: 'users_create',
            icon: 'solar:clipboard-add-bold-duotone',
            title: 'Create',
            type: 'item',
            path: 'users/new',
          },
          {
            id: 'users_edit',
            icon: 'solar:clipboard-check-bold-duotone',
            title: 'Edit',
            type: 'item',
            path: 'users/edit',
          },
        ],
      },
      {
        id: 'products',
        icon: 'solar:clapperboard-text-bold-duotone',
        title: 'Products',
        type: 'collapse',
        children: [
          {
            id: 'products_list',
            icon: 'solar:clipboard-list-bold-duotone',
            title: 'List',
            type: 'item',
            path: 'products/list',
          },
          {
            id: 'products_create',
            icon: 'solar:clipboard-add-bold-duotone',
            title: 'Create',
            type: 'item',
            path: 'products/new',
          },
        ],
      },
      {
        id: 'kanban',
        icon: 'solar:closet-bold-duotone',
        title: 'Kanban',
        type: 'item',
      },
    ],
    []
  );

  return data;
};

export default useNavGroups;
