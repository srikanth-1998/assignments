import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  myPost: any
  test: Observable<any>
  name; username; email; percentage; length;
  data1: any[] = new Array()
  public data12: Object[]
  constructor(private service: ServiceService) {
    this.myPost = this.service.getData().subscribe(async (data) => {
      this.myPost = data; this.test = this.myPost
      var Latg = 0;
      var Latl = 0;
      var Long = 0;
      var Longl = 0;
      for (let i = 0; i < 10; i++) {
        if (this.test[i].address.geo.lat > 0) {
          Latg = Latg + 1
        }
        if (this.test[i].address.geo.lat < 0) {
          Latl = Latl + 1
        }
        if (this.test[i].address.geo.lng > 0) {
          Long = Long + 1
        }
        if (this.test[i].address.geo.lng > 0) {
          Longl = Longl + 1
        }
        if (i == 9) {
          var pieCh = {
            name: 'Latitude > 0',
            greatLat: Latg
          };

          var pieCh1 = {
            name: 'Latitude < 0',
            greatLat: Latl
          }

          var pieCh2 = {
            name: 'Longitude > 0',
            greatLat: Long
          }

          var pieCh3 = {
            name: 'Longitude < 0',
            greatLat: Longl
          }
          this.data1.push(pieCh);
          this.data1.push(pieCh1);
          this.data1.push(pieCh2);
          this.data1.push(pieCh3)
          console.log(this.data1);
          this.data12 = await this.data1
        }
      }
    })
  }

  ngOnInit(): void {
    this.service.getData().subscribe(data => {
      this.myPost = data
      this.percentage = (this.myPost.length / 100) * 100
      // console.log(this.myPost.length)
    })
    this.name = "Leanne Graham"
    this.username = "Bret"
    this.email = "Sincere@april.biz"

    console.log(this.percentage)
  }



  execute(data) {
    this.name = data.name;
    this.username = data.username
    this.email = data.email
  }

}
