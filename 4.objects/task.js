function Student(name, gender, age) { //функция конструктор самого студента
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];

  }
  
  Student.prototype.setSubject = function (subjectName) { //добавляет поле предмет к студенту
    this.subject = subjectName;
  }
  
  Student.prototype.addMarks = function (...marks) { //добавляет оценки к студенту
      if (this.marks === undefined){
        return 
      } 

      this.marks.push(...marks);
    }
  
  Student.prototype.getAverage = function () { //среднее арифметическое оценок
    if (this.marks === undefined || !this.marks.length){
      return 0
    } 

    return this.marks.reduce((total, current) => total + current) / this.marks.length;
  }
  
  Student.prototype.exclude = function (reason) { //удаляет студента
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }