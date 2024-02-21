function Student(name, gender, age) { //функция конструктор самого студента
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  
  let student1 = new Student("Василиса", "женский", 19)
  let student2 = new Student("Артем", "мужской", 25)
  
  Student.prototype.setSubject = function (subjectName) { //добавляет поле предмет к студенту
    this.subject = subjectName;
  }
  
  Student.prototype.addMarks = function (marks) {
    if(this.marks === undefined){
      this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
  }
  
  Student.prototype.addMarks = function (...marks) { //добавляет оценки к студенту
      if(this.marks === undefined){
        this.marks = marks;
      } else {
        this.marks = this.marks.concat(marks);
      }
    }
  
  Student.prototype.getAverage = function () { //среднее арифметическое оценок
    if(this.marks === undefined){
      return 'Нет оценок';
    } else {
      return this.marks.reduce((a, v) => a+v, 0) / this.marks.length;
    }
  }
  
  Student.prototype.exclude = function (reason) { //удаляет студента
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }