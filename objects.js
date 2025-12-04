//  var a=[1,2,3,4,5]
// // a.unshift("Mahesh babu","mahesh babu","karthik","size zero")
// a.splice(4,0,"Mahesh babu","okkadu","pokiri","sainukud","aathdu")
// console.log(a)
// // create access update deletemethods
// var person={name:"Revathi",age:22, actor:"Mahesh",pro:"Developer",place:"hyb",friends:{
//     college_friends:{name:"Raju",age:22,marks:67},class_B:['a','b','c','d']}}
// console.log(person.friends.college_friends.class_B[2])
// console.log(person.friends.college_friends.name)
// console.log(person["friends"]["college_friends"]["marks"])
// // dotnotation
// console.log(person.name)
// // bracketnotation
// console.log(person["age"])

// var a={name:"user1",age:22,marks:78,sub:["phy","maths","science","chemistry"]
// }
// // a.name="Revathi"
// // a.age+=1
// // a.marks+=2
// console.log(a)
// a.sub[0]="js"
// a["sub"][3]="react"
// a["marks"]=a["marks"]+2
// console.log(a)
// delete a.age
// console.log(a)
// delete a.marks
// console.log(a)

// for(let key in a){
//     console.log(key)
// }

let person={name:"Revathi", age:22,marks:73,subjects:["maths","physics","chemistry"]}
keys=[]
values=[]
for (let key in person){
    keys.push(key)
}
for (let key in person){
    values.push(a[key])
console.log(values)
console.log(keys)

}

