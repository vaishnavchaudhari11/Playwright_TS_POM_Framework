import {test , expect, Page} from '@playwright/test';

export class helperclass{

    readonly page : Page;


    constructor(page : Page){
        this.page = page;

    }

    async screensShotAtEachStep(page : Page , ssName : string) : Promise<void> {


        const screenShotBuffer : Buffer = await this.page.screenshot({fullPage : true});

        await test.info().attach(ssName , {

            body : screenShotBuffer,
            contentType : 'image/png',
        });
    };


}