import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrialRouteService {
  private TRIAL_ROUTES = new Map();

  constructor() {
    this.TRIAL_ROUTES.set('task', 'https://www.taskade.com/new');
    this.TRIAL_ROUTES.set('mindmap', 'https://www.taskade.com/new/brainstorming?as=mindmap');
    this.TRIAL_ROUTES.set('chart', 'https://live.amcharts.com/new');
    this.TRIAL_ROUTES.set('note', 'https://quicknote.io/');
    this.TRIAL_ROUTES.set('videocall', 'https://gotalk.to/' + this.uuid());
    this.TRIAL_ROUTES.set('videocall/:chatRoomId', 'https://gotalk.to/');
    this.TRIAL_ROUTES.set('meeting', 'https://doodle.com/create');
    this.TRIAL_ROUTES.set('poll', 'https://fast-poll.com/new');
    this.TRIAL_ROUTES.set('banner', 'https://canva.new');
    this.TRIAL_ROUTES.set('board', 'https://board.new');
    this.TRIAL_ROUTES.set('html', 'https://codesandbox.io/s/');
    this.TRIAL_ROUTES.set('sheet', 'https://docs.google.com/spreadsheets');
    this.TRIAL_ROUTES.set('py', 'https://repl.it/repls/BountifulNeatPackagedsoftware#main.py');
  }

  get(path: string): string {
    return this.TRIAL_ROUTES.get(path);
  }

  has(path: string): boolean {
    return this.TRIAL_ROUTES.has(path);
  }

  uuid(): string {
    return Math.random().toString(36).substring(2);
  }
}
