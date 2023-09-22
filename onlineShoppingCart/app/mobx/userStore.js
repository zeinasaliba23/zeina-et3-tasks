import { makeAutoObservable } from 'mobx';

// Create a UserStore class
class UserStore {
  // Initialize the user object to store user information
  user = {
    id: 1,
    username: 'Demario80',
    email: 'Alphonso5@example.net',
    userID: '12345',
    userDescription: 'This is a sample user.',
    userImage: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/983.jpg', // You can store the image path or URL
    age: 30,
    country: 'USA',
    location: 'New York',
  };

  // Constructor for the UserStore class
  constructor() {
    // Automatically make the class observable with MobX
    makeAutoObservable(this);
  }
}


const userStore = new UserStore();

export default userStore;