import uuid from 'react-uuid';

export class Utils {
    static newExercise() {
        return {name: '', reps: '', weight: 0, id: uuid()}
    }

    static newGroup() {
        return {
            name: '',
            exercises: [Utils.newExercise()],
            id: uuid()
        };
    }
}