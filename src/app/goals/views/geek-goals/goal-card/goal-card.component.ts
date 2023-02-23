import { Component, Input, OnInit } from '@angular/core';
import { faClock, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { GoalStatus } from '../helpers/goal-type';
import { GoalsService } from '../services/goals.service';

@Component({
  selector: 'app-goal-card',
  templateUrl: './goal-card.component.html',
  styleUrls: ['./goal-card.component.scss']
})
export class GoalCardComponent implements OnInit {
  duration = faClock
  description = faPenAlt

  @Input()
  goalTitle!: string

  @Input()
  goalDescription!: string | null

  @Input()
  goalStatus!: GoalStatus

  @Input()
  goalDuration!: number

  @Input()
  goalId!: number

  constructor(private goalService: GoalsService) { }

  ngOnInit(): void { }

  archiveGoalFromBacklog() {
    this.goalService.archived.push(this.goalService.backlog[this.goalId])
    this.goalService.backlog = this.goalService.backlog.filter((v, i) => i != this.goalId)
  }

  archiveGoalFromPaused() {
    this.goalService.archived.push(this.goalService.paused[this.goalId])
    this.goalService.paused = this.goalService.paused.filter((v, i) => i != this.goalId)
  }

  resumeGoalFromPaused() {
    if (this.goalService.started.length === 0) {
      this.goalService.started.push(this.goalService.paused[this.goalId])
      this.goalService.paused = this.goalService.paused.filter((v, i) => i != this.goalId)
    }
    else {
      alert("Complete your current goal before resuming😉")
    }
  }

  startGoal(e: any) {
    console.log(e)
    if (this.goalService.started.length === 0) {
      this.goalService.started.push(this.goalService.backlog[this.goalId])
      this.goalService.backlog = this.goalService.backlog.filter((v, i) => i != this.goalId)
    }
    else {
      alert("You cannot start more than one goal at conce")
    }
  }

  pauseGoal() {
    this.goalService.paused.push(this.goalService.started[this.goalId])
    this.goalService.started = this.goalService.started.filter((v, i) => i != this.goalId)
  }
}
