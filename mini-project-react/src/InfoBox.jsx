import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){
  const INIT_URL = "https://images.unsplash.com/photo-1722858343990-16…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const HOT_URL = "https://th.bing.com/th/id/OIP.wlRh-tZlpfyn35Y7wo9xvAHaEK?rs=1&pid=ImgDetMain";
   const COLD_URL = "https://th.bing.com/th/id/OIP.debaDUCrSwMCZ-r2rP42BQHaE7?rs=1&pid=ImgDetMain";
   const RAIN_URL = "https://wallpaperaccess.com/full/4829288.jpg";
    return (
        <div className="InfoBox">
         <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL: info.temp>15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {
            info.humidity>80 ?<ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon/>: <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
      <div>temperature = {info.temp}&deg;C</div>
       <div>Humidity = {info.humidity}</div>
       <p>Min Temp = {info.tempMin}</p>
       <p>Max Temp = {info.tempMax}</p>
       <p>The weather can be describe as <i>{info.weather}</i> and feels like = {info.feelslike}&deg;C</p>
       
        </Typography>
      </CardContent>
      </Card>
      </div>
        </div>
    )
}