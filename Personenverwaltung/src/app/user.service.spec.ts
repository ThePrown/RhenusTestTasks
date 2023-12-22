import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { UserService } from './user.service';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

describe('UserService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let userService: UserService;
  //Mock Data
  const mockUsers: User[] = [
    {
      "id": 932,
      "firstName": "Myers",
      "lastName": "Dorsey",
      "email": "myersdorsey@gmail.com"
    },
    {
      "id": 914,
      "firstName": "Cleo",
      "lastName": "Hodge",
      "email": "cleohodge@gmail.com"
    }
  ]
  beforeEach(() => {
    //Spy client for HTTP requests
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete', 'patch']);
    //UserService with mocked HttpClient
    userService = new UserService(httpClientSpy);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should get all users', (done: DoneFn) => {
    //Get should return this

    httpClientSpy.get.and.returnValue(of(mockUsers));

    userService.getUsers().subscribe({
    //Asserts if get returns mock data
      next: (users) => {
        expect(users).withContext('expected users').toEqual(mockUsers);
        done();
      }
    });
    //Check if it only calls once
    expect(httpClientSpy.get.calls.count()).withContext('Call once').toBe(1);
  })

  it('should get user by ID', (done: DoneFn) => {
    const userToFind = mockUsers[1];

    httpClientSpy.get.and.returnValue(of(userToFind));
    userService.getUserByID(userToFind.id).subscribe({
      next: (user) => {
        expect(user).withContext('expected user').toEqual(userToFind);
        done();
      }
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  })

  it('should handle wrong ID', (done: DoneFn) => {
    const invalidID = 0;
    httpClientSpy.get.and.returnValue(of({}));
    userService.getUserByID(invalidID).subscribe({
      next: (user) => {
        expect(user).withContext('expect Nothing').toEqual(<User>{});
        done();
      }
    })
  })

  it('should delete a user by ID', (done: DoneFn) => {
    const userIdToDelete = mockUsers[1].id;
  
    httpClientSpy.delete.and.returnValue(of({}));
  
    userService.deleteUserByID(userIdToDelete).subscribe({
      next: () => {

        expect(httpClientSpy.delete.calls.count()).withContext('Call once').toBe(1);
  
        done();
      }
    });
  });

  it('should add a user', (done: DoneFn) => {
    const newUser = {
      "firstName": "Tom",
      "lastName": "Roberts",
      "email": "tomroberts@gmail.com"
    };

    const expectedUser = {
      "id": 1,
      "firstName": "Tom",
      "lastName": "Roberts",
      "email": "tomroberts@gmail.com"
    };

    httpClientSpy.post.and.returnValue(of(expectedUser));

    userService.addUser(newUser).subscribe ({
      next: (user) => {
        expect(user).toEqual(expectedUser);
        expect(httpClientSpy.post.calls.count()).withContext('Call once').toBe(1);
        done();
      }
    })
  });

  it('should edit a user', (done: DoneFn) => {
    const editedUser = {
      "id": 1,
      "firstName": "Tom",
      "lastName": "Robertson",
      "email": "tomrobertson@gmail.com"
    }

    httpClientSpy.patch.and.returnValue(of(editedUser));

    userService.editUser(editedUser).subscribe ({
      next: (user) => {
        expect(user).toEqual(editedUser);
        expect(httpClientSpy.patch.calls.count()).withContext('Call once').toBe(1);
        done();
      }
    })
  })
})