import { EnvironmentConfiguration } from '../app/models/environment-configuration';

//const serverUrl = 'https://sk-table-booking-app-api.azurewebsites.net/api';
// docker url https://table-booking-api-docker.azurewebsites.net/
const serverUrl = 'https://table-booking-api-docker.azurewebsites.net/api';

// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'prod',
  production: true,
  apiUrl: serverUrl,
  apiEndpoints: {
    getRestaurants: 'Restaurant/restaurants',
    getRestaurantBranches: 'Restaurant/branches',
    getDiningTables: 'Restaurant/diningtables',
    updateReservation: 'Reservation/CheckIn',
    saveReservation: 'Restaurant',
    getReservationDetails: 'Reservation/getreservations',
  },
  adb2cConfig: {
    clientId: '92022704-ab54-48a1-9f20-102aea9e573f',
    readScopeUrl:
      'https://tablebookingorg.onmicrosoft.com/restaurant/api/Booking.Read',
    writeScopeUrl:
      'https://tablebookingorg.onmicrosoft.com/restaurant/api/Booking.Write',
    apiEndpointUrl:
      'https://sk-table-booking-app-api.azurewebsites.net/api/Reservation',
  },
  cacheTimeInMinutes: 30,
};
