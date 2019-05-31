export class CounterService {

  private activeCount = 0;
  private inactiveCount = 0;

  addActive() {
    this.activeCount++;
    console.log('Total Inactive -> Active: ' + this.activeCount);
  }

  addInactive() {
    this.inactiveCount++;
    console.log('Total Active -> Inactive: ' + this.inactiveCount);
  }

}
