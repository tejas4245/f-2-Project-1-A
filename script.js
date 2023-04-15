/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.map(function(el){
      if(el.profession ==="developer"){
        console.log(el);
      }
    })
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach(function(el){
      if(el.profession ==="developer"){
        console.log(el);
      }
    })
  }
  
  function addData() {
   
    let add = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(add);
    console.log(arr);
  }
  
  function removeAdmin() {
    updatedArr = arr.filter(function(el){
      return el.profession !== "admin" 
    });
    console.log(updatedArr);
  
  }
  
  function concatenateArray() {
    let new_arr = [
      { id: 4, name: "akash", age: "23", profession: "teacher" },
      { id: 5, name: "shivam", age: "24", profession: "doctor" },
      { id: 6, name: "vishal", age: "25", profession: "police" },
    ];
    let newA = arr.concat(new_arr);
     console.log(newA);
  }