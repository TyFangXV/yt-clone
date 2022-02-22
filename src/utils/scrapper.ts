import axios from "axios";
import cheerio from "cheerio";
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


export const scrapper = async(link:string)=> { 
    try {
    const {data, status} = await axios.get(link);

    if(status === 200) {
       const html = cheerio.load(data);
        const title = html('#wrapper_bg > section > section.content_left > div:nth-child(1) > div.anime_video_body > div.anime_muti_link > ul > li.vidcdn > a').attr("data-video");
        return title;
        
    }

    } catch (error) {
        console.log(error);
        return null;
    }

}


