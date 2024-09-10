
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function SocialMediaPostCards({productTitle , prodDesc , prodCategory , brand , prodRating , prodImage , prodTags}) {
    
    return (

        <div style={{marginBottom : "23px"}}>
            <Card sx={{ maxWidth: 345 }}>
                
                    <CardHeader

                    avatar={ <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">{ (brand) ? brand.slice(0 , 1) : productTitle.slice(0 , 1) }</Avatar> }

                    action={ <IconButton aria-label="settings"></IconButton> }

                    title= { (brand) ? brand : productTitle}
                    subheader= {prodRating}
                    />

                    <CardMedia
                    component="img"
                    height="194"
                    image={prodImage}
                    alt={prodTags}
                    />

                    <CardContent>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {prodDesc}
                    </Typography>

                    </CardContent>

                    <CardActions disableSpacing>

                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>

                    </CardActions>
                    
            </Card>
        </div>
    );

}