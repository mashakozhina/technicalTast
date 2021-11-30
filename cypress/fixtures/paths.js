const root  = () => {
  return `${Cypress.config('baseUrl')}`;
};
const signInPage  = () => 'http://automationpractice.com/index.php?controller=authentication&back=my-account';
const wishlistPage  = () => 'http://automationpractice.com/index.php?fc=module&module=blockwishlist&controller=mywishlist';

export default {
    root,
    signInPage,
    wishlistPage
};