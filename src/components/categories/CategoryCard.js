import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const CategoryCard = ({ cat }) => {
  return (
    <Card style={{ marginTop: "16px" }}>
      <CardHeader title={cat[0]}></CardHeader>
      <CardContent>
        <List>
          {cat[1].map((f) => {
            return <ListItem key={f}>{f}</ListItem>;
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
