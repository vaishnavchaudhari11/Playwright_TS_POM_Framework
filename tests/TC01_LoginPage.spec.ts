import { test, expect } from '@playwright/test';
import { Loginpage } from "../pages/Loginpage";
import { helperclass } from "../tests/HelperClass";




test.describe("Login Page", () => {

    let loginPage: Loginpage;
    let helper: helperclass;


    test.beforeEach(async ({ page }) => {

        loginPage = new Loginpage(page);
        helper = new helperclass(page);

        await loginPage.pageNavigation();

    });

    test("LoginPage to Page @smoke", async ({ page }) => {


        console.log("LoginPage");

        await test.step("User Details for login", async () => {
            await loginPage.enterUserName("Admin");
            await loginPage.enterPassword("admin123");

            await helper.screensShotAtEachStep(page, "User Details")

            await loginPage.loginBtnClick();



        });

        await test.step("Logged in successfully : ", async () => {


            await page.waitForLoadState('networkidle');
            await loginPage.titlevalidate();
            await helper.screensShotAtEachStep(page, "Logged in successfully")


        });






    });












});