import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class FooterService {

   
  
  constructor(private http: HttpClient) { }

  sendDataClient(data:any)  {
    return this.http.post<any>(`http://localhost:3001/api/contacts`, data)

  }

}
