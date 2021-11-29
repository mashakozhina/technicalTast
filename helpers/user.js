const buildUser = () => {
    const market = Cypress.config('marketCode');
    return {
      email: `kuato_${market}_${Date.now()}_monitoring@wuaki.tv`,
      password: 'kuatopassword',
      changedPassword: 'changedkuatopassword',
      mobileNumber: '12345678',
      userName: `kuatoName_${Date.now()}`
    };
  };

const userRegister = () => {

}
masha@gmail.com
test5
  
  