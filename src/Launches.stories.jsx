import { Launches, GET_LAUNCHES } from "./Launches";

const meta = {
    title: 'Launches',
    component: Launches,
};

export default meta;

export const Default = {
    parameters: {
    apolloClient: {
        mocks: [
            {
                request: {
                    query: GET_LAUNCHES,
                },
                delay: 1000,
                result: {
                    data: {
                        launches: {
                            launches: [
                                {
                                    id: '1',
                                    mission: {
                                        name: 'Test Launch',
                                    },
                                },
                            ],
                        },
                    },
                },
            }
        ]
    }
},
}