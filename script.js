$(".intro").hide();
let userinput;
var photos = [];

$(".add").click(function() {
    userinput=$(".picture-url").val();
    photos.push(userinput);
    $(".gallery").append("<img src="+userinput+">");
    });

$(".carti").click(function() {
    $(".intro").show();    
});

$(".carti").click(function() {
    $(".intro").show();    
});

$(".pierre").click(function() {
    $(".intro").text("Pierre Bourne, most known for his accomplishments as a producer for artists such as Playboi Carti and Travis Scott, has also branched out as an artist with his The Life Of Pierre Album Series.");
    $(".intro").show();
});

$(".summrs").click(function() {
    $(".intro").text("Summrs has been rapping for the last few years, branching over a large variety of sounds such as the plugnb sound with his ex-affilated group, Slayworld.");
    $(".intro").show();
});

$(".lucki").click(function() {
    $(".intro").text("Lucki has been rapping for about a decade, where he uses his monotone & laid-back sound to rap about relatable topics over trap beats.");
    $(".intro").show();
});

$(".smoove").click(function() {
    $(".intro").text("Baby Smoove has taken the sound of Detroit, Michigan & utilize it to talk about topics that most other rappers don't really branch out to.");
    $(".intro").show();
});

$(".izaya").click(function() {
    $(".intro").text("Izaya Tiji is a rapper who is also affilated with Summrs, but goes for a more ambient & emotional sound with songs such as interlude that illustrate the struggles one faces with love.");
    $(".intro").show();
});
    


