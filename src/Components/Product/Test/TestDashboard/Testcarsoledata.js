export const ProductService = {
    getProductsData() {
      
      return [
        {
          id: '1000',
          image: 'img-1.png',
        },
        {
          id: '1001',
          image: 'img-2.png',
        },
        {
          id: '1002',
          image: 'img-3.png',
        },
        {
          id: '1003',
          image: 'img-4.png',
        },
        {
          id: '1004',
          image: 'img-1.png',
        },
        {
          id: '1005',
          image: 'img-4.png',
        },
        {
          id: '1006',
          image: 'img-3.png',
        },
        {
          id: '1007',
          image: 'img-2.png',
        },
        {
          id: '1008',
          image: 'img-1.png',
        },
      ];
    },
    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
      }
}
