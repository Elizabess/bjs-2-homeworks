function Student(name, gender, age) { //функция конструктор самого студента
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];

  }
  
  //let student1 = new Student("Василиса", "женский", 19)
  //let student2 = new Student("Артем", "мужской", 25)
  
  Student.prototype.setSubject = function (subjectName) { //добавляет поле предмет к студенту
    if (this.subject === undefined) {
      return undefined
    }
    this.subject = subjectName;
  }
  
/* Student.prototype.addMarks = function (marks) {
    if(this.marks.length == 0){
      this.marks = [marks];
    } else {
      this.marks.push(marks);
    }
  }*/ //не нужна, т.к. является частным случаем второй функции
  
  Student.prototype.addMarks = function (...marks) { //добавляет оценки к студенту
      if (this.marks === undefined){
        return undefined
      } 

      this.marks = this.marks.concat(marks);
    }
  
  Student.prototype.getAverage = function () { //среднее арифметическое оценок
    if (this.marks === undefined){
      return undefined
    } 

    return !this.marks.length ? 0 :
      this.marks.reduce((total, current) => total + current) / this.marks.length;
  }
  
  Student.prototype.exclude = function (reason) { //удаляет студента
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }

  /*let student1 = new Student("Василиса", "женский", 19);
  student1.setSubject("Algebra");
  console.log(student1.getAverage()); // 0
  student1.addMarks(4, 5, 4, 5);
  console.log(student1.getAverage()); // 4.5
  console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
  let student2 = new Student("Артём", "мужской", 25);
  student2.setSubject("Geometry");
  student2.exclude('плохая учёба')
  console.log(student2)
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}*/
