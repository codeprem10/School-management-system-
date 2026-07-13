import { Card, CardContent, Typography } from "@mui/material";

interface DashboardCardProps {
  title: string;
  value: number | string;
  
}

const DashboardCard = ({ title, value }: DashboardCardProps) => {
    return (
        <Card elevation={3}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>

        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
    )
}

export default DashboardCard;