import {test,expect} from '@playwright/test';
import { Loginpage } from '../pages/Loginpage';
import { helperclass } from './HelperClass';
import { PIMPage } from '../pages/PIMPage';

test.describe("Employee Management", () => {


    test.describe.configure({mode : 'serial'});


    let loginPage: Loginpage;
    let helper: helperclass;
    let pimpage : PIMPage;


    
    test.beforeEach(async ({ page }) => {

        loginPage = new Loginpage(page);
        helper = new helperclass(page);
        pimpage = new PIMPage(page);

        await loginPage.pageNavigation();

    });

    test("TC01 Employee Management @smoke", async ({ page }) => {


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
            await helper.screensShotAtEachStep(page, "Logged in successfully");

           // await page.context().storageState({path : 'login.json'});


        });

        await test.step("Naviagte to PIM Module :" , async() => {

            await page.waitForLoadState('networkidle');

            await pimpage.PIMBtnClick();
        })
    });


    // test("TC02 Naviagte to PIM Module : @smoke " , async ({page}) => {

    //     //test.use({storageState : 'login.json'});

    //     //await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //     await page.waitForLoadState('networkidle');

    //     await pimpage.PIMBtnClick();

    // })







})