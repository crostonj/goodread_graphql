import {
GraphQLInt,
GraphQLObjectType,
GraphQLString,
GraphQLNonNull,
GraphQLList
} from 'graphql';

import addressType from './address.js';
import phoneType from './phone.js';
import loanType from './loan.js';

let borrowerType =  new GraphQLObjectType({
    name: "Borrower",
    fields: ()  => ({
        Ssn: {type: GraphQLString},
        BirthDate:{type: GraphQLString},
        FirstName:{type: GraphQLString},
        MiddleInitial:{type: GraphQLString},
        LastName:{type: GraphQLString},
        Address: {type: addressType},
        Addresses: {type: new GraphQLList(addressType)},
        Phones:  {type: new GraphQLList(phoneType)},
        Loans: {type: new GraphQLList(loanType)}
    })
});

export default borrowerType