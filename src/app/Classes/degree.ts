import { Subject } from './subject';
import { Student } from './student';
export class Degree {
    constructor(public _id:string,public student:Student,public subject:Subject,public degree:Number){}
}

