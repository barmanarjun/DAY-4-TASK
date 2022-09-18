

const request = new XMLHttpRequest( );
request.open('GET', 'https://restcountries.com/v3.1/all');
request.send(null);
request.onload = function () {
    const response = JSON.parse(request.responseText);
    console.log(response);
    for ( var country of response ) {
        const { flag, altSpellings, region, subregion, population} = country;
        console.log(flag, altSpellings[1], region, subregion, population);
    };
};
