import {test} from '@playwright/test';
import {Loginpage} from "../pages/Loginpage";


test.describe("Login Page" , () => {

    let loginPage : Loginpage;


    test.beforeEach(async ({page}) => {

        loginPage = new Loginpage(page);
        await loginPage.pageNavigation();

        

    });

    test("LoginPage to Page @smoke" , async ({page}) => {

    
        console.log("LoginPage");
        await loginPage.enterUserName("Admin");
        await loginPage.enterPassword("admin123");
        await loginPage.loginBtnClick();

        
         

    });












});