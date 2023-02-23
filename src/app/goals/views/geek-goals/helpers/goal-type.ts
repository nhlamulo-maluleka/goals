type GoalStatus = "backlog" | "started" | "paused" | "archived" | "completed"

type IGoal = {
  title: string,
  description: string | null,
  duration: number,
  status: GoalStatus,
  subgoals: Array<IGoal> | null
}

export { IGoal, GoalStatus }
