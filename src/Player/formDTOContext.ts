import React from 'react';


export interface DTOContextType {

}

export const DTOContext = React.createContext<DTOContextType>({});

export const DTOProvider = DTOContext.Provider;
export const DTOConsumer = DTOContext.Consumer;
