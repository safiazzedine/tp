import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { 
    languageOptions: { 
      globals: globals.browser 
    } 
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "semi": ["error", "always"], // Exiger des points-virgules
      "quotes": ["error", "double"], // Exiger des guillemets doubles
      "no-unused-vars": "warn" // Exemple de règle supplémentaire : avertir sur les variables non utilisées
    }
  }
];
