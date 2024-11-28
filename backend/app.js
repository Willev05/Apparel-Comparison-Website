const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const axios = require('axios');
const app = express();
const config = require('./envSetup');
app.use(cors());

app.get("/getShoes", async (req, res) => {
    var shoes;

    const con = await mysql.createConnection({
        host: "localhost",
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "shoe_db"
    });

    await con.connect((err) => {
        if (err) throw err;
    });

    var [timeRes] = await con.query('SELECT * FROM refreshtime WHERE id=1');
    
    if (timeRes[0].time + 36000 < Date.now()){
        await con.execute(`UPDATE refreshtime SET time=${Date.now()} WHERE id=1`);
        const options = {
            method: 'GET',
            url: 'https://sneaker-database-stockx.p.rapidapi.com/mostpopular',
            params: { limit: '20' },
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                'x-rapidapi-host': 'sneaker-database-stockx.p.rapidapi.com'
            }
        };

        console.log("Outdated data! Pulling from API.");
        shoes = (await axios.request(options)).data;

        await con.execute('DELETE FROM popular');

        var index = 0;
        for await (var shoe of shoes){
            await con.execute(`INSERT INTO popular VALUES ("${shoe.shoeName}", "${shoe.thumbnail}", ${shoe.retailPrice ?? null}, "${shoe.brand}", ${shoe.lowestResellPrice?.stockX ?? null}, ${(shoe.resellLinks?.stockX ?? null) != null ? '"' + shoe.resellLinks?.stockX + '"' : null}, ${shoe.lowestResellPrice?.flightClub ?? null}, ${(shoe.resellLinks?.flightClub ?? null) != null ? '"' + shoe.resellLinks?.flightClub + '"' : null}, ${shoe.lowestResellPrice?.goat ?? null}, ${(shoe.resellLinks?.goat ?? null) != null ? '"' + shoe.resellLinks?.goat + '"' : null}, "${shoe.description ?? null}", ${index})`);
            index ++;
        }
    }
    
    [shoes] = await con.query('SELECT * FROM popular');
    
    con.end();

    console.log("Sent to frontend");
    res.send(shoes);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});