export enum AppRoute {
  Favorites = '/favorites',
  Root = '/',
  NotFound = '/not-found',
  Login = '/login',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
