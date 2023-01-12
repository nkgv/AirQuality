const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f5139e69a8msh965f020b62344bdp15ff7cjsndac573ae23e4',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};
 function air(city){
    heading.innerHTML=city
    fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city='+city, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        document.getElementById("overallaqi").innerHTML=response.overall_aqi

        document.getElementById("cocon").innerHTML=response.CO.concentration
        document.getElementById("coaqi").innerHTML=response.CO.aqi

        document.getElementById("nocon").innerHTML=response.NO2.concentration
        document.getElementById("noaqi").innerHTML=response.NO2.aqi

        document.getElementById("socon").innerHTML=response.SO2.concentration
        document.getElementById("soaqi").innerHTML=response.SO2.aqi

        document.getElementById("pm10con").innerHTML=response.PM10.concentration
        document.getElementById("pm10aqi").innerHTML=response.PM10.aqi

    })
	.catch(err => console.error(err));
 }

 air("Bangalore")

 function submit(e){
//  e.preventDefault();
 air(input.value)

 }