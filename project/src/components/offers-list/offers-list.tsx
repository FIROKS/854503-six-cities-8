import OfferCard from '../offer-card/offer-card';
import { OfferType } from '../../types/offer';
import { useState } from 'react';

type OffersListProps = {
  offers: OfferType[];
}

function OffersList({offers}: OffersListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeItem, setActiveItem] = useState('');

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          offerInfo={offer}
          key={offer.id}
          onHover={(id) => setActiveItem(() => id)}
        />),
      )}
    </div>
  );
}

export default OffersList;
