export const enrichDataWithProductProperties = (products, cb) => {
  const enrichedDataSet = products.map( product => Object.defineProperties(product, 
    {
      selected:{
        value:null, 
        writable:true,
        enumerable : true 
      },
      collapsed:{
        value:null, 
        writable:true,
        enumerable: true
      }
    }
  ));
  return cb(enrichedDataSet);
}