import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function RecipeCard({ recipeTitle, recipeDetails, recipeImage }) {
  return (
    <div>
      {/* <h2>{recipeTitle}</h2>
        <div>{recipeDetails}</div>
        <img src={recipeImage} alt="failed to load"/> */}

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 200 }} title="Taco" image={recipeImage} />
        <CardContent>
          <Typography variant="h5" component="div">
            {recipeTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recipeDetails}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default RecipeCard;
