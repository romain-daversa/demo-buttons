import "./styles.css";
import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Typography
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import GroupsIcon from "@mui/icons-material/Groups";
import StarsIcon from "@mui/icons-material/Stars";
import WebIcon from "@mui/icons-material/Web";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SchoolIcon from "@mui/icons-material/School";

const data = [
  {
    text: "SharePoint Initiative Offer",
    color: "#008e5c",
    icon: <ArticleIcon fontSize="large" />
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
    icon: <GroupsIcon fontSize="large" />
  },
  {
    text: "Compliance Style Charter",
    color: "#b4c832",
    icon: <StarsIcon fontSize="large" />
  },
  {
    text: "Owners SP Golden RUles",
    color: "#e9b538",
    icon: <WebIcon fontSize="large" />
  },
  {
    text: "Confidentiality Level",
    color: "#f39476",
    icon: <AdminPanelSettingsIcon fontSize="large" />
  },
  {
    text: "Digital Working SP Training",
    color: "#887d95",
    icon: <SchoolIcon fontSize="large" />
  }
];

export default function App() {
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={10}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          {data.map((row) => (
            <Grid item sm={3} key={row.text}>
              <Card
                sx={{
                  background: row.color,
                  color: "white",
                  height: "100%",
                  textAlign: "center"
                }}
              >
                <CardActionArea>
                  <CardContent>
                    {row.icon}
                    <Typography>{row.text}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
