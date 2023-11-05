interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: [],
  tenantRoles: ['Restaurant Owner', 'Menu Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Food Delivery App',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage restaurant information',
    'Manage restaurant menus',
    'View orders made to the restaurant',
    'Manage food items on the menu',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/281f25e4-a594-442f-899b-456b8525ae24',
};
