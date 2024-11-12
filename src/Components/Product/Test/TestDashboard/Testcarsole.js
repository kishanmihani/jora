import React ,{ useState,useContext, useEffect }from 'react'
// import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { ProductService } from './Testcarsoledata'
// import './sildercarosel.css'
import { GlobalContext } from '../../../../globalstore';
import axios from 'axios'
import { Tag } from 'primereact/tag';
 function Testcarsole() {
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
                    <img src={`${product.image_url }`} alt={product.id} className='rounded-4  comphoto w-100 h-100' />
                </div>  
            </div>
        );
    };

    return (
        <div className="mb-2 col-12">
            <Carousel value={products} numVisible={5} numScroll={5} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={3000} itemTemplate={productTemplate} />
        </div>
    )
}
export default React.memo(Testcarsole)