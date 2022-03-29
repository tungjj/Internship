# Basic Javascript

- Variable
  - `const`: constant variable, can not change after declare
  - `var`: be used after being declared
  - `let`: just used in the scope that it's been declared
- Scope (block code: inside of `{}` )

  - **global**: are declared outside of a block
  - **local**: are declared inside of a block

- Loop
  - `for`
  - `while`
  - `do/while`
  - `for each`: forEach( method ), loop over each elements in array.
  - `for in`: loop over **properties** of array(index) or object(keys)
  - `for of`: loop over **values** of element
- Function
  | | Function | Arrow function |
  | :-: | :-: |:-:|
  |Synctax |function name(){}| ()=>{} |
  | 'this' keyword| almost situation | suitable for map(), reduce(),...|
  | bind()| have | no have |
  |method in object| ok | not ok|
- Comparison and Logical Operators
- Condition(als): if, if/else, else/if, switch/case
- Statements: semicolons, white space, line length, line breaks, keywords
- Expressions (biểu thức)
- Operators: (phép tính)
- Block code: `{}`

# Basic ES6/ES7
+ Strict mode: 
  - slient error change to be throw error
  - may be faster than *normal mode*
  - double quotes: " " (not ' ')
  - future proof: can not use some keywords in future.
+ Default Parameters: if no value of parameter for function, it's default value is undefined. Default parameter can help this situation.
  `function multiply(a, b = 1)`

+ Destructuring: use *nameOfVariable* corresponding with *nameOfProperty in object*
  - Assisgnment with array: 
  <br/> `const [a, b] = [1, 2]` `//a=1, b=2`
  - `const [a, b, ...c] = [1, 2, 3, 4, 5` // c=[3,4,5]
  - `{a, b, ...c} = {a: 1, b: 2, c: () => 3, d: 4}// 1, 2` 
  <br/> `{c: f, d:4} with f = () => 3`
  - Assignment to new variables:
  ``
+ spread operator
+ Template Literals Multi-line String: using ``. Having break line with enter.
+ Arrow Functions: 
+ Scope, let, var, const...
+ Classs
