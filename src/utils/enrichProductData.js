export const enrichDataWithProductProperties = (products, cb) => {
  const enrichedDataSet = products.map( product => Object.defineProperties(product, 
    {
      selected:{
        value:null, 
        writable:true
      },
      collapsed:{
        value:null, 
        writable:true
      }
    }
  ));
  return cb(enrichedDataSet);
}