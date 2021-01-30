import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrialRouteService {
  private TRIAL_ROUTES = new Map();

  constructor() {
    this.TRIAL_ROUTES.set('sheet', 'https://docs.google.com/spreadsheets/u/3/create');
    this.TRIAL_ROUTES.set('board', 'https://board.new');
    this.TRIAL_ROUTES.set('poll', 'https://fast-poll.com/new');
    this.TRIAL_ROUTES.set('videocall', 'https://gotalk.to/' + this.uuid());
    this.TRIAL_ROUTES.set('videocall/:chatRoomId', 'https://gotalk.to/');
    this.TRIAL_ROUTES.set('zoom', 'https://zoom.us/meeting/schedule');
    this.TRIAL_ROUTES.set('event', 'https://calendar.google.com/calendar/u/0/r/eventedit');
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
