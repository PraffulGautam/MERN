const axios = require('axios'); 

const chunkArray = (array) => {
     const chunkSize = 4;
        let arr=[], status=false;
        return new Promise((res, rej) => {
            for (let i = 0; i < array.length; i += chunkSize) {
                const chunk = array.slice(i, i + chunkSize);
               arr = [...arr, chunk];
               status=true;
           }
           if(status){
            res(arr);
           }else{
            rej([]);
           }

        })
}

const getProduct = async (req, res) => {
    try {
        const data = await axios.get("https://dummyjson.com/products",{});
        // console.log(data);
        let d = await chunkArray(data.data.products);
     
        
        return res.json({result: d}); 
    } catch (error) {
        console.log(error)
        return res.status(500).json(error);
    }
}

module.exports  = {getProduct}