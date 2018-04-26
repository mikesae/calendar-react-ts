import { selectors } from 'redux-clerk';

const EventSelectors = selectors({
  baseSelector: state => state.events
});

export default EventSelectors;
