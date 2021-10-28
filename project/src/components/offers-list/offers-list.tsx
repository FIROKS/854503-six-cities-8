import OfferCard from '../offer-card/offer-card';
import { OfferType } from '../../types/offer';

type OffersListProps = {
  offers: OfferType[];
}

function OffersList({offers}: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard offerInfo={offer} key={offer.id}/>)}
    </div>
  );
}

export default OffersList;
