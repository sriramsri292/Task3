var json1 = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };
  
  var json2 = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };
  
  var jsonString1 = JSON.stringify(json1);
  var jsonString2 = JSON.stringify(json2);
  
  if (jsonString1 === jsonString2) {
    console.log("The JSON objects have the same properties in the same order.");
  } else {
    console.log("The JSON objects do not have the same properties in the same order.");
  }
  