import {Injectable} from "@angular/core";
import {ACTIVITIES} from "./mock-activities";

@Injectable()
export class ActivityService {
  private activities: any;

  constructor() {
    this.activities = ACTIVITIES;
  }

  getAll() {
    return this.activities;
  }

  getItem(id) {
    for (var i = 0; i < this.activities.length; i++) {
      if (this.activities[i].id === parseInt(id)) {
        return this.activities[i];
      }
    }
    return null;
  }

  remove(item) {
    this.activities.splice(this.activities.indexOf(item), 1);
  }
}
