interface IUserFromDb {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

const userFromDb = {
  id: 2,
  username: 'User',
  role: 'user',
  email: 'user@user.com',
  password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
};

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY2OTIzODcyOX0.q45X3kd6g8nmG5MyuHnJMCtsGL3gqHGnyJppJPR_8YU'

export { IUserFromDb, userFromDb, token }
