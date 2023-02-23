import { Component, Input, OnInit } from '@angular/core';
import { GoalStatus } from '../helpers/goal-type';

@Component({
  selector: 'app-goal-card',
  templateUrl: './goal-card.component.html',
  styleUrls: ['./goal-card.component.scss']
})
export class GoalCardComponent implements OnInit{
  @Input()
  goalTitle!: string

  @Input()
  goalDescription!: string | null

  @Input()
  goalStatus!: GoalStatus

  currentStatus!: string

  ngOnInit(): void {
    // this.currentStatus = this.goalStatus == "backlog"
  }
}
