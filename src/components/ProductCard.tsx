import { Product } from "@prisma/client"
import PriceTag from "./PriceTag";
import  Image  from 'next/image';
interface ProductCardProbs{
    product: Product;
}

export default function ProductCard({product}: ProductCardProbs){
    return (
        <div className="card w-full bg-base-100 hover: shadow-xl">
            <figure>
                <Image 
                src={product.imageUrl} 
                alt={product.name}
                width={800}
                height={400}
                className="h-48 object-cover">
                
                </Image>
            </figure>
            
            <div className="card-body">
                <h2 className="card-title">
                    {product.name}
                </h2>
                <p>{product.description}</p>
                <PriceTag price={product.price}></PriceTag>
            </div>
        </div>       
    )
}