fetch('https://restcountries.com/v3.1/all')
    .then(response => {
        return response.json();
    })
    .then(countryDetails => {
        console.log(countryDetails.length);
        var asianCountries = countryDetails.filter((ele) => ele.region == "Asia");
        console.log("Total Asain Countries: " + asianCountries.length);
        var popuLess2L = countryDetails.filter((ele) => ele.population < 200000);
        console.log("Total countries with population less than 2 Lakhs: "+popuLess2L);
        countryDetails.forEach(element => {
             console.log("Flag: "+element.flags.svg)
             console.log("Name: "+element.name.common)
             console.log("capital: "+element.capital)
         });
        var totalPopulation = countryDetails.reduce((acc,cv) => acc+cv.population,0);
        console.log("TotalPopulation:"+totalPopulation);
        var usdCountries = countryDetails.filter(ele => ele.currencies && ele.currencies.USD);
        console.log("Total usdCountriesNames:"+usdCountries.length);
        var usdCountriesNames = usdCountries.forEach(ele => console.log(ele.name.common));
    })
    .catch(error => {
        console.error('Error:', error);
    });

    