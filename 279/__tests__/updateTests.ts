
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Update from '../src/actions/update';
import * as nock from 'nock';
import 'isomorphic-fetch';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
///////MOCKING VALUES///////
const rates = {
    USD: 1,
    MXN: 17.50
};
const date = Date.now();

afterEach(() => {
    nock.cleanAll();
});

test("Update gets action executed", () => {
    nock('http://localhost:3000')
        .get('/update')
        .reply(200, { rates, timestamp: date });
    const expectedActions = [
        { type: 'requestUpdate' },
        {
            type: 'receiveUpdate',
            currencyData: {
                rates: rates,
                timestamp: date
            }
        }
    ];
    const store = mockStore({});
    return store.dispatch(Update())
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
});