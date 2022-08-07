window.addEventListener("load", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    console.log(lat);
    let long = position.coords.longitude;

    let temperature = document.querySelector(".tempreture");
    console.log(temperature);
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=74fcc9d799e5497435b5375fc69ebd01&units=metric`;
    console.log(long);
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { feels_like } = data.main;
        console.log(feels_like);
        temperature.textContent = feels_like;
      });
  });
});