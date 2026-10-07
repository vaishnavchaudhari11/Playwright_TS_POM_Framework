import { expect, type Locator, type Page} from '@playwright/test';
import { throws } from 'assert';


export class Loginpage{

    readonly page : Page;
    readonly username : Locator;
    readonly password : Locator;
    readonly loginBtn : Locator;
    //readonly rememberMe : Locator;
    //readonly termsBtn : Locator;




    constructor(page :Page){

        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        //this.rememberMe = page.locator('[class="material-symbols-outlined text-white text-xs checkbox-icon"]');
        this.loginBtn = page.locator('[type="submit"]');
        //this.termsBtn = page.locator('button', {hasText : "I Understand & Continue"});
    }


    async pageNavigation() : Promise<void> {

        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        await this.page.waitForLoadState('domcontentloaded');

        //await this.termsBtn.click();

        
    };

    async enterUserName(email : string) : Promise<void>{

        await this.username.fill(email);

    };

    async enterPassword(password : string) : Promise<void>{

        await this.password.fill(password);
    };

    // async rememberCredentials() : Promise<void> {

    //     await this.rememberMe.click();
    // };


    async loginBtnClick() : Promise<void> {

        await this.loginBtn.click();

        await this.page.waitForLoadState('domcontentloaded');
    };




}