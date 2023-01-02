const filterObj = (obj, ...allowedFields) => {
   // allowedFields = ['title', 'content']
   // obj = { title: 'New title', content: 'New content', email, comment }
   const newObj = {};

   Object.keys(obj).forEach((el) => {
      if (allowedFields.includes(el)) {
         newObj[el] = obj[el]; // newObj.title = obj.title
      }
   });

   return newObj;
};

export default filterObj;
