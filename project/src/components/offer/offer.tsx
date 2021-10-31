/* eslint-disable no-console */
import { Review } from '../../types/review';
import { OfferType } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import PageHeader from '../page-header/page-header';
import ReviewForm from '../review-form/review-form';

type OfferProps = {
  offers: OfferType[],
  id: string,
  reviews: Review[],
}

const createReviewsTemplate = (reviews: Review[]):JSX.Element => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <li className="reviews__item" key={review.id}>
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">
            {review.user.name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: '80%'}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {review.comment}
          </p>
          <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
        </div>
      </li>
    ))}
  </ul>
);

const getActiveOffer = (offers: OfferType[], id:string): OfferType => {
  const index = offers.findIndex((offer) => offer.id === id);

  return offers[index];
};

const getRestOffers = (offers: OfferType[], id:string): OfferType[] => {
  const filteredOffers = offers.filter((offer) => offer.id !== id);

  return filteredOffers;
};

function Offer({offers, id, reviews}: OfferProps): JSX.Element {
  const activeOffer = getActiveOffer(offers, id);
  const restOffers = getRestOffers(offers, id);

  const { host, title, isFavorite, type, bedrooms, maxAdults, price, description, goods, images } = activeOffer;
  const {avatarUrl, isPro, name} = host;
  const reviewsAmount = reviews.length;

  return (
    <div className="page">
      <PageHeader />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, index) => (
                <div className="property__image-wrapper" key={index.toString()}>
                  <img className="property__image" src={image} alt="Studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms > 1 ? `${bedrooms} Bedrooms` : `${bedrooms} Bedroom`}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults > 1 ? `${maxAdults} adults` : `${maxAdults} adult`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item, index) => (
                    <li className="property__inside-item" key={item + index.toString()}>
                      {item}
                    </li>))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isPro ?
                    <span className="property__user-status">
                      Pro
                    </span> : ''}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsAmount}</span></h2>
                {createReviewsTemplate(reviews)}
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {restOffers.map((offer) =>(
                <OfferCard
                  offerInfo={offer}
                  key={offer.id}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
