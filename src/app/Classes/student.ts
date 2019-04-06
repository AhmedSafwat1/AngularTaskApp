import { Subject } from './subject';
export class Student {
    constructor(public _id:string,public name:string,public mobile:string,public email:string,public subjects:Subject[]){}
}

