
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
    for (const [key, value] of Object.entries(schema)) {
        const objValue = obj[key];
        if (value !== typeof objValue || Array.isArray(objValue)) {
            return !!(value === 'array' && Array.isArray(objValue));
        }
    }

    return true;
};

module.exports =  {
    validator
};
