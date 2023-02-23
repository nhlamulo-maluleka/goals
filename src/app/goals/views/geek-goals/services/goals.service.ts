import { Injectable } from '@angular/core';
import { IGoal } from '../helpers/goal-type';


@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  backlog: Array<IGoal> = [
    {
      title: "Begin OOP Classes",
      description: "I want to be able to work with classes hereafter",
      duration: 2,
      status: "backlog",
      subgoals: null
    },
    {
      title: "Prepare for presentation",
      description: "Must ensure that everything I need is ready",
      duration: 30,
      status: "backlog",
      subgoals: null
    },
  ]

  started: Array<IGoal> = [
    {
      title: "Do my OOP IKM",
      description: "Assessment",
      duration: 120,
      status: "started",
      subgoals: null
    },
  ]

  paused: Array<IGoal> = [
    {
      title: "Learning Stacks Data Structures",
      description: "I need to first understand how linked lists work",
      duration: 40,
      status: "paused",
      subgoals: null
    },
  ]

  archived: Array<IGoal> = [
    {
      title: "Study Salesforce APIs",
      description: "Learn how to make requests to external API using salesforce",
      duration: 50,
      status: "archived",
      subgoals: null
    },
  ]

  completed: Array<IGoal> = [
    {
      title: "Arrive at work on time",
      description: "Hopefully there is no traffic",
      duration: 60,
      status: "completed",
      subgoals: null
    },
  ]

  constructor() { }
}
