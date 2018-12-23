import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRestarauntsService {


  constructor(private http: HttpClient) {
   }

  getRest (e, location, price):Observable<any> {
    e.preventDefault()
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&price=${price}&open_now=true`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer fTAvjxljYV8tRStr8AlvbUKGFQT-ixXTgKm52m0TcFGLlMFG7mj0uC5Nn1hO0RCDaz2_8uKYvhtrYqbvnpnKlMcQQOtAXuR3hhUfADj1ojjgazB_O0LzISq-0rcbXHYx'
      }),
    })
      .pipe()
  }
}


//http://restlet.com/company/blog/2016/09/27/how-to-fix-cors-problems/


  //https://robwu.nl/cors-anywhere.html
  // https://github.com/Rob--W/cors-anywhere/
  //https://github.com/Rob--W/cors-anywhere/#documentation