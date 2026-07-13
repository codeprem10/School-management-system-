import { Typography, Grid } from "@mui/material";
import DashboardCard from "./components/DashboardCard";

const dashboardStats = [
  {
    title: "Students",
    value: 520,
  },
  {
    title: "Teachers",
    value: 35,
  },
  {
    title: "Classes",
    value: 15,
  },
  {
    title: "Attendance",
    value: 96,
  },
];

const Dashboard = () => {
  return (
    <>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {dashboardStats.map((stat) => (
          <Grid
            key={stat.title}
            size={{ xs: 12, sm: 6, md: 3 }}
          >
            <DashboardCard
              title={stat.title}
              value={stat.value}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Dashboard;