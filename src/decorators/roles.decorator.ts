// src/decorators/roles.decorator.ts
import { SetMetadata } from '@nestjs/common';
import { UserRoles } from '../constants/user-role.enum';

export const Roles = (...roles: UserRoles[]) => SetMetadata('roles', roles);
