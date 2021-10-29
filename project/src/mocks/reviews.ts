import { Review } from '../types/review';
import { nanoid } from 'nanoid';

export const reviews: Review[] = [
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': nanoid(),
    'rating': 4,
    'user': {
      'avatar_url': 'img/avatar-max.jpg',
      'id': nanoid(),
      'is_pro': false,
      'name': 'Max',
    },
  },
  {
    'comment': 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': nanoid(),
    'rating': 5,
    'user': {
      'avatar_url': 'img/avatar-angelina.jpg',
      'id': nanoid(),
      'is_pro': false,
      'name': 'Angelina',
    },
  },
];
