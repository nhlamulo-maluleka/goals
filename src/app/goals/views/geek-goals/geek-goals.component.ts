import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { IGoal } from './helpers/goal-type';
import { GoalsService } from './services/goals.service';

@Component({
  selector: 'app-geek-goals',
  templateUrl: './geek-goals.component.html',
  styleUrls: ['./geek-goals.component.scss']
})
export class GeekGoalsComponent implements OnInit {
  @ViewChildren('goalStarted')
  goalStarted!: Array<ElementRef>

  constructor(private goalService: GoalsService) { }

  ngOnInit(): void {}

  get backlogGoals(): Array<IGoal> {
    return this.goalService.backlog;
  }

  get startedGoals(): Array<IGoal> {
    return this.goalService.started;
  }

  get pausedGoals(): Array<IGoal> {
    return this.goalService.paused;
  }

  get completedGoals(): Array<IGoal> {
    return this.goalService.completed;
  }

  get archivedGoals(): Array<IGoal> {
    return this.goalService.archived;
  }
}
