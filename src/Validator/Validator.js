
//  window.addEventListener("DOMContentLoaded", function() {
//     const button = document.getElementById('btn-validator');
//
//     button.addEventListener('click', () => {
//         const schema = document.getElementById('schema-input').value;
//         const object = document.getElementById('object-input').value;
//         console.log(schema, object);
//     });
// });

const validator = (schema, obj) => {
    let message = 'Valid';
    for (const [key, value] of Object.entries(schema)) {
        const objValue = obj[key];

        if (value !== typeof objValue || Array.isArray(objValue)) {
             if (value === 'array' && Array.isArray(objValue)) {
                 return message = 'Valid';
             }

         return message = `Type van object key: ${objValue}, match niet met de gedefinieerde schema value: ${value}!`;
        }
    }

    return message;
};

module.exports =  {
    validator
};
