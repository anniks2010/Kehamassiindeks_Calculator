const express = require('express');
const bodyParser= require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended: true})); 


app.get('/',function(request,response){
    
    response.sendFile(__dirname +'/index.html'); //nodejs peab täpselt ütlema, kus seda index faili kätte saada
}); ///võtab sisse kaks argumenti - aadress (kuhu kasutaja proovib seda päringut teha), teine on funktsioon


///post meetod on see, mida kasutaja annab läbi vormi serverile
app.post('/',function(request,response){
    console.log(request.body);
    let kaal= Number(request.body.kaal);
    let pikkus=Number(request.body.pikkus);
    
    let result=Number((kaal/(pikkus*pikkus)).toFixed(2));
    ///console.log(`${pikkus} m pika ja ${kaal} kg kaaluva inimese kehamassiindeks on${kaal}/(${pikkus}*${pikkus})=${result} (kg/m2).`); // siin näeb ainult konsoolis
    
    if(result<19){
        response.write(`<p>${pikkus} m pika ja ${kaal} kg kaaluva inimese kehamassiindeks on ${kaal}/(${pikkus}*${pikkus})=${result} (kg/m2).</p>`);
        response.write(`<p>Kehamassiindeks alla 19 - alakaal.</p>`);
        response.send();
    }
    else if (result>19 && result < 24.9){
        response.write(`<p>${pikkus} m pika ja ${kaal} kg kaaluva inimese kehamassiindeks on ${kaal}/(${pikkus}*${pikkus})=${result} (kg/m2).</p>`);
        response.write(`<p> Kehamassiindeks 19-24,9 - normaalkaal. </p>`);
        response.send();
    }
    else if (result>25 && result < 29.9){
        response.write(`<p>${pikkus} m pika ja ${kaal} kg kaaluva inimese kehamassiindeks on ${kaal}/(${pikkus}*${pikkus})=${result} (kg/m2).</p>`);
        response.write(`<p> Kehamassiindeks 25-29,9 - ylekaal. </p>`);
        response.send();
    }
    else if (result>30){
        response.write(`<p>${pikkus} m pika ja ${kaal} kg kaaluva inimese kehamassiindeks on ${kaal}/(${pikkus}*${pikkus})=${result} (kg/m2).</p>`);
        response.write(`<p> Kehamassiindeks yle 30 - rasvumine. </p>`);
        response.send();
    }
   
});
///app hakkab ootama päringut, callbackiks kasutada anonüümset funktsiooni function() või () =>
app.listen(3000, function(){
    console.log('Server is running on Port 3000');
});