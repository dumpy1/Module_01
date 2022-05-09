console.log('filter');

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов']

const filter = (source, ref) => {
    const output = source.slice();
    for (const key in output) {
        for (const item of ref) {
            if (output[key] === item) {
                output.splice(key, 1);
            }
        }
    }
    return output;
}

const result = filter(allStudents, failedStudents);
console.log('result: ', result);