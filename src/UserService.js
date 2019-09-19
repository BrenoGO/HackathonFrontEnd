import ApiService from './ApiService';


export const UserService = {
  index: () => ApiService.get('user'),
  store: data => ApiService.post('user', data)
};
