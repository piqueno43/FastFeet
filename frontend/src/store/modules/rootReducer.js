import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import delivery from './delivery/reducers';
import deliveryman from './deliveryman/reducers';
import recipient from './recipient/reducers';
import problem from './problem/reducers';

export default combineReducers({
  auth,
  user,
  delivery,
  deliveryman,
  recipient,
  problem,
});
