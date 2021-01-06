export class TrialRoute {
  private static TRIAL_ROUTES = new Map();

  constructor() {
    TrialRoute.TRIAL_ROUTES.set('task', 'https://www.taskade.com/new');
    TrialRoute.TRIAL_ROUTES.set('mindmap', 'https://www.taskade.com/new/brainstorming?as=mindmap');
    TrialRoute.TRIAL_ROUTES.set('chart', 'https://live.amcharts.com/new');
    TrialRoute.TRIAL_ROUTES.set('note', 'https://quicknote.io/');
    TrialRoute.TRIAL_ROUTES.set('videocall', 'https://gotalk.to/' + this.uuid());
    TrialRoute.TRIAL_ROUTES.set('videocall/:chatRoomId', 'https://gotalk.to/');
    TrialRoute.TRIAL_ROUTES.set('meeting', 'https://doodle.com/create');
    TrialRoute.TRIAL_ROUTES.set('poll', 'https://fast-poll.com/new');
    TrialRoute.TRIAL_ROUTES.set('banner', 'https://canva.new');
    TrialRoute.TRIAL_ROUTES.set('board', 'https://board.new');
    TrialRoute.TRIAL_ROUTES.set('html', 'https://codesandbox.io/s/');
    TrialRoute.TRIAL_ROUTES.set('sheet', 'https://docs.google.com/spreadsheets');
    TrialRoute.TRIAL_ROUTES.set('py', 'https://repl.it/repls/BountifulNeatPackagedsoftware#main.py');
  }

  static get(path: string): string {
    return TrialRoute.TRIAL_ROUTES.get(path);
  }

  static has(path: string): boolean {
    return TrialRoute.TRIAL_ROUTES.has(path);
  }

  uuid(): string {
    return Math.random().toString(36).substring(2);
  }
}
