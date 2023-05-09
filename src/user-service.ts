import { Request, Response } from 'express';
import { StringDto } from './models/string-dto';
import { ContactDto } from './models/contact-dto';

const userService = {
  preAuth(cookies: Request['cookies'], res: Response) {

  },

  saveAction(message: StringDto, cookies: Request['cookies']): boolean {
  
    return false;
  },

  saveContact(contactDto: ContactDto, cookies: Request['cookies']): boolean {
   
    return false;
  },
};

export default userService;