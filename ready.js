exports.run = (client) => {

    var now = new Date().toLocaleString("en-US", {timeZone: "America/New_York", timeZoneName: "short", weekday: "short", month: "long", day: "2-digit", year: "numeric", hour: '2-digit', minute:'2-digit'});

  

    client.user.setActivity("for !help RaVen Structure", {type: 'STREAMING'});



    console.log(`Bot is ready @ ${now}`);

};