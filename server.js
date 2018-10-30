const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = dev ? 3000 : 5001;

app.prepare().then(() => {
    createServer(async (req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        // const sitemapData = await fetch(
        //     'https://c0407.paas1.fra.modxcloud.com/sitemap.json'
        // )
        //     .then(resp => resp.json())
        //     .catch(e => null);

        // const siteData = sitemapData.sites[pathname];

        // if (siteData && sitemapData) {
        //     app.render(req, res, '/page', {
        //         siteTitle: sitemapData.siteTitle,
        //         siteData,
        //         sitemapData,
        //     });
        // } else {
        handle(req, res, parsedUrl);
        // }
    }).listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
