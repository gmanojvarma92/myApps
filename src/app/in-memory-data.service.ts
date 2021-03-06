import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Navin' },
      { id: 12, name: 'Prasaana' },
      { id: 13, name: 'Sravan' },
      { id: 14, name: 'Harish' },
      { id: 15, name: 'Avinash' },
      { id: 16, name: 'Sampath' },
      { id: 17, name: 'Manoj' },
      { id: 18, name: 'Sriram' },
      { id: 19, name: 'Upender' },
      { id: 20, name: 'Deepthi' }
    ];
    return {heroes};
  }
}