import { nanoid } from 'nanoid';

export interface IPlant {
  id?: string;
  name: string;
  description?: string;
  popularity?: number;
}

export const plants: IPlant[] = [
  {
    id: nanoid(),
    name: 'Calathea Silhouette',
    description: 'thvihrihvovnrbhbnv',
    popularity: 8,
  },
  {
    id: nanoid(),
    name: 'Calathea Minature',
    description: 'thvihrihvovnrbhbnv',
    popularity: 16,
  },
  {
    id: nanoid(),
    name: 'Calathea Veitchiana Hook',
    description: 'thvihrihvovnrbhbnv',
    popularity: 5,
  },
  {
    id: nanoid(),
    name: 'Calathea Orbifolia',
    description: 'thvihrihvovnrbhbnv',
    popularity: 1,
  },
  {
    id: nanoid(),
    name: 'Calathea Veitchiana Hook.',
    description: 'thvihrihvovnrbhbnv',
    popularity: 10,
  },
  {
    id: nanoid(),
    name: 'Calathea Lietzei `Fusion White`',
    description: 'thvihrihvovnrbhbnv',
    popularity: 7,
  },
  {
    id: nanoid(),
    name: 'Monstera Deliciosa',
    description: 'thvihrihvovnrbhbnv',
    popularity: 17,
  },
  {
    id: nanoid(),
    name: 'Anthurium Clarinervium',
    description: 'thvihrihvovnrbhbnv',
    popularity: 3,
  },
];
