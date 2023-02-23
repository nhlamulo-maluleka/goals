import { Component, OnInit } from '@angular/core';
import { interval, Observable } from "rxjs"

@Component({
  selector: 'app-geek-goals',
  templateUrl: './geek-goals.component.html',
  styleUrls: ['./geek-goals.component.scss']
})
export class GeekGoalsComponent implements OnInit {
  value!: number

  ngOnInit(): void {
    // const timer$: Observable<number> = interval(1000)

    // timer$.subscribe((count: number) => {
    //   this.value = count;
    // })
  }

}
