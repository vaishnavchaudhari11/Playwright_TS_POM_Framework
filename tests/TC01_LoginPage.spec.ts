import {test} from '@playwright/test';
import {Loginpage} from "../pages/Loginpage";


test.describe("Login Page" , () => {

    let loginPage : Loginpage;


    test.beforeEach(async ({page}) => {

        loginPage = new Loginpage(page);
        await loginPage.pageNavigation();

        

    });

    test("LoginPage to Page" , async ({page}) => {

    
        console.log("LoginPage");
        await loginPage.enterEmailBody("user@phptravels.com");
        await loginPage.enterPassword("demouser");
        await loginPage.rememberCredentials();
        await loginPage.loginBtnClick();
        

    });












});