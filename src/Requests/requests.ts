




export const authorization = async () =>
{
    const response = await fetch("https://localhost:7193/WeatherForecast");
    console.log("наши данные:");
    console.log(response);
    //return response;
}