import puppeteer from "puppeteer";



export const getAnimeLink = async (baseUrl: string) => {
    try {
        const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
        const page = await browser.newPage();
        await page.goto(baseUrl);
        await page.waitForSelector('.content_left > .main_body > .anime_video_body > .anime_muti_link > ul')

        const links = await page.evaluate(() => {
            const links = Array.from(document.querySelectorAll('.content_left > .main_body > .anime_video_body > .anime_muti_link > ul > li > a'))
            //return an object with two keys (name and link)
            return links.map(link => {
                return {
                    name: link.textContent,
                    link: link.getAttribute("data-video")
                }
            })
        })

        
        await browser.close();

        return links;         
    } catch (error) {   
        console.log(error);
        
        return null;
    }
   
}

