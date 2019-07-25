import Connector from './connector';
import {createConnectorMock} from './mock';

export default function connect() {
    if (typeof chrome === 'undefined' || !chrome.extension) {
        return createConnectorMock();
    }
    return new Connector();
}
