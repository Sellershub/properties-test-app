export interface PropertyType {
  id: number;
  address: string;
  propertyType: number;
  propertyTypeText: string;
  price: number;
  status: number;
  statusText: string;
  bedrooms: number;
  bathrooms: number;
  receptionRooms: number;
  floorArea: number;
  image: string;
}

export interface PropertyDetailsType {
  id: number;
  propertyStatus: number;
  propertyStatusText: string;
  propertyType: number;
  propertyTypeText: string;
  sellerGroupId: number;
  price: number;
  priceCurrency: string;
  bedrooms: number;
  bathrooms: number;
  receptionRooms: number;
  areaSquareFeet: number;
  address: string;
  geolocation: Geolocation;
  leaseInformation: LeaseInformation;
  contractInformation: ContractInformation;
  taxInformation: TaxInformation;
  accessAndAlarm: string;
  images: Image[];
  brochures: Brochure[];
}

export interface Geolocation {
  lat: number;
  lng: number;
}

export interface LeaseInformation {
  type: number;
  typeText: number;
  leaseExpires: string;
  serviceCharge: number;
  groundRent: number;
}

export interface ContractInformation {
  instructedOnDate: string;
  launchedDate: string;
  expiresDate: string;
}

export interface TaxInformation {
  councilTaxBand: string;
  localAuthority: string;
}

export interface Image {
  id: number;
  url: string;
  mediaType: number;
  priority: number;
}

export interface Brochure {
  id: number;
  url: string;
  mediaType: number;
  priority: number;
}
