import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function RecipeCard({
  recipeTitle,
  recipeDetails,
  recipeImage,
  addRecipeToFavorite,
}) {
  return (
    <div>
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
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={() => addRecipeToFavorite(recipeTitle)}
          >
            Add to favorite
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default RecipeCard;
