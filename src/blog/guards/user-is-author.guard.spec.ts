import { UserIsAuthorGuard } from './user-is-author.guard';

describe('UserIsAuthorGuard', () => {
  it('should be defined', () => {
    expect(new UserIsAuthorGuard()).toBeDefined();
  });
});
