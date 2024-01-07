import { createContext } from 'react';
import { GlobalInfoType, appGlobalInfo } from '../appInfo/appGlobalInfo';

const Context = createContext<GlobalInfoType>(appGlobalInfo);

export default Context;
