import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GetRestarauntsService } from '../../services/get-restaraunts.service';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  form: FormGroup;
  results: Object;
  item: Object; 
  // grabbing these objects

  constructor(private fb: FormBuilder, private service: GetRestarauntsService) { }

  ngOnInit() {this.form = this.fb.group({
    price: new FormControl(),
    zip: new FormControl()
  })
}

async onSubmit() {
  await this.service.getRest(
    event,
    this.form.value.zip,
    this.form.value.price
    ).subscribe(
      data => {
        console.log(data)
        this.results = data.businesses[Math.floor(Math.random() * 10)]
        //tom trick learned in intro to coding https://repl.it/@TheRealMVC/AustereLimitedSyntax
       
        
      }
    )
}


}

  


