
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export function Example(props)
{
    var items = [
       <img src="img1.jpg" width="100%" height="300px"></img>,
       <img src="img2.jpg" width="100%" height="300px"></img>,
       <img src="img3.jpg" width="100%" height="300px"></img>
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => items[i] )
            }
        </Carousel>
    )
}

// export function Item(props)
// {
//     return (
//         <Paper>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>

//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         </Paper>
//     )
// }