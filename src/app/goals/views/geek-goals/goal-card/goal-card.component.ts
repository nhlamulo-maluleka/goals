import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faClock, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { interval, Subscription } from 'rxjs';
import { GoalStatus } from '../helpers/goal-type';
import { GoalsService } from '../services/goals.service';

@Component({
  selector: 'app-goal-card',
  templateUrl: './goal-card.component.html',
  styleUrls: ['./goal-card.component.scss']
})
export class GoalCardComponent implements OnInit, AfterViewInit {
  duration = faClock
  description = faPenAlt
  interval$!: Subscription
  progressBarElement!: ElementRef

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

  @ViewChild("progressBar", { static: false })
  progressBarObject!: ElementRef

  constructor(private goalService: GoalsService) { }

  ngAfterViewInit(): void {
    if (this.goalStatus == "started") {
      this.interval$ = interval(1000).subscribe(v => {
        this.progressBarObject.nativeElement.style.width = `${v}%`

        if(v == 100){
          this.interval$.unsubscribe()
          console.log("Done")
        }
      })
    }
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes["goalStatus"] && changes["goalStatus"]?.currentValue == 'started') {
  //     // if(this.progressBarElement){
  //     //   console.log("hi")
  //     //   this.progressBarElement.nativeElement.style.width = '50%'
  //     // }
  //   }
  // }

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
