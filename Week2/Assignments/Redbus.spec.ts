
import {firefox,test} from "@playwright/test"  
{
    test("Launching browser",async({page})=>{  


        await page.goto("https://www.redbus.in");
        await page.waitForTimeout(5000);
        const url1=page.url(); 
        console.log("Opened URL is  "+url1)
        await page.goto("https://www.flipkart.com");
        await page.waitForTimeout(5000);
        const url2=page.url(); 
        console.log("Opened URL is  "+url2)
    
    }
    )
}
