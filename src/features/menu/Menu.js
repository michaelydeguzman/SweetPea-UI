import React from "react";

import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { StyledCard } from '../../components/ui/StyledCard';
import { fetchMenuGroupsAsync } from './menuSlice';
import { useSelector, useDispatch } from 'react-redux';

export function Menu(props) {

    const { isMenuClicked } = props;

    const menuGroups = useSelector((state) => state.menu.menuGroups);
    
    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    const cards = products.map(product =>{
        return (
            <Grid item key={product.id} xs={3} justifyContent="center" alignItems="center" display="flex">
                <StyledCard>
                    <Card sx={{ width: 354, height: 345  }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={product.image}
                            title={product.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography> */}
                            <Typography variant="body2" color="text.secondary">
                            $ {product.price}
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                    </Card>
                </StyledCard>
            </Grid>
       );
    });

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result=> {
            setProducts(result);
            console.log(result);
        })
    }, []);

    return (
        <>
           <Grid container 
           columnSpacing={{xs: 1, sm: 2, md: 3}}
           rowSpacing={{xs: 1, sm: 2, md: 3}}
           justifyContent="center"
           alignItems="center"
           >
             { cards }
           </Grid>
        </>
    )
}

export default Menu;