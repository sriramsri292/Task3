var apiUrl = "https://restcountries.com/v3.1/all";

async function display() {
  try {
    let response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch country data');
    }
    let data = await response.json();
    data.forEach(country => {
      var img = document.createElement("img");
      var countryCode = country.cca2.toLowerCase();
      img.src = `https://flagcdn.com/160x120/${countryCode}.png`;
      document.body.appendChild(img);
    });
  } catch (error) {
    console.log('Error:', error);
  }
}

display();
