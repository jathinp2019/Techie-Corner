//price_1Mx5hLSAYLrAqiBDB39r8F1G = College Fee ID
//price_1Mx5iXSAYLrAqiBD7brI9IRs = Bus Fee ID
//price_1Mx5jkSAYLrAqiBDiJul5WDO = Mess Fee ID

const ProductArray = [
    {
        id: "price_1Mx5hLSAYLrAqiBDB39r8F1G",
        title : "College Fee",
        price: 400000
    },
    {
        id: "price_1Mx5iXSAYLrAqiBD7brI9IRs",
        title : "Bus Fee",
        price: 40000
    },
    {
        id: "price_1Mx5jkSAYLrAqiBDiJul5WDO",
        title : "Mess Fee",
        price: 20000
    }
]

function getProductData(id){
    let productData = ProductArray.find(product => product.id === id);
    if(productData == undefined){
        console.log("Product data not found for ID " + id);
        return undefined;
    }
    return productData;
}
export {ProductArray,getProductData};