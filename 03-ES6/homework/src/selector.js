let traverseDomAndCollectElements = function(matchFunction, startEl) {
  let resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunction(startEl)) resultSet.push(startEl)
  for (const child of startEl.children) {
    const result = traverseDomAndCollectElements(matchFunction, child);
    resultSet = [...resultSet, ...result];
  }


  return resultSet;

};
function sumar (num1,num2) {
  return num1+num2
}

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag
 // resolver primero 

let selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === "#") return "id";

  if(selector[0] === ".") return "class";

  if(selector.includes(".")) return "tag.class";

  return "tag";
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

let matchFunctionMaker = function(selector) {
  let selectorType = selectorTypeMatcher(selector);
  let matchFunction;


  if (selectorType === "id") { 
   matchFunction =(element) =>{
     if(`#${element.id}` === selector) return true;
     return false;
   };

  } else if (selectorType === "class") {
    matchFunction =(element) =>{
      for( const className of element.classList) {
        if(`.${className}` === selector) return true;
      }
      return false;
    };
    
  } else if (selectorType === "tag.class") {
matchFunction = (element) =>{
  const [tag, className] = selector.split(".");
     return matchFunctionMaker(tag)(element) && matchFunctionMaker(`.${className}`)(element);
};
    
  } else if (selectorType === "tag") {
matchFunction = (element) =>{
  if(element.tagName.toLowerCase()=== selector) return true;
  return false;
};

    
  };
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
