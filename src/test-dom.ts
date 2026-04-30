import https from "https";

https.get("https://priceandpartnerslawyers.com/", (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        // Extract style info
        const styles = data.match(/color:\s*#[a-zA-Z0-9]{3,6}/ig) || [];
        const bgs = data.match(/background-color:\s*#[a-zA-Z0-9]{3,6}/ig) || [];
        console.log("Colors:", [...new Set(styles)].slice(0, 10));
        console.log("Backgrounds:", [...new Set(bgs)].slice(0, 10));
    });
});
