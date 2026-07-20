// import { Products } from "../Data/Product";
import Productcard from "../Component/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";



export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        setIsLoading(true);

        // try {
        //     const response = await axios.get(
        //         "https://jsonfakery.com/products"
        //     );

        //     setProducts(response.data);
        // } catch (error) {
        //     console.log(error);
        // }

       await axios.get("https://jsonfakery.com/products").then((res) => {
    console.log("axios response", res);

    if (res?.data) {
        setProducts(res.data);
    } else {
        console.log("Products not found");
    }

}).catch((e) => {
    console.log(e);
});

        setIsLoading(false);
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="flex flex-wrap items-center justify-between px-4 gap-5 w-full mx-auto my-24 xl:w-10/12">
            {isLoading ? <div className=" bg-red-500">Loading....</div> :
                <>
                    {products?.length ? products?.map((item) => {
                        return <div key={item.id}>
                            <>
                                <Productcard item={item} />
                            </>

                        </div>
                    }) : <div>
                        Producs out of stock
                    </div>
                    }
                </>
            }
        </div>
    )
}