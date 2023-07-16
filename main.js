//ToDoList
let toDos = [
    {
        task: 'Ödev yap',
        isComplete: false
    },
    {
        task: 'Spor Yap',
        isComplete: false
    },
    {
        task: 'Dışarı Çık',
        isComplete: false
    },
    {
        task: 'Dışarı Çık',
        isComplete: true
    }
    
];
//ToDoList Ekleme Baslangic
function addToDoList(task,isComplete) {
    toDos.push({
        task: task,
        isComplete: isComplete
    });
}
addToDoList('Uyu',false);

//ToDoList Silme Baslangic
//Kullanıcının istediği veriyi silmesi
function removeTask(task, isComplete) {
    for (let i = 0; i < toDos.length; i++) {
        if (toDos[i] === task && isComplete === false || isComplete === true) {
          toDos.splice(i, 1);
            }
        }
    }
//ToDoList Sondan Silme
function toDoDeleteLastItem() {
    toDos.pop();
}
//ToDoList Baştan Silme
function toDoDeleteFirstItem() {
    toDos.shift();
}
//Tamamlanan ve Tamamlanmayanları Gösterme

//Tamamlanmayan
function getIncompleteTodos(toDos) {
    const incompleteTodos = toDos.filter(todo => todo.isComplete === false);
    return incompleteTodos;
  }
const incompleteTodos = getIncompleteTodos(toDos);
console.log(incompleteTodos);

//Tamamlanan
function getCompletedTodos(toDos) {
    const CompletedTodos = toDos.filter(todo => todo.isComplete === true);
    return CompletedTodos;
  }
const CompletedTodos = getCompletedTodos(toDos);
console.log(CompletedTodos);

//Öğrenci

let students = [
    {
        id: randomID() + ' - ' + nowDate(),
        firstName:'Burak',
        lastName:'Kapacak',
        lessons: {
            firstLesson: 'Math',
            secondLesson: 'Geography',
            thirdLesson: 'Physics'
        }
        
    },
    {
        id: randomID() + ' - ' + nowDate(),
        firstName:'Emre',
        lastName:'Başaran',
        lessons: {
            firstLesson: 'Math',
            secondLesson: 'Geography',
            thirdLesson: 'Physics'
        }
        
    },
    {
        id: randomID() + ' - ' + nowDate(),
        firstName:'Murat',
        lastName:'Köz',
        lessons: {
            firstLesson: 'Math',
            secondLesson: 'Geography',
            thirdLesson: 'Physics'
        }
        
    }
]
let parents = [
    {
        id: randomID(),
        firstName:'Mustafa',
        lastName:'Kapacak',        
    },
    {
        id: randomID(),
        firstName:'Kerim',
        lastName:'Başaran',        
    },
    {
        id: randomID(),
        firstName:'Ersel',
        lastName:'Köz',        
    }
]
//Random ID atama
function randomID() {
   return Math.floor(Math.random() * 100) + 1;   
}
//Tarih atama
function nowDate() {
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
return dateTime;
}
//ÖĞRENCİ DÜZENLEME

//Öğrencinin index'ini bulma
console.log('Öğrenci düzenleme başlangıç. Düzenlemek ve silmek istediğiniz öğrencinin indexine aşağıdan bakınız.');
console.log('Düzenleyebileceğiniz bilgiler: İsim(firstName), Soyisim(lastName), Dersler(lessons)')
console.log(studentIndex());


function studentIndex() {
    let index = 0;    
    for (const student of students) {
        console.log(` ${index} index numarasındaki öğrenci: ${student.firstName} ${student.lastName}`);
        index++;
      }
}
//Öğrenci Düzenleme
function newStudentInfo(studentIndex, property, newInfo) {
    const student = students[studentIndex];    
    student[property] = newInfo;    
    return student;
}
//Öğrenci Silme
function deleteStudent(studentIndex) {
    students.splice(studentIndex,1);
}
//Öğrenci Ekleme
function addStudent(firstName, lastName, lessons) {
    students.push({
        id: randomID() + ' - ' + nowDate(),
        firstName: firstName,
        lastName: lastName,
        lessons: {
            firstLesson: lessons.firstLesson,
            secondLesson: lessons.secondLesson,
            thirdLesson: lessons.thirdLesson
        },
    });
};
//Öğrenci Arama
function findStudent(firstName) {
    for (student of students) {
        if(firstName===student) {
            console.log(firstName);
        }        
    }
};