import { expect, type Locator, type Page} from '@playwright/test';
import { throws } from 'assert';


export class PIMPage{

    readonly page : Page;
    readonly addEmployee : Locator;
    readonly firstName : Locator;
    readonly lastName : Locator;
    readonly empId : Locator;
    readonly saveBtn : Locator;
    readonly PIM : Locator;


    constructor(page : Page){

        this.page = page;
        this.addEmployee = page.locator('[class="oxd-button oxd-button--medium oxd-button--secondary"]');
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.empId = page.locator('[class="oxd-input oxd-input--focus"]');
        this.saveBtn = page.locator('[type="submit"]');
        this.PIM = page.locator('[href="/web/index.php/pim/viewPimModule"]');


    }

    async PIMBtnClick() : Promise<void> {

        await this.PIM.click();

        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('networkidle');
    }













}