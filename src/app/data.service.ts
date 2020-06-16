import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient,) { }
  getStudent(): Observable<any>{
    return this.http.get(`${environment.apiUrl}`).pipe(
      catchError(err =>{
        alert(err.error.message)
        return throwError(err);
      })
    )
  }

  getStudentById(studentId):Observable<any>{
    return this.http.get(`${environment.apiUrl}/student/${studentId}`)
  }

  updateStudentById(studentId,data){
    return this.http.put(`${environment.apiUrl}/student/${studentId}`,data);
  }

  createStudent(studentDetail):Observable<any>{
    return this.http.post(`${environment.apiUrl}/student`,studentDetail)
  }

  getMentor(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/mentorList`).pipe(
      catchError(err =>{
        alert(err.error.message)
        return throwError(err);
      })
    )
  }
  createMentor(mentorDetail):Observable<any>{
    return this.http.post(`${environment.apiUrl}/mentor`,mentorDetail)
  }

  updateMentor(data):Observable<any>{
    return this.http.post(`${environment.apiUrl}/mentorUpdate`,data)
  }

  
}


