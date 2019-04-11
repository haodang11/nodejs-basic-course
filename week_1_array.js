const students = [
  {
    name: "Nam",
    age: 24,
    gender: "male"
  },
  {
    name: "Mai",
    age: 22,
    gender: "female"
  },
  {
    name: "Trang",
    age: 23,
    gender: "female"
  },
  {
    name: "An",
    age: 20,
    gender: "male"
  },
  {
    name: "Thien",
    age: 27,
    gender: "male"
  }
];

let CoutMaleAndFemale = () => {
  let male = 0;
  let female = 0;
  let newArr = [];
  students.forEach(function(item, index) {
    newArr.push(item.name);
    if (item.gender == "male") male++;
    else female++;
  });
  console.log(`Male: ${male}, Female: ${female}`);
  console.log(newArr);
};

CoutMaleAndFemale();
