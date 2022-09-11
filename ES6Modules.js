import { headerMessage, setMessage } from "./default-function-parameters.js";

//All functions, variables, etc., will become properties of the single object cal
import * as cal from "./cal.js";

setMessage("Hello, world!"); //Changes the headerMessage inside module that has been imported; We can't change it from this current module, it's like a const variable.

const h1 = document.createElement("h1");
h1.textContent = headerMessage;
document.body.appendChild(h1);

//We can't change the value of imported variable:
//headerMessage = "New message";

//Properties of imported cal module 
cal.multiply(5, 5);
cal.sum(5, 5);
