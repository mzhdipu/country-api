const countryUrl = "https://restcountries.com/v3.1/all";

const countryfun = () =>{
    fetch(countryUrl)
        .then(res => res.json())
        .then(data => displayCountry(data));
}

const displayCountry = (countries) =>{
    const display = document.getElementById("display");

    countries.forEach(country => {
        let countryWrap = document.createElement("div");
        countryWrap.classList.add("country-wrap");
        countryWrap.innerHTML = `
            <img width=150px src = "${country.flags.png}"/>
            <h2>Country Name : ${country.name.common}</h2>
            <p> Capital Name : ${country.capital ? country.capital : "Not Found" }</p>
            <button onClick = "showDetails('${country.cca2}')";>Show Detail </button>
        `;

        display.appendChild(countryWrap); 
    });
}

const showDetails = (countryCode) =>{
    const singleCountryCode = `https://restcountries.com/v3.1/alpha/${countryCode}`
    
    fetch(singleCountryCode)
        .then(res => res.json())
        .then(data => displaySingleCountryDetails(data[0]));
}

const displaySingleCountryDetails = (details) => {
    const googleMap = document.getElementById("google-map");
    googleMap.innerHTML = `
        <h2>${details.name.common}</h2>
        <iframe width="560" height="315" src="${details.maps.googleMaps}"title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;

}

{/* <iframe src="${details.maps.googleMap}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

// maps.googleMaps
countryfun()