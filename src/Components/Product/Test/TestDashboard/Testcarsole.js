import React ,{ useState,useContext, useEffect }from 'react'
// import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { ProductService } from './Testcarsoledata'
// import './sildercarosel.css'
import { GlobalContext } from '../../../../globalstore';
import axios from 'axios'
import { Tag } from 'primereact/tag';
 function Testcarsole({artical}) {
    const { state, updateGlobalState } = useContext(GlobalContext);
    const { globalValue, user } = state;
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        
    ];

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    useEffect(() => {
        axios
      .get('https://untitled-twkmuar27a-uc.a.run.app/api', {
        headers: { "Authorization": `Token ${user.token}` }
      })
      .then((response) => {
        console.log(response.data );
        ProductService.getProductsSmall().then((data) => setProducts(response.data.slice(0, 9)));
      })
      .catch((error) => {
        console.log(error);
      });
        
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="me-4 mt-2">
                <div className="w-100 d-flex ">
                    <img src={`${product.image_url }`} alt={product.id} className='rounded-4  comphoto w-100 h-100' loading="lazy"/>
                </div>  
            </div>
        );
    };

    return (
        <div className="mb-2 col-12 d-flex flex-wrap">
            {products.map(product =>{
                if(product.prompt===artical){
                    return (<div className="mt-2 pe-2 h-100 col-6 col-sm-6 col-md-4 col-lg-3">
                        <div className="w-100 d-flex ">
                            <img src={`${product.image_url }`} alt={product.id} className='rounded-4  comphoto w-100  h-100' loading="lazy" />
                        </div>  
                    </div>)
                }
                
            })}
            {/* <Carousel value={productitemTemplate={productTemplate} /> */}
        </div>
    )
}
export default React.memo(Testcarsole)