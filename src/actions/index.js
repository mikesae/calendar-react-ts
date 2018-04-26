import Immutable from 'immutable'
import { actions } from 'redux-clerk';

const EventsActions = actions({
  actionPrefix: 'EVENTS',
  uidField: 'id'
});

EventsActions.complete = (id) => {
  return EventsActions.update(Immutable.fromJS({ id, completed: true }))
};

export default EventsActions
