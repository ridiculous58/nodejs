// How install package
//npm install <packagename>
//npm i <packagename> 
//npm i <packagename>@1.9.1 

//package.json içersindeki paketleri yukleme npm install


//yuklediğimiz underscore u kullanalım

var _ = require('underscore')

var numbers = [10,5,100,2,1000]

console.log(_.min(numbers));
