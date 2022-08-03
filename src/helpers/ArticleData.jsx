import * as Icon from "react-feather";
import shoes from '../media/shoes.jpg';
import fullOutfit from '../media/casualM2.jpg';



const generarId = () =>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

export const ArticleData = [
    {
        id: generarId(),
        articleName: 'Papadog shoes for the winter',
        articleImg: shoes,
        articlePrice: 80,
    },
    {
        id: generarId(),
        articleName: 'Hand-picked outfit for him',
        articleImg: fullOutfit,
        articlePrice: 700,
    },
    {
        id: generarId(),
        articleName: 'Hand-picked asdasd for him',
        articleImg: fullOutfit,
        articlePrice: 500
    },    
    {
        id: generarId(),
        articleName: 'not measd-picked outfit for him',
        articleImg: fullOutfit,
        articlePrice: 100
    },
    {
        id: generarId(),
        articleName: 'Papadog shoes for the winter',
        articleImg: shoes,
        articlePrice: 80,
    },
    {
        id: generarId(),
        articleName: 'Hand-picked outfit for him',
        articleImg: fullOutfit,
        articlePrice: 700,
    },
    {
        id: generarId(),
        articleName: 'not measd-picked outfit for him',
        articleImg: fullOutfit,
        articlePrice: 100
    },
    {
        id: generarId(),
        articleName: 'Papadog shoes for the winter',
        articleImg: shoes,
        articlePrice: 80,
    },
    {
        id: generarId(),
        articleName: 'Hand-picked outfit for him',
        articleImg: fullOutfit,
        articlePrice: 700,
    },
    
]
