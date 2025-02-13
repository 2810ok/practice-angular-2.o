import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService {

  constructor() { }
  getEmpdata()
  {
    return [{"id":1,"name":"roy"},
    {"id":2,"name":"happy"}
    ];
  }
}
