describe('property_actions', () => {
  beforeEach(() => {
    store.clearActions();
  })
})

describe('propertyNote', () => {
  test('Dispatches the correct action and payload', () => {
    store.dispatch(propertyActions.propertyNote('fish'));
    expect(store.getActions()).toMatchSnapshot();
  });
});

describe('propertyId', () => {
  test('Dispatches teh correct action and payload', () => {
    store.dispatch(propertyActions.propertyId());
    expect(store.getActions()).toMatchSnapshot();
  })
})

