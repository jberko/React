module.exports = {
    "extends": "google",

    "rules" :
   {
        "linebreak-style": ["error", "windows"],
        "max-len": ["error", { "code": 100 }],
        "require-jsdoc": [2, {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": false,
                "ClassDeclaration": false
            }
            
        }]
   },
  
};