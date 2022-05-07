const validator = (schema, obj) => {
    for (const [key, value] of Object.entries(schema)) {
        const objValue = obj[key];
        if (value !== typeof objValue || Array.isArray(objValue)) {
            return (value === 'array' && Array.isArray(objValue));
        }
    }

    return true;
};

module.exports =  {
    validator
};
