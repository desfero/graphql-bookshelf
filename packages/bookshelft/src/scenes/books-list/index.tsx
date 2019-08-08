import * as React from "react";
import {gql} from "apollo-boost";

import {BooksListLayout} from "./BooksListLayout";
import {useBooksListQuery} from "../../generated/graphql";

type QueryFunctionComponent<P = {}> = React.FunctionComponent<P> & { query: any }

const BooksList: QueryFunctionComponent = () => {
    const { data, error, loading } = useBooksListQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <BooksListLayout {...data} />;
};

BooksList.query = gql`
    query BooksList {
        books {
            ...BookItem
        }
    }
`;

export { BooksList };
