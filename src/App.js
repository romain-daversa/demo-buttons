import "./styles.css";
import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Typography
} from "@mui/material";
import { FindInPageIcon, AnalyticsIcon } from "@mui/icons-material";

const data = [
  {
    text: "SharePoint Initiative Offer",
    color: "#008e5c",
    icon: <FindInPageIcon fontSize="large" />
  },
  {
    text: "New Site Request Form",
    color: "#59b49f",
    icon: <FindInPageIcon fontSize="large" />
  },
  {
    text: "Expression of Needs Model",
    color: "#007084",
    icon: <AnalyticsIcon fontSize="large" />
  },
  {
    text: "Access Management Model",
    color: "#878787",
    icon: <FindInPageIcon fontSize="large" />
  },
  {
    text: "Compliance Style Charter",
    color: "#b4c832",
    icon: <FindInPageIcon fontSize="large" />
  },
  {
    text: "Owners SP Golden RUles",
    color: "#e9b538",
    icon: <FindInPageIcon fontSize="large" />
  },
  {
    text: "Confidentiality Level",
    color: "#f39476",
    icon: <FindInPageIcon fontSize="large" />
  },
  {
    text: "Digital Working SP Training",
    color: "#887d95",
    icon: <FindInPageIcon fontSize="large" />
  }
];

export default function App() {
  return (
    <div className="App">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {data.map((row) => (
          <Grid xs={3} item key={row.text}>
            <Card sx={{ background: row.color, color: "white" }}>
              <CardActionArea>
                <CardContent>
                  {row.icon}
                  <Typography color="">{row.text}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
