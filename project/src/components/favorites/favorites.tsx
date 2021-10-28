import { OfferType } from '../../types/offer';

type FavoritesProps = {
  offers: OfferType[]
}

const createFavoriteTemplate = (offerInfo: OfferType): JSX.Element => {
  const {price, title, previewImage, isFavorite, city, type} = offerInfo;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="https://www.google.com/">
            <span>{city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <article className="favorites__card place-card">
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <a href="https://www.google.com/">
              <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place" />
            </a>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button className={`place-card__bookmark-button  button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{width: '100%'}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <a href="https://www.google.com/">{title}</a>
            </h2>
            <p className="place-card__type">{type}</p>
          </div>
        </article>
      </div>
    </li>
  );
};

function Favorites ({offers}: FavoritesProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {offers.map((offer) => createFavoriteTemplate(offer))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
