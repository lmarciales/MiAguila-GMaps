export interface DefaultRoute {
  origin: AddressRoute;
  destination: AddressRoute;
}

export interface AddressRoute {
  lat: number;
  lng: number;
}
